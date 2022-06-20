import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningPipelinesComponent } from './running-pipelines.component';

describe('RunningPipelinesComponent', () => {
  let component: RunningPipelinesComponent;
  let fixture: ComponentFixture<RunningPipelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunningPipelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningPipelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
