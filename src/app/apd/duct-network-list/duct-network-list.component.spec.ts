import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuctNetworkListComponent } from './duct-network-list.component';

describe('DuctNetworkListComponent', () => {
  let component: DuctNetworkListComponent;
  let fixture: ComponentFixture<DuctNetworkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuctNetworkListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuctNetworkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
