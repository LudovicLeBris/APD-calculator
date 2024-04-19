import { Component, OnInit } from '@angular/core';
import { Project, StateProject } from '../shared/models/project.model';
import { ListCardComponent } from '../../ui/list-card/list-card.component';
import { AddButtonComponent } from '../../ui/add-button/add-button.component';
import { DataResultComponent } from '../../ui/data-result/data-result.component';
import { EditButtonComponent } from '../../ui/edit-button/edit-button.component';
import { BackButtonComponent } from '../../ui/back-button/back-button.component';
import { Router } from '@angular/router';
import { DuctNetworkService } from '../shared/api/duct-network.service';
import { DuctNetwork, JsonDuctNetwork } from '../shared/models/duct-network.model';
import { ProjectService } from '../shared/api/project.service';

@Component({
  selector: 'app-duct-network-list',
  standalone: true,
  imports: [
    ListCardComponent,
    AddButtonComponent,
    DataResultComponent,
    EditButtonComponent,
    BackButtonComponent
  ],
  templateUrl: './duct-network-list.component.html',
  styleUrl: './duct-network-list.component.css'
})
export class DuctNetworkListComponent implements OnInit {
  project: Project = new Project;
  ductNetworks: DuctNetwork[] = [];

  constructor(
    private projectService: ProjectService,
    private ductNetworkService: DuctNetworkService,
    private router: Router,
  ) {
    const stateProject = this.router.getCurrentNavigation()!.extras.state as StateProject
    this.project = this.projectService.stateToProject(stateProject);
    this.ductNetworkService.project = this.project;
  }

  ngOnInit(): void {
    this.ductNetworkService.getDuctNetworks().subscribe(data => {
      if (data.message == "success") {
        localStorage.removeItem('ductNetworks');
        localStorage.setItem('ductNetworks', JSON.stringify(data.content));
        (JSON.parse(localStorage.getItem('ductNetworks')!) as JsonDuctNetwork[]).forEach((jsonDuctNetwork) => {
          const ductNetwork: DuctNetwork = this.ductNetworkService.jsonToDuctNetwork(jsonDuctNetwork);
          this.ductNetworks.push(ductNetwork);
        });
      }
    });
  }
}