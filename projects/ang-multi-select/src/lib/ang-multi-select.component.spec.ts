import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngMultiSelectComponent } from './ang-multi-select.component';

describe('AngMultiSelectComponent', () => {
  let component: AngMultiSelectComponent;
  let fixture: ComponentFixture<AngMultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngMultiSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
