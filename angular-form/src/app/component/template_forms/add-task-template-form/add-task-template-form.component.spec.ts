import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskTemplateFormComponent } from './add-task-template-form.component';

describe('AddTaskTemplateFormComponent', () => {
  let component: AddTaskTemplateFormComponent;
  let fixture: ComponentFixture<AddTaskTemplateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTaskTemplateFormComponent]
    });
    fixture = TestBed.createComponent(AddTaskTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
