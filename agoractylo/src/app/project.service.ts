import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoginService } from './login.service';

@Injectable()
export class ProjectService {
private _projectsUrl = 'http://localhost:3000/api/projects';
private _myProjectsUrl = 'http://localhost:3000/api/myprojects';
private _detailsUrl = 'http://localhost:3000/api/details';

constructor(private http: HttpClient,
    private _auth: LoginService,
private _http: Http) { }

getProjects() {
  return this.http.get<any>(this._projectsUrl);
}

getProjectDetails(projectId) {
  const headers = new Headers();
  headers.append('projectId', projectId);
  const options = new RequestOptions();
  options.headers = headers;
  return this._http.get(this._detailsUrl, options);
}

getMyProjects() {
  const userId = this._auth.getToken();
  const headers = new Headers();
  headers.append('userId', userId);
  const options = new RequestOptions();
  options.headers = headers;
  return this._http.get(this._myProjectsUrl, options);
}


deleteMyProject(project) {
  const projectId = project._id;
  const headers = new Headers();
  headers.append('projectId', projectId);
  const options = new RequestOptions();
  options.headers = headers;
  return this._http.delete(this._detailsUrl, options);
}

editMyProject(project) {
  return this._http.put(this._detailsUrl, project);
}

}
