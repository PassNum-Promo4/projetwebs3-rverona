import { Component, OnInit } from '@angular/core';
import { AddProjectService } from '../add-project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
addProjectData = {
};
  constructor(private _createProject: AddProjectService) { }

  ngOnInit() {
  }
addProject() {
  this._createProject.initProject(this.addProjectData)
  .subscribe(
    res => console.log(res),
    err => console.log(err)
  );
}
}
