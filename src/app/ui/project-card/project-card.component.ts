import { Component } from '@angular/core';
import { MoreButtonComponent } from '../more-button/more-button.component';
import { EditButtonComponent } from '../edit-button/edit-button.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    EditButtonComponent,
    MoreButtonComponent,
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  // TODO : 36 char max
  projectName: string = 'Test';
  ductNetworkQuantity: number = 0;
  projectAltitude: number = 0;
  projectTemperature: number = 20;
}
