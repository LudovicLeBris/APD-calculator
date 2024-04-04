import { Component } from '@angular/core';

@Component({
  selector: 'app-more-button',
  standalone: true,
  imports: [],
  template: `
    <div class="w-14 h-6 btn-light dark:btn-dark">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd" />
      </svg>
    </div>
  `,
  styleUrl: './more-button.component.css'
})
export class MoreButtonComponent {

}