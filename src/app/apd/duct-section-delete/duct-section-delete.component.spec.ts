import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuctSectionDeleteComponent } from './duct-section-delete.component';

describe('DuctSectionDeleteComponent', () => {
  let component: DuctSectionDeleteComponent;
  let fixture: ComponentFixture<DuctSectionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuctSectionDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuctSectionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
