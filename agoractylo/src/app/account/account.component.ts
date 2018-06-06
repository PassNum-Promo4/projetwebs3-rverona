import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  loginUserData = {
    username: '',
    password: '',
    _id: '',
  };
  constructor(private _edit: AccountService, private _auth: LoginService) {}

  ngOnInit() {}

  deleteAccount() {
    const userId = localStorage.getItem('local_token');
    this._edit.deleteAccount(userId).
    subscribe(
      res => {
        console.log(res),
        this._auth.logoutUser();
      },
      err => console.log(err)
    );
  }

  editAccount() {
    this.loginUserData._id = localStorage.getItem('local_token');
    console.log(this.loginUserData);
    this._edit.editAccount(this.loginUserData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      );
  }

}
