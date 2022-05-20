import { TIngredient, TCreateOrderRes, TMessageRes, TAuthRes, TGetNewTokenRes, TUserRes } from '../types';

class Api {
  private baseUrl: string;
  private headers: { [key: string]: string };

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.headers = { 'Content-Type': 'application/json' };
  }
  
  private checkResponseStatus<T>(res: Response): Promise<T> {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }
  
  getIngredients() {
    return fetch(`${this.baseUrl}/ingredients`, {
      method: 'GET',
    }).then(res => this.checkResponseStatus<{ success: boolean, data: TIngredient[] }>(res));
  }

  createOrder(ingredients: string[], token: string) {
    return fetch(`${this.baseUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify({ "ingredients": ingredients })
    }).then(res => this.checkResponseStatus<TCreateOrderRes>(res));
  }

  resetPasswordStepOne(email: string) {
    return fetch(`${this.baseUrl}/password-reset`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ "email": email })
    }).then(res => this.checkResponseStatus<TMessageRes>(res));
  }
  
  resetPasswordStepTwo(password: string, token: string) {
    return fetch(`${this.baseUrl}/password-reset/reset`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ "password": password, "token": token })
    }).then(res => this.checkResponseStatus<TMessageRes>(res));
  }
  
  register(name: string, email: string, password: string) {
    return fetch(`${this.baseUrl}/auth/register`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ "email": email, "password": password, "name": name })
    }).then(res => this.checkResponseStatus<TAuthRes>(res));
  }

  login(email: string, password: string) {
    return fetch(`${this.baseUrl}/auth/login`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ "email": email, "password": password })
    }).then(res => this.checkResponseStatus<TAuthRes>(res));
  }

  getNewToken(token: string) {
    return fetch(`${this.baseUrl}/auth/token`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ "token": token })
    }).then(res => this.checkResponseStatus<TGetNewTokenRes>(res));
  }
  
  logout(token: string) {
    return fetch(`${this.baseUrl}/auth/logout`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ "token": token })
    }).then(res => this.checkResponseStatus<TMessageRes>(res));
  }

  getUser(token: string) {
    return fetch(`${this.baseUrl}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    }).then(res => this.checkResponseStatus<TUserRes>(res));
  }

  updateUser(token: string, name: string, email: string, password: string) {
    return fetch(`${this.baseUrl}/auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify({ "name": name, "email": email, "password": password })
    }).then(res => this.checkResponseStatus<TUserRes>(res));
  }
}

export default new Api('https://norma.nomoreparties.space/api');
