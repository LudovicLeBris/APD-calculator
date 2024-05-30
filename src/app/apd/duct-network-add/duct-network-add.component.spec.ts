import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuctNetworkAddComponent } from './duct-network-add.component';

describe('DuctNetworkAddComponent', () => {
  let component: DuctNetworkAddComponent;
  let fixture: ComponentFixture<DuctNetworkAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuctNetworkAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuctNetworkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
