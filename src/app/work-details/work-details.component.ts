import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Router } from '@angular/router';
import { Location }               from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { ProjectService } from '../work/projects.service';
import { Project } from '../work/project';



@Component({
  moduleId: module.id,
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {

  @Input() project: Project;
// create private assignments
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
//on page init, get project id from route params in html
  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.projectService.getProject(+params['id']))
      .subscribe(project => this.project = project);
  }
// ensure browser back button works
  goBack(): void {
  this.location.back();
}

}
