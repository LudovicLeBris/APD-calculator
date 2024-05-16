import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-project-delete',
  standalone: true,
  imports: [],
  templateUrl: './project-delete.component.html',
  styleUrl: './project-delete.component.css'
})
export class ProjectDeleteComponent {
  @Output() clickedOut = new EventEmitter<boolean>();
  @Output() clickedDelete = new EventEmitter<boolean>();

  closeDeleteModal(): void {
    this.clickedOut.next(false);
  }

  deleteProject(): void {
    this.clickedDelete.next(true);
  }
}
