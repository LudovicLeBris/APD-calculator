import { Routes } from '@angular/router';
import { projectsResolver } from './shared/project-resolver.service';
import { ProjectListComponent } from './apd/project-list/project-list.component';
import { DuctNetworkListComponent } from './apd/duct-network-list/duct-network-list.component';
import { DuctSectionListComponent } from './apd/duct-section-list/duct-section-list.component';
import { DuctSectionDetailComponent } from './apd/duct-section-detail/duct-section-detail.component';
import { DuctSectionAddComponent } from './apd/duct-section-add/duct-section-add.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'projets',
    pathMatch: 'full'
  },
  {
    path: 'projets',
    component: ProjectListComponent,
    resolve: {projects: projectsResolver},
  },
  {
    path: 'projets/:projectId',
    component: DuctNetworkListComponent,
  },
  {
    path: 'reseaux/:ductNetworkId',
    component: DuctSectionListComponent,
  },
  {
    path: 'sections/ajouter', component: DuctSectionAddComponent
  },
  {
    path: 'sections/:ductSectionId',
    component: DuctSectionDetailComponent
  }
];
