import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { ProjectComponent } from './project/project.component';
import { ProjectService } from './project.service';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddProjectService } from './add-project.service';
import { AllprojectsComponent } from './allprojects/allprojects.component';
import { UserprojectsComponent } from './userprojects/userprojects.component';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccountService } from './account.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProjectComponent,
    AddProjectComponent,
    AllprojectsComponent,
    UserprojectsComponent,
    AccountComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    RouterModule

  ],
  providers: [RegisterService, LoginService, ProjectService, AddProjectService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
