import { AfterContentInit, Component, OnInit } from '@angular/core';
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
import { ListCardComponent } from './ui/list-card/list-card.component';
import { AuthService } from './shared/auth.service';
import { ProjectService } from './apd/shared/api/project.service';
import { JsonProject, Project } from './apd/shared/models/project.model';
import { DuctNetworkService } from './apd/shared/api/duct-network.service';
import { DuctNetwork, JsonDuctNetwork } from './apd/shared/models/duct-network.model';
import { DuctSection, JsonDuctSection } from './apd/shared/models/duct-section.model';
import { DuctSectionService } from './apd/shared/api/duct-section.service';

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
    ListCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'APD-calculator';
  projects: Project[] = [];

  constructor(
    private authService: AuthService,
    private projectService: ProjectService,
    private ductNetworkService: DuctNetworkService,
    private ductSectionService: DuctSectionService,
  ) {
    this.authService.login({"email": "demo@demo.com", "password": "Azerty123!"})
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((response) => {
      localStorage.removeItem('projects');
      localStorage.setItem('projects', JSON.stringify(response.content));

      (JSON.parse(localStorage.getItem('projects')!) as JsonProject[]).forEach((jsonProject) => {
        const project = this.projectService.JsonToProject((jsonProject as JsonProject));
        this.projects.push(project)
      });

      const project = this.projects[0];
      this.ductNetworkService.project = project;
      const ductNetwork = project.ductNetworks[0];
      this.ductSectionService.ductNetwork = ductNetwork;
      const ductSection = ductNetwork.ductSections[0];
    });


  }

  ngAfterContentInit(): void {

  }

}
