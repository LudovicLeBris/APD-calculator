import { Component, OnInit } from '@angular/core';
import { BackButtonComponent } from '../../ui/back-button/back-button.component';
import { JsonProject, Project } from '../shared/models/project.model';
import { DuctNetwork } from '../shared/models/duct-network.model';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../shared/api/project.service';
import { DuctNetworkFormComponent } from '../duct-network-form/duct-network-form.component';

@Component({
  selector: 'app-duct-network-add',
  standalone: true,
  imports: [
    BackButtonComponent,
    DuctNetworkFormComponent
  ],
  template: `
    <section class="flex justify-between items-start m-2 border rounded-lg border-primary-light dark:border-primary-dark dark:text-bg-light">
      <div class="w-5"></div>
      <div class="p-2 flex flex-col gap-2">
        <h1 class="text-center font-bold text-xl">Ajout d'un réseau de gaine</h1>
        <p class="text-center">Projet : <span>{{ project.name }}</span></p>
      </div>
      <div>
        <app-back-button [url]="['projets', project.id]"></app-back-button>
      </div>
    </section>
    <section class="flex flex-col gap-2 m-2">
      <app-duct-network-form [ductNetwork]="ductNetwork" [project]="project"></app-duct-network-form>
    </section>
  `,
  styleUrl: './duct-network-add.component.css'
})
export class DuctNetworkAddComponent implements OnInit {
  ductNetwork = new DuctNetwork;
  project = new Project;

  constructor (
    private route: ActivatedRoute,
    private projectService: ProjectService,
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.queryParamMap.get('projectId');
    const jsonProject = (JSON.parse(localStorage.getItem('projects')!) as JsonProject[]).find(element => element.id == +projectId!);
    this.project = this.projectService.JsonToProject(jsonProject!);
  }
}
