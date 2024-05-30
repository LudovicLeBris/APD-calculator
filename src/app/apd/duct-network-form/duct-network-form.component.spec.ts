import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuctNetworkFormComponent } from './duct-network-form.component';

describe('DuctNetworkFormComponent', () => {
  let component: DuctNetworkFormComponent;
  let fixture: ComponentFixture<DuctNetworkFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuctNetworkFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuctNetworkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
