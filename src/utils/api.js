class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this._headers = { 'Content-Type': 'application/json' };
  }
  
  _checkResponseStatus(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }
  
  getIngredients() {
    return fetch(`${this._baseUrl}/ingredients`, {
      method: 'GET',
    }).then(res => this._checkResponseStatus(res));
  }

  createOrder(ingredients, token) {
    return fetch(`${this._baseUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify({ "ingredients": ingredients })
    }).then(res => this._checkResponseStatus(res));
  }

  resetPasswordStepOne(email) {
    return fetch(`${this._baseUrl}/password-reset`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ "email": email })
    }).then(res => this._checkResponseStatus(res));
  }
  
  resetPasswordStepTwo(password, token) {
    return fetch(`${this._baseUrl}/password-reset/reset`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ "password": password, "token": token })
    }).then(res => this._checkResponseStatus(res));
  }
  
  register(name, email, password) {
    return fetch(`${this._baseUrl}/auth/register`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ "email": email, "password": password, "name": name })
    }).then(res => this._checkResponseStatus(res));
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/auth/login`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ "email": email, "password": password })
    }).then(res => this._checkResponseStatus(res));
  }

  getNewToken(token) {
    return fetch(`${this._baseUrl}/auth/token`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ "token": token })
    }).then(res => this._checkResponseStatus(res));
  }
  
  logout(token) {
    return fetch(`${this._baseUrl}/auth/logout`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ "token": token })
    }).then(res => this._checkResponseStatus(res));
  }

  getUser(token) {
    return fetch(`${this._baseUrl}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    }).then(res => this._checkResponseStatus(res));
  }

  updateUser(token, name, email, password) {
    return fetch(`${this._baseUrl}/auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify({ "name": name, "email": email, "password": password })
    }).then(res => this._checkResponseStatus(res));
  }
}

export default new Api('https://norma.nomoreparties.space/api');
