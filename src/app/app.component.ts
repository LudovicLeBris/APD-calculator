import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { EditButtonComponent } from './ui/edit-button/edit-button.component';
import { MoreButtonComponent } from './ui/more-button/more-button.component';
import { AddButtonComponent } from './ui/add-button/add-button.component';
import { BackButtonComponent } from './ui/back-button/back-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    EditButtonComponent,
    MoreButtonComponent,
    AddButtonComponent,
    BackButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'APD-calculator';
}
