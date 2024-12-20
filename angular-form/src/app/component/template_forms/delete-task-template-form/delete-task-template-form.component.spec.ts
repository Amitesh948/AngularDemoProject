import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTaskTemplateFormComponent } from './delete-task-template-form.component';

describe('DeleteTaskTemplateFormComponent', () => {
  let component: DeleteTaskTemplateFormComponent;
  let fixture: ComponentFixture<DeleteTaskTemplateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTaskTemplateFormComponent]
    });
    fixture = TestBed.createComponent(DeleteTaskTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
