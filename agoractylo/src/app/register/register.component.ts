import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../User';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username = '';
  password = '';
  userData: any = {};
  constructor(private _auth: RegisterService) { }

  ngOnInit() {

  }
registerNewUser() {
  this._auth.register(this.userData)
  .subscribe(
   res => {
    localStorage.setItem('token', res._id);
    console.log(res);



    },
err => console.log(err)
  );
}
}
