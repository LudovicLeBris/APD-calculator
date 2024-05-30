import { Component, OnInit } from '@angular/core';
import { BackButtonComponent } from '../../ui/back-button/back-button.component';
import { DuctNetworkFormComponent } from '../duct-network-form/duct-network-form.component';
import { DeleteButtonComponent } from '../../ui/delete-button/delete-button.component';
import { DuctNetwork, JsonDuctNetwork } from '../shared/models/duct-network.model';
import { JsonProject, Project } from '../shared/models/project.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../shared/api/project.service';
import { DuctNetworkService } from '../shared/api/duct-network.service';
import { DuctNetworkDeleteComponent } from '../duct-network-delete/duct-network-delete.component';

@Component({
  selector: 'app-duct-network-update',
  standalone: true,
  imports: [
    BackButtonComponent,
    DuctNetworkFormComponent,
    DeleteButtonComponent,
    DuctNetworkDeleteComponent
  ],
  template: `
    <section class="flex justify-between items-start my-2 border rounded-lg border-primary-light dark:border-primary-dark dark:text-bg-light">
      <div (click)="showDeleteModal()">
        <app-delete-button></app-delete-button>
      </div>
      <div class="p-2 flex flex-col gap-2">
        <h1 class="text-center font-bold text-xl">Modification d'un réseau de gaine</h1>
        <p class="text-center">Projet : <span>{{ project.name }}</span></p>
      </div>
      <div>
        <app-back-button [url]="['projets', project.id]"></app-back-button>
      </div>
    </section>
    <section class="flex flex-col gap-2 m-2">
      <app-duct-network-form [ductNetwork]="ductNetwork" [project]="project"></app-duct-network-form>
    </section>
    @if (isDeleteModalIsActive) {
      <app-duct-network-delete (clickedOut)="hideDeleteModal($event)" (clickedDelete)="deleteDuctNetwork()"></app-duct-network-delete>
    }
  `,
  styleUrl: './duct-network-update.component.css'
})
export class DuctNetworkUpdateComponent implements OnInit {
  ductNetwork = new DuctNetwork;
  project = new Project;
  isDeleteModalIsActive: boolean = false;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private ductNetworkService: DuctNetworkService,
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.queryParamMap.get('projectId');
    const jsonProject = (JSON.parse(localStorage.getItem('projects')!) as JsonProject[]).find(element => element.id == +projectId!);
    this.project = this.projectService.JsonToProject(jsonProject!);
    const ductNetworkId = this.route.snapshot.queryParamMap.get('ductNetworkId');
    const jsonDuctNetwork = (JSON.parse(localStorage.getItem('ductNetworks')!) as JsonDuctNetwork[]).find(element => element.id == +ductNetworkId!);
    this.ductNetwork = this.ductNetworkService.jsonToDuctNetwork(jsonDuctNetwork!);
  }

  showDeleteModal(): void {
    this.isDeleteModalIsActive = true;
    document.body.classList.add('overflow-y-hidden');
  }

  hideDeleteModal(isActive: boolean): void {
    this.isDeleteModalIsActive = isActive;
    document.body.classList.remove('overflow-y-hidden');
  }

  deleteDuctNetwork(): void {
    this.hideDeleteModal(false);
    this.ductNetworkService.deleteDuctNetwork(this.ductNetwork).subscribe((response) => {
      console.log('Duct network deleted');
      this.router.navigate(['projets', this.project.id]);
    })
  }
}
