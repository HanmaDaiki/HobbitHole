class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  };

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    };
    return Promise.reject(`Ошибка ${ res.status }`);
  };

 getUserById (id) {
    return fetch(`${ this._baseUrl }/user/${ id }`, {
      method: "GET",
      headers: this._headers
    })
      .then(this._checkResponse);
  };
};

export const api = new Api({
  baseUrl: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});