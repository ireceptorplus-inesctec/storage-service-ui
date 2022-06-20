import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelinesTableComponent } from './pipelines-table.component';

describe('PipelinesTableComponent', () => {
  let component: PipelinesTableComponent;
  let fixture: ComponentFixture<PipelinesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipelinesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelinesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
