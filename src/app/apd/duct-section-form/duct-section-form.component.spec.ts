import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuctSectionFormComponent } from './duct-section-form.component';

describe('DuctSectionFormComponent', () => {
  let component: DuctSectionFormComponent;
  let fixture: ComponentFixture<DuctSectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuctSectionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuctSectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
