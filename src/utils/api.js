export default class Api {
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

  createOrder(ingredients) {
    return fetch(`${this._baseUrl}/orders`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ "ingredients": ingredients })
    }).then(res => this._checkResponseStatus(res));
  }
}
