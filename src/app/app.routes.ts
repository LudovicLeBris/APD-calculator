import { Routes } from '@angular/router';
import { projectsResolver } from './shared/project-resolver.service';
import { ProjectListComponent } from './apd/project-list/project-list.component';
import { DuctNetworkListComponent } from './apd/duct-network-list/duct-network-list.component';
import { DuctSectionListComponent } from './apd/duct-section-list/duct-section-list.component';
import { DuctSectionDetailComponent } from './apd/duct-section-detail/duct-section-detail.component';
import { DuctSectionAddComponent } from './apd/duct-section-add/duct-section-add.component';
import { DuctSectionUpdateComponent } from './apd/duct-section-update/duct-section-update.component';
import { DuctNetworkAddComponent } from './apd/duct-network-add/duct-network-add.component';
import { DuctNetworkUpdateComponent } from './apd/duct-network-update/duct-network-update.component';
import { ProjectAddComponent } from './apd/project-add/project-add.component';
import { ProjectUpdateComponent } from './apd/project-update/project-update.component';
import { authGuard } from './shared/auth.guard';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { ConfirmRegisterComponent } from './shared/confirm-register/confirm-register.component';
import { LostPasswordComponent } from './shared/lost-password/lost-password.component';
import { RecoverPasswordComponent } from './shared/recover-password/recover-password.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'projets',
    pathMatch: 'full'
  },
  {
    path: 'projets',
    canActivate: [authGuard],
    component: ProjectListComponent,
    resolve: {projects: projectsResolver},
  },
  {
    path: 'projets/ajouter', component: ProjectAddComponent, canActivate: [authGuard]
  },
  {
    path: 'projets/modifier', component: ProjectUpdateComponent, canActivate: [authGuard]
  },
  {
    path: 'projets/:projectId', component: DuctNetworkListComponent, canActivate: [authGuard]
  },
  {
    path: 'reseaux/ajouter', component: DuctNetworkAddComponent, canActivate: [authGuard]
  },
  {
    path: 'reseaux/modifier', component: DuctNetworkUpdateComponent, canActivate: [authGuard]
  },
  {
    path: 'reseaux/:ductNetworkId', component: DuctSectionListComponent, canActivate: [authGuard]
  },
  {
    path: 'sections/ajouter', component: DuctSectionAddComponent, canActivate: [authGuard]
  },
  {
    path: 'sections/modifier', component: DuctSectionUpdateComponent, canActivate: [authGuard]
  },
  {
    path: 'sections/:ductSectionId', component: DuctSectionDetailComponent, canActivate: [authGuard]
  },
  {
    path: 'connexion', component: LoginComponent
  },
  {
    path: 'enregistrement', component: RegisterComponent
  },
  {
    path: 'enregistrement/:userId', component: ConfirmRegisterComponent
  },
  {
    path: 'mot-de-passe-perdu', component: LostPasswordComponent
  },
  {
    path: 'recuperation-mot-de-passe/:guid', component: RecoverPasswordComponent
  },
];
