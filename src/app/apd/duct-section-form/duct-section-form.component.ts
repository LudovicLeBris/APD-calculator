import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyValuePipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DuctSection, JsonDuctSection } from '../shared/models/duct-section.model';
import { DuctSectionService } from '../shared/api/duct-section.service';
import { Router } from '@angular/router';
import { DuctNetwork, JsonDuctNetwork } from '../shared/models/duct-network.model';
import { diameters, diametersList } from '../../types/diameters';
import { singularityList } from '../../types/singularity';
import { Singularity } from '../shared/models/singularity.model';
import { SingularityFactory } from '../shared/models/singularityFactory';
import { Material } from '../shared/models/material.model';
import { FlowRate } from '../shared/models/flow-rate.model';
import { Length } from '../shared/models/length.model';
import { AdditionalApd } from '../shared/models/additional-apd.model';

@Component({
  selector: 'app-duct-section-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    KeyValuePipe
  ],
  templateUrl: './duct-section-form.component.html',
  styleUrl: './duct-section-form.component.css'
})
export class DuctSectionFormComponent implements OnInit {
  @Input() ductSection!: DuctSection;
  @Input() ductNetwork!: DuctNetwork
  isAddForm: boolean = false;
  form: FormGroup = new FormGroup({});
  isMaterialEnable: boolean = false;

  name: string = '';
  material: Material = new Material;
  flowrate: FlowRate = new FlowRate;
  shape: 'circular' | 'rectangular' = 'circular';
  diameter: number = 0;
  diameterList = diametersList;
  width: number = 0;
  height:number = 0;
  section: number = 0;
  flowspeed: number = 0;
  length: Length = new Length;
  SingularityList = singularityList;
  singularities: Singularity[] = [];
  additionalApd: AdditionalApd = new AdditionalApd;

  constructor(
    private ductSectionService: DuctSectionService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('ajouter');
    this.ductSectionService.ductNetwork = this.ductNetwork;

    if (this.isAddForm) {
      this.material = this.ductNetwork.generalMaterial;
    } else {
      this.name = this.ductSection.name;
      this.material = this.ductSection.material;
      this.flowrate = this.ductSection.flowrate;
      this.shape = this.ductSection.shape.getType();
      this.diameter = this.ductSection.diameter.getValue() as number;
      this.width = this.ductSection.width.getValue() as number;
      this.height = this.ductSection.height.getValue() as number;
      this.section = this.ductSection.ductSectionsSection.getValue() as number;
      this.flowspeed = this.ductSection.flowspeed.getValue() as number;
      this.length = this.ductSection.length;
      this.singularities = this.ductSection.singularities;
      this.additionalApd = this.ductSection.additionalApd;
    }

    this.form = this.formBuilder.group({
      name: [this.name, [Validators.required, Validators.maxLength(36)]],
      material: [this.material.getValue()],
      flowrate: [this.flowrate.getValue(), [Validators.required, Validators.min(0)]],
      shape: [this.shape],
      diameter: [this.diameter, [Validators.required]],
      width: [this.width],
      height: [this.height],
      section: [{value: this.section, disabled: true}],
      flowspeed: [{value: this.flowspeed, disabled: true}],
      length: [this.length.getValue(), [Validators.required, Validators.min(1)]],
      singularities: [this.singularities],
      additionalApd: [this.additionalApd.getValue(), [Validators.min(1)]]
    });
    this.form.get('material')?.disable();
    this.form.get('singularities')?.setValue('');

    if (this.isAddForm) {
      this.form.get('diameter')?.setValue('');
      this.form.get('width')?.setValue('');
      this.form.get('height')?.setValue('');
    }

    if (this.shape == 'rectangular') {
      this.form.get('width')?.setValidators([Validators.required, Validators.min(1)]);
      this.form.get('width')?.updateValueAndValidity();
      this.form.get('height')?.setValidators([Validators.required, Validators.min(1)]);
      this.form.get('height')?.updateValueAndValidity();
      this.form.get('diameter')?.setValidators([]);
      this.form.get('diameter')?.updateValueAndValidity();
      this.form.get('diameter')?.setValue('');
      this.form.get('diameter')?.markAsPristine();
    }

    if (this.additionalApd.getValue() == 0) {
      this.form.get('additionalApd')?.setValue('');
    }

  }

  onSubmit() {
    this.ductSection.name = this.form.get('name')?.value;
    this.ductSection.material.setValue(this.form.get('material')?.value);
    this.ductSection.flowrate.setValue(+this.form.get('flowrate')?.value);
    this.ductSection.shape.setType(this.form.get('shape')?.value);
    this.ductSection.diameter.setValue(+this.form.get('diameter')?.value as diameters);
    this.ductSection.width.setValue(+this.form.get('width')?.value);
    this.ductSection.height.setValue(+this.form.get('height')?.value);
    this.ductSection.length.setValue(+this.form.get('length')?.value);
    this.singularities.forEach(singularity => {
      this.ductSection.singularities.push(singularity);
    });
    this.ductSection.additionalApd.setValue(+this.form.get('additionalApd')?.value);
    if (this.isAddForm) {
      this.ductSectionService.addDuctSection(this.ductSection).subscribe((response) => {
        if (response.message == "success") {
          console.log('Duct section added');
          const ductSection = response.content as JsonDuctSection;
          let ductSections = (JSON.parse(localStorage.getItem('ductSections')!) as JsonDuctSection[]);
          ductSections.push(ductSection);
          localStorage.removeItem('ductSections');
          localStorage.setItem('ductSections', JSON.stringify(ductSections));
          this.router.navigate(['sections', ductSection.id]);
        }
      });
    } else {
      this.ductSectionService.updateDuctSection(this.ductSection).subscribe((response) => {
        if (response.message == "success") {
          console.log('Duct section updated');
          this.ductSection = this.ductSectionService.jsonToDuctSection(response.content as JsonDuctSection);
          let ductSections = (JSON.parse(localStorage.getItem('ductSections')!) as JsonDuctSection[]);
          const ductSectionIndexInlocalStorage = ductSections.findIndex(element => element.id == this.ductSection.id);
          ductSections.splice(ductSectionIndexInlocalStorage, 1);
          ductSections.splice(ductSectionIndexInlocalStorage, 0, this.ductSectionService.ductSectionToJson(this.ductSection));
          localStorage.removeItem('ductSections');
          localStorage.setItem('ductSections', JSON.stringify(ductSections));

          this.router.navigate(['sections', this.ductSection.id]);
        }
      });

    }
  }

  switchEnabledMaterial():void {
    if (this.isMaterialEnable) {
      this.form.get('material')?.disable();
      this.isMaterialEnable = false;
    } else {
      this.form.get('material')?.enable();
      this.isMaterialEnable = true;
    }
  }

  switchShape():void {
    this.form.get('section')?.setValue(0);
    this.form.get('flowspeed')?.setValue(0);
    if (this.form.get('shape')?.value == 'circular') {
      this.form.get('diameter')?.setValidators([Validators.required, Validators.min(1)]);
      this.form.get('diameter')?.updateValueAndValidity();
      this.shape = 'circular';
      this.form.get('width')?.setValidators([]);
      this.form.get('width')?.updateValueAndValidity();
      this.form.get('width')?.setValue('');
      this.form.get('width')?.markAsPristine();
      this.form.get('height')?.setValidators([]);
      this.form.get('height')?.updateValueAndValidity();
      this.form.get('height')?.setValue('');
      this.form.get('height')?.markAsPristine();
    } else if (this.form.get('shape')?.value == 'rectangular') {
      this.form.get('width')?.setValidators([Validators.required, Validators.min(1)]);
      this.form.get('width')?.updateValueAndValidity();
      this.form.get('height')?.setValidators([Validators.required, Validators.min(1)]);
      this.form.get('height')?.updateValueAndValidity();
      this.shape = 'rectangular';
      this.form.get('diameter')?.setValidators([]);
      this.form.get('diameter')?.updateValueAndValidity();
      this.form.get('diameter')?.setValue('');
      this.form.get('diameter')?.markAsPristine();
    }
  }

  calculateSection(): void {
    if (this.shape == 'circular' && this.form.get('diameter')?.dirty) {
      this.section = +((Math.PI * (this.form.get('diameter')?.value / 1000)**2)/4).toFixed(3);
    } else if (this.shape == 'rectangular' && (this.form.get('width')?.dirty || this.form.get('height')?.dirty)) {
      const equivDiameter: number = (1.265 * (this.form.get('height')?.value * this.form.get('width')?.value) **0.6)
        / (this.form.get('height')?.value + this.form.get('width')?.value)**0.2;
      this.section = +((Math.PI * (equivDiameter / 1000)**2)/4).toFixed(3);
    }

    this.form.get('section')?.setValue(this.section);
  }

  calculateFlowspeed() {
    if (this.form.get('flowrate')?.dirty || this.form.get('diameter')?.dirty || this.form.get('width')?.dirty || this.form.get('height')?.dirty) {
      this.flowspeed = +((this.form.get('flowrate')?.value / 3600) / this.section).toFixed(2);

      this.form.get('flowspeed')?.setValue(this.flowspeed);
    }
  }

  addSingularity() {
    if (!this.form.get('singularities')?.pristine) {
      const singularitySelected = this.SingularityList.find((element) => element.getApiReference() === this.form.get('singularities')?.value)
      singularitySelected?.setQuantity(1);
      this.singularities.push(singularitySelected as Singularity)
      this.SingularityList.splice(singularityList.indexOf(singularitySelected as Singularity), 1);
      this.form.get('singularities')?.setValue('');
      this.form.get('singularities')?.markAsPristine();
    }
  }

  removeSingularity(index: number) {
    const singularityType: string = this.singularities[index].getApiReference();
    this.singularities.splice(index, 1);
    const singularity = (new SingularityFactory).createSingularity(singularityType);
    this.SingularityList.push(singularity as Singularity);
    this.form.get('singularities')?.markAsPristine();
  }

  addQuantityToSingularity(index: number): void {
    const quantity:number = this.singularities[index].getQuantity();
    this.singularities[index].setQuantity(quantity + 1);
  }

  removeQuantityToSingularity(index: number): void {
    const quantity:number = this.singularities[index].getQuantity();
    if (quantity > 1) {
      this.singularities[index].setQuantity(quantity - 1);
    }
    if (quantity == 1) {
      this.removeSingularity(index);
    }
  }

}
