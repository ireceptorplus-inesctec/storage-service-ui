import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunPipelineComponent } from './run-pipeline.component';

describe('RunPipelineComponent', () => {
  let component: RunPipelineComponent;
  let fixture: ComponentFixture<RunPipelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunPipelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
