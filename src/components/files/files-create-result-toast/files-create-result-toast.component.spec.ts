import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesCreateResultToastComponent } from './files-create-result-toast.component';

describe('FilesCreateResultToastComponent', () => {
  let component: FilesCreateResultToastComponent;
  let fixture: ComponentFixture<FilesCreateResultToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesCreateResultToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesCreateResultToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
