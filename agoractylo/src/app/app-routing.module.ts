import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { ProjectComponent } from './project/project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddProjectService } from './add-project.service';
import { AllprojectsComponent } from './allprojects/allprojects.component';
import { AccountComponent } from './account/account.component';
import { ProjectService } from './project.service';


const routes: Routes = [
  { path: '', redirectTo: '/allprojects', pathMatch: 'full' },
  { path: 'allprojects', component: ProjectComponent },

  { path: 'addproject', component: AddProjectComponent },

  { path: 'register', component: RegisterComponent },

  { path: 'login', component: LoginComponent },

  { path: 'account', component: AccountComponent },

];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})



export class AppRoutingModule { }
