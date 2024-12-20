import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { SignalService } from 'src/app/service/signal.service';
import { passwordMatchValidator } from 'src/app/validators/password-match-validator';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  isSubmittedLogin: boolean = false;
  isSubmittedSignUp: boolean = false;
  form: FormGroup | any;
  addvalidation:boolean = false;

  dummyData = {
    fname: "John", // Valid name with at least 2 characters
    lname: "Doe", // Valid name
    email: "john.doe@example.com", // Valid email format
    locality: "123 Elm Street", // Valid locality
    address: "Apt 456, Springfield", // Valid address
    state: "California", // Valid state
    zip: "12345", // Valid 5-digit zip code
    country: "United States", // Valid country name
    dob: "1990-01-01", // Valid date in YYYY-MM-DD format
    gender: "male", // Valid gender option
    phone: "1234567890", // Valid 10-digit phone number
    password: "password123", // Valid password with at least 6 characters
    confirmPassword: "password123" // Matches the password field
  };


  constructor(private fb: FormBuilder,private signal:SignalService) { }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        fname: ["", [Validators.required, Validators.minLength(2)]],
        lname: ["", [Validators.required]],
        email: ["", [Validators.required, Validators.email]],
        locality: ["", [Validators.required]],
        address: ["", [Validators.required]],
        state: ["", [Validators.required]],
        zip: ["", [Validators.required, Validators.pattern(/^[0-9]{5,6}$/)]],
        country: ["", [Validators.required]],
        dob: ["", [Validators.required]],
        gender: ["", [Validators.required]],
        phone: ["", [Validators.required]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", [Validators.required]],
      },
      { validators: passwordMatchValidator('password', 'confirmPassword') }
    );
    console.log('this is',this.form);
    

    this.form.get('fname').valueChanges.subscribe((forms:any)=>{
      console.log(forms);
      
    })

    // this.form.patchValue(this.dummyData)
    
  }


  onSubmit(form: NgForm, type: string) {
    type == 'login' ? this.isSubmittedLogin = true : this.isSubmittedSignUp = true
    console.log("exercise", form.value);
  }

  onSubmitReactive() {    
    this.signal.setData(this.form.value)
  }

  applyValidationOfPattern() {
    this.addvalidation = !this.addvalidation;
    if(this.addvalidation) {
      this.form.controls['phone'].setValidators([Validators.required, Validators.pattern(/^\d{10}$/)]);
      this.form.controls['phone'].updateValueAndValidity()
    } else {
      this.form.controls['phone'].setValidators([Validators.required]);
      this.form.controls['phone'].updateValueAndValidity()
    }

  }

}
