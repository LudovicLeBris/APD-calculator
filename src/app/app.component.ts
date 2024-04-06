import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { EditButtonComponent } from './ui/edit-button/edit-button.component';
import { MoreButtonComponent } from './ui/more-button/more-button.component';
import { AddButtonComponent } from './ui/add-button/add-button.component';
import { BackButtonComponent } from './ui/back-button/back-button.component';
import { CloseButtonComponent } from './ui/close-button/close-button.component';
import { DeleteButtonComponent } from './ui/delete-button/delete-button.component';
import { ThemeButtonComponent } from './ui/theme-button/theme-button.component';
import { TextButtonComponent } from './ui/text-button/text-button.component';
import { DataResultComponent } from './ui/data-result/data-result.component';
import { ProjectCardComponent } from './ui/project-card/project-card.component';

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
    CloseButtonComponent,
    DeleteButtonComponent,
    ThemeButtonComponent,
    TextButtonComponent,
    DataResultComponent,
    ProjectCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'APD-calculator';
}
