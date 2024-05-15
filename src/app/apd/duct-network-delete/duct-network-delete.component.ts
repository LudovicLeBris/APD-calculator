import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-duct-network-delete',
  standalone: true,
  imports: [],
  templateUrl: './duct-network-delete.component.html',
  styleUrl: './duct-network-delete.component.css'
})
export class DuctNetworkDeleteComponent {
  @Output() clickedOut = new EventEmitter<boolean>();
  @Output() clickedDelete = new EventEmitter<boolean>();

  closeDeleteModal(): void {
    this.clickedOut.next(false);
  }

  deleteDuctNetwork(): void {
    this.clickedDelete.next(true);
  }
}
