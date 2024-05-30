import { Component, OnInit } from '@angular/core';
import { DataResultComponent } from '../../ui/data-result/data-result.component';
import { EditButtonComponent } from '../../ui/edit-button/edit-button.component';
import { BackButtonComponent } from '../../ui/back-button/back-button.component';
import { DuctNetwork, JsonDuctNetwork } from '../shared/models/duct-network.model';
import { DuctSection, JsonDuctSection } from '../shared/models/duct-section.model';
import { DuctNetworkService } from '../shared/api/duct-network.service';
import { DuctSectionService } from '../shared/api/duct-section.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-duct-section-detail',
  standalone: true,
  imports: [
    DataResultComponent,
    EditButtonComponent,
    BackButtonComponent
  ],
  templateUrl: './duct-section-detail.component.html',
  styleUrl: './duct-section-detail.component.css'
})
export class DuctSectionDetailComponent implements OnInit {
  ductNetwork: DuctNetwork = new DuctNetwork;
  ductSection: DuctSection = new DuctSection;

  constructor(
    private ductNetworkService: DuctNetworkService,
    private ductSectionService: DuctSectionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const ductSectionId = this.route.snapshot.paramMap.get('ductSectionId');
    const jsonDuctSection = (JSON.parse(localStorage.getItem('ductSections')!) as JsonDuctSection[]).find(element => element.id == +ductSectionId!);
    this.ductSection = this.ductSectionService.jsonToDuctSection(jsonDuctSection!)

    const ductNetworkId = this.ductSection.ductNetworkId;
    const jsonDuctNetwork = (JSON.parse(localStorage.getItem('ductNetworks')!) as JsonDuctNetwork[]).find(element => element.id == +ductNetworkId!)
    this.ductNetwork = this.ductNetworkService.jsonToDuctNetwork(jsonDuctNetwork!)

    this.ductSectionService.ductNetwork = this.ductNetwork;
  }
}
