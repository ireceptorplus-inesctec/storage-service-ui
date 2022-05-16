import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmisComponent } from './umis.component';

describe('UmisComponent', () => {
  let component: UmisComponent;
  let fixture: ComponentFixture<UmisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
