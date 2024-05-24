import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  template: `
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  `,
  styleUrl: './loader.component.css'
})
export class LoaderComponent {

}
