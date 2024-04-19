import { Routes } from '@angular/router';
import { projectsResolver } from './shared/project-resolver.service';
import { ProjectListComponent } from './apd/project-list/project-list.component';
import { DuctNetworkListComponent } from './apd/duct-network-list/duct-network-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'mes-projets',
    pathMatch: 'full'
  },
  {
    path: 'mes-projets',
    component: ProjectListComponent,
    resolve: {projects: projectsResolver}
  },
  {
    path:'mes-projets/:id/sections',
    component: DuctNetworkListComponent,
  }
];
