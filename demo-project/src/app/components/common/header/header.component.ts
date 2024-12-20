import { Component } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  currentTab: string = 'home';
  currentCount: number = 0;
  receivedArray: string[] = [];
  compledTaskList: string[] = [];

  fatchCountValue(count: number) {
    this.currentCount = count;
  }

  fatchTaskList(tasks : string[])
  {
   this.receivedArray=tasks;
   console.log('hello',this.receivedArray);
  }

  sendData(data: string) {
    this.currentTab = data;
  }

  taskCompletedList(event: string[]) {
    this.compledTaskList=event;
    console.log('cc',this.compledTaskList);
    this.receivedArray= [];
    }
}
