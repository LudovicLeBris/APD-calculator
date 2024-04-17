import { Component, Input, OnInit } from '@angular/core';
import { JsonProject, Project } from '../shared/models/project.model';
import { ProjectService } from '../shared/api/project.service';
import { ProjectCardComponent } from '../../ui/project-card/project-card.component';
import { AddButtonComponent } from '../../ui/add-button/add-button.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    ProjectCardComponent,
    AddButtonComponent,
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService:ProjectService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      console.log('check route resolver data');
      console.log(data);
    })

    this.projectService.getProjects().subscribe(data => {
      if (data.message == "success") {
        localStorage.removeItem('projects');
        localStorage.setItem('projects', JSON.stringify(data.content));
        (JSON.parse(localStorage.getItem('projects')!) as JsonProject[]).forEach((jsonProject) => {
          const project: Project = this.projectService.JsonToProject(jsonProject)
          this.projects.push(project);
        })
      }
    })
  }
}
