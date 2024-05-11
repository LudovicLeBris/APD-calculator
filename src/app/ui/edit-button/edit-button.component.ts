import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../apd/shared/models/project.model';
import { DuctNetwork } from '../../apd/shared/models/duct-network.model';
import { DuctSection } from '../../apd/shared/models/duct-section.model';

@Component({
  selector: 'app-edit-button',
  standalone: true,
  imports: [],
  template: `
    <div (click)="goToEditEntity()" class="size-8 button {{ buttonLight }} dark:{{ buttonDark }}">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
      </svg>
    </div>
  `,
  styleUrl: './edit-button.component.css'
})
export class EditButtonComponent implements OnInit {
  buttonLight: string = 'btn-primary-light';
  buttonDark: string = 'btn-primary-dark';

  @Input() variant: boolean = false;
  @Input() parentId: number | undefined;
  @Input() entityType: 'project' | 'ductNetwork' | 'ductSection' | undefined;
  @Input() entityId: number | undefined;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.variant) {
      this.buttonLight = 'btn-tertiary-light';
      this.buttonDark = 'btn-tertiary-dark';
    }
  }

  goToEditEntity(): void {
    if (this.entityType == 'project') {
      this.router.navigate(['projets/modifier', {userId: this.parentId}]);
    } else if (this.entityType == 'ductNetwork') {
      this.router.navigate(['reseaux/modifier', {projectId: this.parentId}]);
    } else if (this.entityType == 'ductSection') {
      this.router.navigate(['sections/modifier'], {queryParams: {ductNetworkId: this.parentId, ductSectionId: this.entityId}});
    }
  }
}
