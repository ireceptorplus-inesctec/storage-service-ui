import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedPipelinesComponent } from './validated-pipelines.component';

describe('ValidatedPipelinesComponent', () => {
  let component: ValidatedPipelinesComponent;
  let fixture: ComponentFixture<ValidatedPipelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedPipelinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatedPipelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
