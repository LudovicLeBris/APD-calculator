import { Component, OnInit } from '@angular/core';
import { DuctSection, JsonDuctSection } from '../shared/models/duct-section.model';
import { DuctNetwork, JsonDuctNetwork } from '../shared/models/duct-network.model';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { DuctNetworkService } from '../shared/api/duct-network.service';
import { DuctSectionService } from '../shared/api/duct-section.service';
import { BackButtonComponent } from '../../ui/back-button/back-button.component';
import { DuctSectionFormComponent } from '../duct-section-form/duct-section-form.component';
import { DeleteButtonComponent } from '../../ui/delete-button/delete-button.component';
import { DuctSectionDeleteComponent } from '../duct-section-delete/duct-section-delete.component';

@Component({
  selector: 'app-duct-section-update',
  standalone: true,
  imports: [
    BackButtonComponent,
    DuctSectionFormComponent,
    DeleteButtonComponent,
    RouterOutlet,
    DuctSectionDeleteComponent
  ],
  template: `
    <section class="flex justify-between items-start my-2 border rounded-lg border-primary-light dark:border-primary-dark dark:text-bg-light">
      <div (click)="showDeleteModal()">
        <app-delete-button></app-delete-button>
      </div>
      <div class="p-2 flex flex-col gap-2">
        <h1 class="text-center font-bold text-xl">Modification d'une section de gaine</h1>
        <p class="text-center">Réseau : <span>{{ ductNetwork.name }}</span></p>
      </div>
      <div>
        <app-back-button [url]="['reseaux', ductNetwork.id]"></app-back-button>
      </div>
    </section>
    <section class="flex flex-col gap-2 m-2">
      <app-duct-section-form [ductSection]="ductSection" [ductNetwork]="ductNetwork"></app-duct-section-form>
    </section>
    @if (isDeleteModalIsActive) {
      <app-duct-section-delete (clickedOut)="hideDeleteModal($event)" (clickedDelete)="deleteDuctSection()" ></app-duct-section-delete>
    }
  `,
  styleUrl: './duct-section-update.component.css'
})
export class DuctSectionUpdateComponent implements OnInit{
  ductSection = new DuctSection;
  ductNetwork = new DuctNetwork;
  isDeleteModalIsActive: boolean = false;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private ductNetworkService: DuctNetworkService,
    private ductSectionService: DuctSectionService,
  ) {}

  ngOnInit(): void {
    const ductNetworkId = this.route.snapshot.queryParamMap.get('ductNetworkId');
    const jsonDuctNetwork = (JSON.parse(localStorage.getItem('ductNetworks')!) as JsonDuctNetwork[]).find(element => element.id == +ductNetworkId!);
    this.ductNetwork = this.ductNetworkService.jsonToDuctNetwork(jsonDuctNetwork!);
    const ductSectionId = this.route.snapshot.queryParamMap.get('ductSectionId');
    const jsonDucSection = (JSON.parse(localStorage.getItem('ductSections')!) as JsonDuctSection[]).find(element => element.id == +ductSectionId!);
    this.ductSection = this.ductSectionService.jsonToDuctSection(jsonDucSection!);
  }

  showDeleteModal() {
    this.isDeleteModalIsActive = true;
    document.body.classList.add('overflow-y-hidden')
  }

  hideDeleteModal(isActive: boolean) {
    this.isDeleteModalIsActive = isActive;
    document.body.classList.remove('overflow-y-hidden')
  }

  deleteDuctSection() {
    this.hideDeleteModal(false);
    this.ductSectionService.deleteDuctSection(this.ductSection).subscribe((response) => {
      console.log(response);
      this.router.navigate(['reseaux', this.ductNetwork.id])
    })

  }

}
