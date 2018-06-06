import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { log } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {};
  constructor(private _auth: LoginService,
              private _router: Router) { }

  ngOnInit() {
  }


  loginUser() {
    this._auth.loginUser(this.loginUserData)
        .subscribe(
          res => {
            const token = res._id;
            localStorage.setItem('local_token', token);
            this._router.navigate(['/user']);
          },
          err => {
            alert(err.error);
          }
);
}

}

