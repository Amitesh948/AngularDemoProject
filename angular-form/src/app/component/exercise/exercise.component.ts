import { Component, OnInit, SimpleChanges, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { debounceTime, delay } from 'rxjs';
import { CommonService } from 'src/app/service/common.service';
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
  addvalidation: boolean = false;
  countries: any = [];
  states: any = [];
  selectedCountry: any;

  constructor(private fb: FormBuilder, private common: CommonService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
  
  }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        fname: ["", [Validators.required, Validators.minLength(2)]],
        lname: ["", [Validators.required]],
        email1: ["", [Validators.required, Validators.email]],
        locality: ["", [Validators.required]],
        address: ["", [Validators.required]],
        state: ["", [Validators.required]],
        zip: ["", [Validators.required, Validators.pattern(/^[0-9]{5,6}$/)]],
        country: ["", [Validators.required]],
        dob: ["", [Validators.required]],
        gender: ["", [Validators.required]],
        phone: [""],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", [Validators.required]],
      },
      { validators: passwordMatchValidator('password', 'confirmPassword') },

    );

    // this.makeApiCall();
    this.countries = this.common.getAllCountries();
    this.form.get('country')?.valueChanges.subscribe((selectedCountry: any) => {
      if (selectedCountry) {
        this.selectedCountry = JSON.parse(selectedCountry)
        this.CountryChange(this.selectedCountry);
      }
    });


    this.form.get('phone')?.valueChanges
      .pipe(delay(300))
      .subscribe((phoneCode: any) => {
        if (phoneCode) {          
          this.form.controls['phone'].setValidators([
            Validators.required,
            Validators.pattern(/^\d{10}$/),
            Validators.minLength(10)
          ]);
        } else {
          this.form.controls['phone'].setValidators([]);
        }
        this.form.controls['phone'].updateValueAndValidity();
      });
  }


  onSubmit(form: NgForm, type: string) {
    type == 'login' ? this.isSubmittedLogin = true : this.isSubmittedSignUp = true
    console.log("exercise", form.value);
  }

  onSubmitReactive() {
    if (!this.form.valid) {
      console.log("invalid form", this.form)
    } else {
      console.log(this.form.value);
      localStorage.setItem("formdata",JSON.stringify(this.form.value));
      localStorage.removeItem("loglevel");
      this.common.userSubject.next(this.form.value)
    }
    this.common.behaviorSubject.next('Updated Value!');

  }

  applyValidationOfPattern() {
    // this.addvalidation = !this.addvalidation;
    // if (this.addvalidation) {
    //   this.form.controls['phone'].setValidators([Validators.required, Validators.pattern(/^\d{10}$/)]);
    //   this.form.controls['phone'].updateValueAndValidity()
    // } else {
    //   this.form.controls['phone'].setValidators([Validators.required]);
    //   this.form.controls['phone'].updateValueAndValidity()
    // }
  }

  makeApiCall() {
    this.common.sendRequest('get', {}, 'countries').subscribe({
      next: (response) => {
        this.countries = response;
      }
    });
  }

  CountryChange(country: any) {
    this.states = this.common.getAllState(country.isoCode);
    const phoneCode = '+' + country.phonecode;
    // this.setPhoneCode(phoneCode);

  }
  setPhoneCode(phoneCode: string) {
    this.form.patchValue({
      phone: phoneCode
    });
  }
}
