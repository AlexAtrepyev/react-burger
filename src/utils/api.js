export default class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }
  
  _checkResponseStatus(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }
  
  getData() {
    return fetch(this._baseUrl, {
      method: 'GET',
    }).then(res => this._checkResponseStatus(res));
  }
}
