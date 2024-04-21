import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuctSectionAddComponent } from './duct-section-add.component';

describe('DuctSectionAddComponent', () => {
  let component: DuctSectionAddComponent;
  let fixture: ComponentFixture<DuctSectionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuctSectionAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuctSectionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
