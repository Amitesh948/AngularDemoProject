import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @Input() count: number = 0;
  @Input() completedTasks : string[]=[];
  @Output() sendTasks = new EventEmitter<string[]>();
  isVisible : boolean = false;
  
  task: string = '';
  tasks: string[] = [];
 
  
  addTask(): void {
    if (this.task.trim() === '') {
      alert('Please Enter Task');
    } else {
      this.tasks.push(this.task);
      this.sendTasks.emit(this.tasks);
      this.task = '';
    }
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }

}
