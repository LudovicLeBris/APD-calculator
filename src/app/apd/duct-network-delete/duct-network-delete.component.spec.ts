import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuctNetworkDeleteComponent } from './duct-network-delete.component';

describe('DuctNetworkDeleteComponent', () => {
  let component: DuctNetworkDeleteComponent;
  let fixture: ComponentFixture<DuctNetworkDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuctNetworkDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuctNetworkDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
