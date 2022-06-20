import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedPipelinesComponent } from './finished-pipelines.component';

describe('FinishedPipelineComponent', () => {
  let component: FinishedPipelinesComponent;
  let fixture: ComponentFixture<FinishedPipelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedPipelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedPipelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
