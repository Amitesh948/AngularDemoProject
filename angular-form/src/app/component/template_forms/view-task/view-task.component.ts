import { Component, computed, signal } from '@angular/core';
import { Task, TaskserviceService } from '../../../service/taskservice.service';
import { SignalService } from 'src/app/service/signal.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent {
  tasks: Task[] = [];  

  constructor(private taskservice: TaskserviceService,private signal:SignalService) { }

  ngOnInit(): void {    
   this.tasks=this.taskservice.getTasks();

   this.signal.getDataSignal().subscribe((r:any) => {
    console.log(r);
    
   })
  }
}
