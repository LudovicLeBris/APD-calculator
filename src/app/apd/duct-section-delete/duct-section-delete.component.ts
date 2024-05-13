import { AfterViewChecked, AfterViewInit, Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-duct-section-delete',
  standalone: true,
  imports: [],
  templateUrl: './duct-section-delete.component.html',
  styleUrl: './duct-section-delete.component.css'
})
export class DuctSectionDeleteComponent {
  @Output() clickedOut = new EventEmitter<boolean>();
  @Output() clickedDelete = new EventEmitter<boolean>();

  // @HostListener("document:click")
  closeDeleteModal():void {
    this.clickedOut.next(false);
  }

  deleteDuctSection():void {
    this.clickedDelete.next(true)
  }
}
