import { Routes } from '@angular/router';
import { projectsResolver } from './shared/project-resolver.service';
import { ProjectListComponent } from './apd/project-list/project-list.component';

export const routes: Routes = [
  {
    path: '',
    component: ProjectListComponent,
    resolve: {projects: projectsResolver}
  },
];
