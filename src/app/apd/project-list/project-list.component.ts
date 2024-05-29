import { Component, Input, OnInit } from '@angular/core';
import { JsonProject, Project } from '../shared/models/project.model';
import { ProjectService } from '../shared/api/project.service';
import { ProjectCardComponent } from '../../ui/project-card/project-card.component';
import { AddButtonComponent } from '../../ui/add-button/add-button.component';
import { ActivatedRoute } from '@angular/router';
import { LoaderComponent } from '../../ui/loader/loader.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    ProjectCardComponent,
    AddButtonComponent,
    LoaderComponent,
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  userId: number;
  pending: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService:ProjectService,
  ) {
    this.userId = JSON.parse(localStorage.getItem('userProfil')!).id;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      console.log('check project resolver data');
      console.log(data);
    })

    this.projectService.getProjects().subscribe({
      next: response => {
        localStorage.removeItem('projects');
        localStorage.setItem('projects', JSON.stringify(response.content));
        (JSON.parse(localStorage.getItem('projects')!) as JsonProject[]).forEach((jsonProject) => {
              const project: Project = this.projectService.JsonToProject(jsonProject);
              this.projects.push(project);
        })
        this.pending = false;
      },
    })
  }
}
