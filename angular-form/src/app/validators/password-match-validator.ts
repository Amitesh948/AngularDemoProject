import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(password: string, confirmPassword: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const passwordControl = formGroup.get(password);
    const confirmPasswordControl = formGroup.get(confirmPassword);
    
    if (!passwordControl || !confirmPasswordControl) {
        return null; // Return null if controls are not found
    }
    
    const isMatching = passwordControl.value === confirmPasswordControl.value;
    return isMatching ? null : { passwordMismatch: true };
  };
}
