import * as apiTypes from '../@types/api';

import { API_URL } from './constants';
import { getCookie, setCookie } from './functions';

class Api {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  
  private checkResponseStatus<T>(res: Response): Promise<T> {
    return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
  }

  private async refreshToken() {
    return fetch(`${this.baseUrl}/auth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "token": getCookie('refreshToken') })
    }).then(res => this.checkResponseStatus<apiTypes.TRefreshTokenRes>(res));
  }

  private async fetchWithRefresh<T>(url: string, options: apiTypes.TRequestOptions) {
    try {
      const res = await fetch(url, options);
      return await this.checkResponseStatus<T>(res);
    } catch(err: any) {
      if (err.message === "jwt expired") {
        const refreshData = await this.refreshToken();

        if (!refreshData.success) Promise.reject(refreshData);
        
        setCookie('accessToken', refreshData.accessToken.split('Bearer ')[1]);
        setCookie('refreshToken', refreshData.refreshToken);
        options.headers.Authorization = refreshData.accessToken;
        
        const res = await fetch(url, options);
        return await this.checkResponseStatus<T>(res);
      } else {
        return Promise.reject(err);
      }
    }
  }

  async getUser() {
    return this.fetchWithRefresh<apiTypes.TUserRes>(`${this.baseUrl}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('accessToken')
      }
    });
  }

  async updateUser(name: string, email: string, password: string) {
    return this.fetchWithRefresh<apiTypes.TUserRes>(`${this.baseUrl}/auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('accessToken')
      },
      body: JSON.stringify({ "name": name, "email": email, "password": password })
    });
  }

  async register(name: string, email: string, password: string) {
    return fetch(`${this.baseUrl}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "email": email, "password": password, "name": name })
    }).then(res => this.checkResponseStatus<apiTypes.TAuthRes>(res));
  }

  async login(email: string, password: string) {
    return fetch(`${this.baseUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "email": email, "password": password })
    }).then(res => this.checkResponseStatus<apiTypes.TAuthRes>(res));
  }

  async resetPasswordStepOne(email: string) {
    return fetch(`${this.baseUrl}/password-reset`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "email": email })
    }).then(res => this.checkResponseStatus<apiTypes.TMessageRes>(res));
  }
  
  async resetPasswordStepTwo(password: string, token: string) {
    return fetch(`${this.baseUrl}/password-reset/reset`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "password": password, "token": token })
    }).then(res => this.checkResponseStatus<apiTypes.TMessageRes>(res));
  }
  
  async logout() {
    return fetch(`${this.baseUrl}/auth/logout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "token": getCookie('refreshToken') })
    }).then(res => this.checkResponseStatus<apiTypes.TMessageRes>(res));
  }
  
  async getIngredients() {
    return fetch(`${this.baseUrl}/ingredients`, {
      method: 'GET',
    }).then(res => this.checkResponseStatus<apiTypes.TIngredientsRes>(res));
  }

  async createOrder(ingredients: string[]) {
    return this.fetchWithRefresh<apiTypes.TCreateOrderRes>(`${this.baseUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('accessToken')
      },
      body: JSON.stringify({ "ingredients": ingredients })
    });
  }
}

export default new Api(API_URL);
