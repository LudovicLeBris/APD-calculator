import { CommonModule, KeyValuePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DuctNetwork, JsonDuctNetwork } from '../shared/models/duct-network.model';
import { Project } from '../shared/models/project.model';
import { Material } from '../shared/models/material.model';
import { AdditionalApd } from '../shared/models/additional-apd.model';
import { Altitude } from '../shared/models/altitude.model';
import { Temperature } from '../shared/models/temperature.model';
import { DuctNetworkService } from '../shared/api/duct-network.service';
import { Router } from '@angular/router';
import { LoaderComponent } from '../../ui/loader/loader.component';

@Component({
  selector: 'app-duct-network-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    KeyValuePipe,
    LoaderComponent,
  ],
  templateUrl: './duct-network-form.component.html',
  styleUrl: './duct-network-form.component.css'
})
export class DuctNetworkFormComponent implements OnInit {
  @Input() ductNetwork!: DuctNetwork;
  @Input() project!: Project;
  isAddForm: boolean = false;
  form: FormGroup= new FormGroup({});
  isAltitudeEnable: boolean = false;
  isTemperatureEnable: boolean = false;

  name: string = '';
  material: Material = new Material;
  additionalApd: AdditionalApd = new AdditionalApd;
  altitude: Altitude = new Altitude;
  temperature: Temperature = new Temperature;

  pending:boolean = false;

  constructor (
    private ductNetworkService: DuctNetworkService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('ajouter');
    this.ductNetworkService.project = this.project;

    if (this.isAddForm) {
      this.altitude = this.project.generalAltitude;
      this.temperature = this.project.generalTemperature;
    } else {
      this.name = this.ductNetwork.name;
      this.additionalApd = this.ductNetwork.additionalApd;
      this.altitude = this.ductNetwork.altitude;
      this.temperature = this.ductNetwork.temperature;
    }

    this.form = this.formBuilder.group({
      name: [this.name, [Validators.required, Validators.maxLength(36)]],
      material: [this.material.getValue()],
      additionalApd: [this.additionalApd.getValue(), [Validators.min(1)]],
      altitude: [this.altitude.getValue(), [Validators.required, Validators.min(0)]],
      temperature: [this.temperature.getValue(), [Validators.required]]
    });
    this.form.get('altitude')?.disable();
    this.form.get('temperature')?.disable();
    if (this.additionalApd.getValue() == 0) {
      this.form.get('additionalApd')?.setValue('');
    }
  }

  onSubmit():void {
    this.pending = true;
    this.ductNetwork.name = this.form.get('name')?.value;
    this.ductNetwork.generalMaterial.setValue(this.form.get('material')?.value);
    this.ductNetwork.additionalApd.setValue(+this.form.get('additionalApd')?.value);
    this.ductNetwork.altitude.setValue(+this.form.get('altitude')?.value);
    this.ductNetwork.temperature.setValue(+this.form.get('temperature')?.value);
    this.ductNetwork.air.altitude.setValue(+this.form.get('altitude')?.value);
    this.ductNetwork.air.temperature.setValue(+this.form.get('temperature')?.value);
    console.log(this.ductNetwork);

    if (this.isAddForm) {
      this.ductNetworkService.addDuctNetwork(this.ductNetwork).subscribe({
        next: response => {
          console.log('Duct network added');
          const jsonDuctNetwork = response.content as JsonDuctNetwork;
          let ductNetworks = (JSON.parse(localStorage.getItem('ductNetworks')!) as JsonDuctNetwork[]);
          ductNetworks.push(jsonDuctNetwork);
          localStorage.removeItem('ductNetworks');
          localStorage.setItem('ductNetworks', JSON.stringify(ductNetworks));
          this.pending = false;
          this.router.navigate(['projets', this.project.id]);
        }
      })
    } else {
      this.ductNetworkService.updateDuctNetwork(this.ductNetwork).subscribe({
        next: response => {
          console.log('Duct network updated');
          this.ductNetwork = this.ductNetworkService.jsonToDuctNetwork(response.content as JsonDuctNetwork);
          let ductNetworks = JSON.parse(localStorage.getItem('ductNetworks')!) as JsonDuctNetwork[];
          const ductNetworkIndexInLocalStorage = ductNetworks.findIndex(element => element.id == this.ductNetwork.id);
          ductNetworks.splice(ductNetworkIndexInLocalStorage, 1);
          ductNetworks.splice(ductNetworkIndexInLocalStorage, 0, this.ductNetworkService.ductNetworkToJson(this.ductNetwork));
          localStorage.removeItem('ductNetworks');
          localStorage.setItem('ductNetworks', JSON.stringify(ductNetworks));
          this.pending = false;
          this.router.navigate(['projets', this.project.id]);
        }
      })
    }
  }

  switchEnableAltitude():void {
    if (this.isAltitudeEnable) {
      this.form.get('altitude')?.disable();
      this.isAltitudeEnable = false;
    } else {
      this.form.get('altitude')?.enable();
      this.isAltitudeEnable = true;
    }
  }

  switchEnableTemperature():void {
    if (this.isTemperatureEnable) {
      this.form.get('temperature')?.disable();
      this.isTemperatureEnable = false;
    } else {
      this.form.get('temperature')?.enable();
      this.isTemperatureEnable = true;
    }
  }

}
