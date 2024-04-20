import { Routes } from '@angular/router';
import { projectsResolver } from './shared/project-resolver.service';
import { ProjectListComponent } from './apd/project-list/project-list.component';
import { DuctNetworkListComponent } from './apd/duct-network-list/duct-network-list.component';
import { DuctSectionListComponent } from './apd/duct-section-list/duct-section-list.component';
import { DuctSectionDetailComponent } from './apd/duct-section-detail/duct-section-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'mes-projets',
    pathMatch: 'full'
  },
  {
    path: 'mes-projets',
    component: ProjectListComponent,
    resolve: {projects: projectsResolver},
  },
  {
    path: 'mes-projets/:projectId',
    component: DuctNetworkListComponent,
  },
  {
    path: 'reseaux/:ductNetworkId',
    component: DuctSectionListComponent,
  },
  {
    path: 'sections/:ductSectionId',
    component: DuctSectionDetailComponent
  }
];
