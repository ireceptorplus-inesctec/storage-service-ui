import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermlineTableComponent } from './germline-table.component';

describe('GermlineTableComponent', () => {
  let component: GermlineTableComponent;
  let fixture: ComponentFixture<GermlineTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GermlineTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GermlineTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
