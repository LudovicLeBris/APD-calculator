import { Component, DoCheck } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { ProjectListComponent } from './apd/project-list/project-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ProjectListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements DoCheck {
  title = 'APD-calculator';
  isLogged: boolean = false;

  ngDoCheck(): void {
    if (localStorage.getItem('userProfil')) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

}
