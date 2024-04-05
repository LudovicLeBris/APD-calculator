import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataResultComponent } from './data-result.component';

describe('DataResultComponent', () => {
  let component: DataResultComponent;
  let fixture: ComponentFixture<DataResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
