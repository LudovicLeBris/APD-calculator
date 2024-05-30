import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuctSectionUpdateComponent } from './duct-section-update.component';

describe('DuctSectionUpdateComponent', () => {
  let component: DuctSectionUpdateComponent;
  let fixture: ComponentFixture<DuctSectionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuctSectionUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuctSectionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
