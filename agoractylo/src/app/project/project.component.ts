import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects = [];
  filteredProjects = [];
  query: String;
  displayedProjects = [];

  constructor(private _projectService: ProjectService, private _auth: LoginService) { }

  ngOnInit() {
    this._projectService.getProjects()
    .subscribe(
      res => {
        this.projects = res;
        this.displayedProjects = this.projects;
      },
      err => alert(err.error)
);
  }

}
