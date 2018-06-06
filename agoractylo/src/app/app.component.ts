import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { AccountService } from './account.service';
import { User} from './User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Agoractylo';

  constructor(private _auth: LoginService, private _authAccount: AccountService) {}
}
