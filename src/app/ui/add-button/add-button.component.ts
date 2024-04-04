import { Component } from '@angular/core';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [],
  template: `
    <div class="size-12 btn-light dark:btn-dark">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
        <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
      </svg>
    </div>
  `,
  styleUrl: './add-button.component.css'
})
export class AddButtonComponent {

}
