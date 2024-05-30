import { Component, OnInit } from '@angular/core';
import { BackButtonComponent } from '../../ui/back-button/back-button.component';
import { Project } from '../shared/models/project.model';
import { ProjectFormComponent } from '../project-form/project-form.component';

@Component({
  selector: 'app-project-add',
  standalone: true,
  imports: [
    BackButtonComponent,
    ProjectFormComponent,
  ],
  template: `
    <section class="flex justify-between items-start m-2 border rounded-lg border-primary-light dark:border-primary-dark dark:text-bg-light">
      <div class="w-5"></div>
      <div class="p-2 flex flex-col gap-2">
        <h1 class="text-center font-bold text-xl">Ajout d'un projet</h1>
      </div>
      <div>
        <app-back-button [url]="['projets']"></app-back-button>
      </div>
    </section>
    <section class="flex flex-col gap-2 m-2">
      <app-project-form [project]="project"></app-project-form>
    </section>
  `,
  styleUrl: './project-add.component.css'
})
export class ProjectAddComponent {
  project = new Project;
}
