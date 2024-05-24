import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { AuthService } from './shared/auth.service';
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
export class AppComponent {
  title = 'APD-calculator';

  constructor(
    protected authService: AuthService,
  ) {
    // this.authService.login({"email": "demo@demo.com", "password": "Azerty123!"});
  }

}
