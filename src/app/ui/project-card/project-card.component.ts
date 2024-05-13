import { Component, Input, OnInit } from '@angular/core';
import { MoreButtonComponent } from '../more-button/more-button.component';
import { EditButtonComponent } from '../edit-button/edit-button.component';
import { Project } from '../../apd/shared/models/project.model';
import { Router } from '@angular/router';

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
export class ProjectCardComponent implements OnInit {
  @Input() project!: Project;
  // TODO : 36 char max
  name: string = '';
  ductNetworkQuantity: number = 0;
  altitude: number = 0;
  temperature: number = 20;

  constructor (
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.name = this.project.name;
    this.ductNetworkQuantity = this.project.ductNetworks.length;
    this.altitude = this.project.generalAltitude.getValue() as number;
    this.temperature = this.project.generalTemperature.getValue() as number;
  }

  goToProject():void {
    this.router.navigate(['projets', this.project.id])
  }
}
