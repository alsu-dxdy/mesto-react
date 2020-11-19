import { serverUrl } from '../config';

class Api {
  constructor(options) {
    this.options = options;
  }
  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getInitialCards() {
    return (
      fetch(this.options.baseUrl + `/cards`, {
        method: "GET",
        headers: {
          authorization: this.options.headers.authorization
        }
      })
        .then(res => this._getResponseData(res))
    );
  }

  getUserInfo() {
    return fetch(this.options.baseUrl + `/users/me`, {
      method: "GET",
      headers: {
        authorization: this.options.headers.authorization
      }
    }).then(res => this._getResponseData(res));
  }

  sendServerUserInfo(name, job) {
    return fetch(this.options.baseUrl + `/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this.options.headers.authorization,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        about: job
      })
    }).then(res => this._getResponseData(res));
  }

  addCard(name, url) {
    return fetch(this.options.baseUrl + `/cards`, {
      method: "POST",
      headers: {
        authorization: this.options.headers.authorization,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        link: url
      })
    }).then(res => this._getResponseData(res));
  }

  deleteCard(cardId) {
    return fetch(this.options.baseUrl + `/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this.options.headers.authorization
      }
    }).then(res => this._getResponseData(res));
  }

  addLike(cardId) {
    return fetch(this.options.baseUrl + `/cards/like/${cardId}`, {
      method: "PUT",
      headers: {
        authorization: this.options.headers.authorization
      }
    }).then(res => this._getResponseData(res));
  }

  removeLike(cardId) {
    return fetch(this.options.baseUrl + `/cards/like/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this.options.headers.authorization
      }
    }).then(res => this._getResponseData(res));
  }

  sendServerAvatar(url) {
    return fetch(this.options.baseUrl + `/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this.options.headers.authorization,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        avatar: url
      })
    }).then(res => this._getResponseData(res));
  }
}

const api = new Api({
  baseUrl: `${serverUrl}`,
  headers: {
    authorization: "24efeac8-6c91-4328-9f60-c8c7ed524d9c",
    "Content-Type": "application/json"
  }
});

export {
  api
};
