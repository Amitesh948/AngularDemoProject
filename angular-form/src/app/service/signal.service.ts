import { Injectable } from '@angular/core';
import { signal } from '@angular/core';  // Import the signal

@Injectable({
  providedIn: 'root',
})
export class SignalService {
  data:any;
  // Define a signal to hold a value, initialized with a string
  private formDataSignal = signal<any>({  });

  // Method to get the current value of the signal
  getDataSignal() {
    return this.formDataSignal();  // Call the signal to get the current value
  }

  // Method to update the value of the signal
  setData(newValue: string) {   
    this.data = newValue;     
    this.formDataSignal.set(newValue);  // Use .set() to update the value of the signal    
  }
}
