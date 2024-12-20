import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  formData = { name: '', email: '' };
  submitted = false;

  onSubmit(form: any) {
    this.formData = form.value; // Access form data
    this.submitted = true;
  }
}
