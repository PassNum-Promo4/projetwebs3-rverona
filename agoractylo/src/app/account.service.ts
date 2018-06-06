import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AccountService {
  private _accountUrl = 'http://localhost:3000/api/account';

  constructor(private _http: Http) { }

  deleteAccount(userId) {
    const headers = new Headers;
    headers.append('userId', userId);
    const options = new RequestOptions();
    options.headers = headers;
    return this._http.delete(this._accountUrl, options);
  }

  editAccount(user) {
    return this._http.put(this._accountUrl, user);
  }
}


