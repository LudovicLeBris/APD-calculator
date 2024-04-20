import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuctSectionDetailComponent } from './duct-section-detail.component';

describe('DuctSectionDetailComponent', () => {
  let component: DuctSectionDetailComponent;
  let fixture: ComponentFixture<DuctSectionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuctSectionDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuctSectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
