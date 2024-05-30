import { Component, Input, OnInit } from '@angular/core';
import { EditButtonComponent } from '../edit-button/edit-button.component';
import { MoreButtonComponent } from '../more-button/more-button.component';
import { Material } from '../../apd/shared/models/material.model';
import { TotalApd } from '../../apd/shared/models/total-apd.model';
import { DuctNetwork } from '../../apd/shared/models/duct-network.model';
import { DuctSection } from '../../apd/shared/models/duct-section.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-card',
  standalone: true,
  imports: [
    EditButtonComponent,
    MoreButtonComponent
  ],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css'
})
export class ListCardComponent implements OnInit {
  @Input() ductData!: DuctNetwork | DuctSection;
  parentId: number | undefined;
  name: string = 'Test';
  material: Material = new Material;
  totalApd: TotalApd = new TotalApd;
  url: any[] = [''];
  entityType: 'ductNetwork' | 'ductSection' | undefined;

  constructor (
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.name = this.ductData.name;
    this.totalApd = this.ductData.totalApd;
    if (this.ductData instanceof(DuctNetwork)) {
      this.parentId = this.ductData.projectId;
      this.material = this.ductData.generalMaterial;
      this.url = [`reseaux`, this.ductData.id];
      this.entityType = 'ductNetwork';
    } else if (this.ductData instanceof(DuctSection)) {
      this.parentId = this.ductData.ductNetworkId;
      this.material = this.ductData.material;
      this.url = [`sections`, this.ductData.id];
      this.entityType = 'ductSection';
    }
  }

  goToEntity():void {
    this.router.navigate(this.url);
  }
}
