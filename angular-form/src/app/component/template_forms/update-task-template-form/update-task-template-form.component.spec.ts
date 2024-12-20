import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaskTemplateFormComponent } from './update-task-template-form.component';

describe('UpdateTaskTemplateFormComponent', () => {
  let component: UpdateTaskTemplateFormComponent;
  let fixture: ComponentFixture<UpdateTaskTemplateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTaskTemplateFormComponent]
    });
    fixture = TestBed.createComponent(UpdateTaskTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
