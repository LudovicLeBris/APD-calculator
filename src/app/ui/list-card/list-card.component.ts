import { Component, OnInit } from '@angular/core';
import { EditButtonComponent } from '../edit-button/edit-button.component';
import { MoreButtonComponent } from '../more-button/more-button.component';
import { Material } from '../../apd/shared/models/material.model';
import { TotalApd } from '../../apd/shared/models/total-apd.model';

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
  name: string = 'Test';
  material: Material = new Material;
  totalApd: TotalApd = new TotalApd;

  ngOnInit(): void {
    this.material.setValue('Acier galvanisé');
    this.totalApd.setValue(200);
  }
}
