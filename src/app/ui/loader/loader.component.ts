import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  template: `
  <div class="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 text-center bg-bg-light rounded-full px-2 pt-2">
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  </div>
  `,
  styleUrl: './loader.component.css'
})
export class LoaderComponent {

}
