import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitingValidationPipelinesComponent } from './awaiting-validation-pipelines.component';

describe('AwaitingValidationPipelinesComponent', () => {
  let component: AwaitingValidationPipelinesComponent;
  let fixture: ComponentFixture<AwaitingValidationPipelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwaitingValidationPipelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwaitingValidationPipelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
