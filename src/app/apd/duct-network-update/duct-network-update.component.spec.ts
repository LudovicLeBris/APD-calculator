import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuctNetworkUpdateComponent } from './duct-network-update.component';

describe('DuctNetworkUpdateComponent', () => {
  let component: DuctNetworkUpdateComponent;
  let fixture: ComponentFixture<DuctNetworkUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuctNetworkUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuctNetworkUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
