import { Component, OnInit } from '@angular/core';
import { ListCardComponent } from '../../ui/list-card/list-card.component';
import { AddButtonComponent } from '../../ui/add-button/add-button.component';
import { DataResultComponent } from '../../ui/data-result/data-result.component';
import { EditButtonComponent } from '../../ui/edit-button/edit-button.component';
import { BackButtonComponent } from '../../ui/back-button/back-button.component';
import { DuctNetwork, StateDuctNetwork } from '../shared/models/duct-network.model';
import { DuctSection, JsonDuctSection } from '../shared/models/duct-section.model';
import { DuctNetworkService } from '../shared/api/duct-network.service';
import { DuctSectionService } from '../shared/api/duct-section.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duct-section-list',
  standalone: true,
  imports: [
    ListCardComponent,
    AddButtonComponent,
    DataResultComponent,
    EditButtonComponent,
    BackButtonComponent
  ],
  templateUrl: './duct-section-list.component.html',
  styleUrl: './duct-section-list.component.css'
})
export class DuctSectionListComponent implements OnInit {
  ductNetwork: DuctNetwork = new DuctNetwork;
  ductSections: DuctSection[] = [];

  constructor(
    private ductNetworkService: DuctNetworkService,
    private ductSectionService : DuctSectionService,
    private router: Router,
  ) {
    const stateDuctNetwork = this.router.getCurrentNavigation()!.extras.state as StateDuctNetwork;
    this.ductNetwork = this.ductNetworkService.stateToDuctNetwork(stateDuctNetwork);
    this.ductSectionService.ductNetwork = this.ductNetwork;
  }

  ngOnInit(): void {
    this.ductSectionService.getDuctSections().subscribe(data => {
      if (data.message == "success") {
        localStorage.removeItem('ductSections');
        localStorage.setItem('ductSections', JSON.stringify(data.content));
        (JSON.parse(localStorage.getItem('ductSections')!) as JsonDuctSection[]).forEach((jsonDuctSection) => {
          const ductSection: DuctSection = this.ductSectionService.jsonToDuctSection(jsonDuctSection);
          this.ductSections.push(ductSection);
        });
      }
    })
  }
}
