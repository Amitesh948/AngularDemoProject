import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  userForm: FormGroup;
  formData = { name: '', email: '' };
  submitted = false;

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.formData = this.userForm.value; 
      this.submitted = true;
    }
  }
}
