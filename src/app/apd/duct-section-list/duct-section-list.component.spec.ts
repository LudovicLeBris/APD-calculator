import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuctSectionListComponent } from './duct-section-list.component';

describe('DuctSectionListComponent', () => {
  let component: DuctSectionListComponent;
  let fixture: ComponentFixture<DuctSectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuctSectionListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuctSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
