import { Component, Input, OnInit } from '@angular/core';
import { EditButtonComponent } from '../edit-button/edit-button.component';
import { MoreButtonComponent } from '../more-button/more-button.component';
import { Material } from '../../apd/shared/models/material.model';
import { TotalApd } from '../../apd/shared/models/total-apd.model';
import { DuctNetwork } from '../../apd/shared/models/duct-network.model';
import { DuctSection } from '../../apd/shared/models/duct-section.model';

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
  name: string = 'Test';
  material: Material = new Material;
  totalApd: TotalApd = new TotalApd;
  url: any[] = [''];

  ngOnInit(): void {
    this.name = this.ductData.name;
    this.totalApd = this.ductData.totalApd;
    if (this.ductData instanceof(DuctNetwork)) {
      this.material = this.ductData.generalMaterial;
      this.url = [`reseaux`, this.ductData.id]
    } else if (this.ductData instanceof(DuctSection)) {
      this.material = this.ductData.material;
      this.url = [`sections`, this.ductData.id]
    }
  }
}
