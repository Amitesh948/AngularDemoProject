import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
count : number= 0;
@Output() sendCount = new EventEmitter<number>();

constructor() {
  const storedCount = localStorage.getItem('count');
  this.count = storedCount ? Number(storedCount) : 0;
}

decrement() {
  this.count--;
  this.updateCount(this.count);
}
increment() {
this.count++;
  this.updateCount(this.count);
}
onInputChange(event : any) {
  const inputElement = event.target as HTMLInputElement;
  this.count = Number(inputElement.value);
  this.updateCount(this.count);
}
  updateCount(num : number){
    localStorage.setItem('count', this.count.toString());
   this.sendCount.emit(num);
  }
}
