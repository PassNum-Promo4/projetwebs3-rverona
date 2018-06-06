import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AddProjectService {
private _addProjectUrl = 'http://localhost:3000/api/addproject';
  constructor(private http: HttpClient) { }
initProject(project) {
return this.http.post(this._addProjectUrl, project);
}
}
