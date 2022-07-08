import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTextboxComponent } from './filter-textbox.component';

describe('FilterTextboxComponent', () => {
  let component: FilterTextboxComponent;
  let fixture: ComponentFixture<FilterTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterTextboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
