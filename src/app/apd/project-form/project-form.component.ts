import { Component, Input, OnInit } from '@angular/core';
import { JsonProject, Project } from '../shared/models/project.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Altitude } from '../shared/models/altitude.model';
import { Temperature } from '../shared/models/temperature.model';
import { ProjectService } from '../shared/api/project.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'
})
export class ProjectFormComponent implements OnInit{
  @Input() project!: Project;
  isAddForm: boolean = false;
  form: FormGroup = new FormGroup({});

  name: string = '';
  generalAltitude = new Altitude();
  generalTemperature = new Temperature();

  constructor (
    private projectService: ProjectService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('ajouter');

    if (!this.isAddForm) {
      this.name = this.project.name;
      this.generalAltitude = this.project.generalAltitude;
      this.generalTemperature = this.project.generalTemperature;
    } else {
      this.generalAltitude.setValue(0);
      this.generalTemperature.setValue(20);
    }

    this.form = this.formBuilder.group({
      name: [this.name, [Validators.required, Validators.maxLength(36)]],
      generalAltitude: [this.generalAltitude.getValue(), [Validators.min(0)]],
      generalTemperature: [this.generalTemperature.getValue()],
    });
  }

  onSubmit(): void {
    this.project.name = this.form.get('name')?.value;
    this.project.generalAltitude.setValue(this.form.get('generalAltitude')?.value);
    this.project.generalTemperature.setValue(this.form.get('generalTemperature')?.value);

    if (this.isAddForm) {
      this.projectService.addProject(this.project).subscribe((response) => {
        if (response.message == 'success') {
          console.log('Project added');
          const jsonProject = response.content as JsonProject;
          let projects = JSON.parse(localStorage.getItem('projects')!) as JsonProject[];
          projects.push(jsonProject);
          localStorage.removeItem('projects');
          localStorage.setItem('projects', JSON.stringify(projects));
          this.router.navigate(['projets']);
        }
      });
    } else {
      this.projectService.updateProject(this.project).subscribe((response) => {
        if (response.message == 'success') {
          console.log('Project updated');
          this.project = this.projectService.JsonToProject(response.content as JsonProject);
          let projects = JSON.parse(localStorage.getItem('projects')!) as JsonProject[];
          const projectIndexInLocalStorage = projects.findIndex(element => element.id == this.project.id);
          projects.splice(projectIndexInLocalStorage, 1);
          projects.splice(projectIndexInLocalStorage, 0, this.projectService.projectToJson(this.project));
          localStorage.removeItem('projects');
          localStorage.setItem('projects', JSON.stringify(projects));

          this.router.navigate(['projets']);
        }
      });
    }
  }
}
