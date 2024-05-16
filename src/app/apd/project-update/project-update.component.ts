import { Component, OnInit } from '@angular/core';
import { JsonProject, Project } from '../shared/models/project.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../shared/api/project.service';
import { DeleteButtonComponent } from '../../ui/delete-button/delete-button.component';
import { BackButtonComponent } from '../../ui/back-button/back-button.component';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { ProjectDeleteComponent } from '../project-delete/project-delete.component';

@Component({
  selector: 'app-project-update',
  standalone: true,
  imports: [
    BackButtonComponent,
    ProjectFormComponent,
    ProjectDeleteComponent,
    DeleteButtonComponent,
  ],
  template: `
    <section class="flex justify-between items-start my-2 border rounded-lg border-primary-light dark:border-primary-dark dark:text-bg-light">
      <div (click)="showDeleteModal()">
        <app-delete-button></app-delete-button>
      </div>
      <div class="p-2 flex flex-col gap-2">
        <h1 class="text-center font-bold text-xl">Modification d'un projet</h1>
      </div>
      <div>
        <app-back-button [url]="['projets']"></app-back-button>
      </div>
    </section>
    <section class="flex flex-col gap-2 m-2">
      <app-project-form [project]="project"></app-project-form>
    </section>
    @if (isDeleteModalIsActive) {
      <app-project-delete (clickedOut)="hideDeleteModal($event)" (clickedDelete)="deleteProject()"></app-project-delete>
    }
  `,
  styleUrl: './project-update.component.css'
})
export class ProjectUpdateComponent implements OnInit {
  project = new Project;
  isDeleteModalIsActive: boolean = false;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.queryParamMap.get('projectId');
    const jsonProject = (JSON.parse(localStorage.getItem('projects')!) as JsonProject[]).find(element => element.id == +projectId!);
    this.project = this.projectService.JsonToProject(jsonProject!);
  }

  showDeleteModal(): void {
    this.isDeleteModalIsActive = true;
    document.body.classList.add('overflow-y-hidden');
  }

  hideDeleteModal(isActive: boolean): void {
    this.isDeleteModalIsActive = isActive;
    document.body.classList.remove('overflow-y-hidden');
  }

  deleteProject(): void {
    this.hideDeleteModal(false);
    this.projectService.deleteProject(this.project).subscribe((response) => {
      console.log('Project deleted');
      this.router.navigate(['projets']);
    })
  }

}
