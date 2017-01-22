import { Component, Input, OnInit } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from './mock-projects';
import { ProjectService } from './projects.service';

@Component({
  moduleId: module.id,
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],

})
export class WorkComponent implements OnInit {

  ngOnInit(): void {
    this.getProjects();
  }

  projects: Project[];

  constructor(
    private projectService: ProjectService,
  ) {}

  getProjects(): void {
    this.projectService.getProjects().then(projects => this.projects = projects);

  }


}
