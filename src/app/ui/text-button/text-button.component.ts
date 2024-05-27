import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-button',
  standalone: true,
  imports: [],
  template: `
    <div class="h-8 text-button btn-{{bgColor}}-light dark:btn-{{bgColor}}-dark cursor-pointer">
      <p>{{ content }}</p>
    </div>
  `,
  styleUrl: './text-button.component.css'
})
export class TextButtonComponent {
  @Input() content:string = 'button'
  @Input() bgColor: 'primary' | 'secondary' | 'tertiary' | 'warning' = 'primary';
}
