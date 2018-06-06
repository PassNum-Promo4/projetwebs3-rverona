import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { User} from './User';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Options } from 'selenium-webdriver/safari';

@Injectable()
export class LoginService {
  private _loginUrl = 'http://localhost:3000/api/login';
  private _accountUrl = 'http://localhost:3000/api/account';
  constructor(private _http: Http, private _router: Router, private http: HttpClient) { }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('local_token');
  }

  logoutUser() {
    localStorage.removeItem('local_token');
    this._router.navigate(['']);
  }

  getToken() {
    return localStorage.getItem('local_token');
  }
}

