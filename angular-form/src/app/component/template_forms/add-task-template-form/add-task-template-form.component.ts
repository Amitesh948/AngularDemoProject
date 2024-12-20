import { Component } from '@angular/core';
import { Task, TaskserviceService } from '../../../service/taskservice.service';


@Component({
  selector: 'app-add-task-template-form',
  templateUrl: './add-task-template-form.component.html',
  styleUrls: ['./add-task-template-form.component.css']
})
export class AddTaskTemplateFormComponent{
  private tasks: Task[] = [];
  newTask: Task = { title: '', description: '' }; 
  
  constructor(private taskService:TaskserviceService){}

  onSubmit(form: any) {
      if (form.valid) {
      this.tasks.push({ ...this.newTask }); 
      this.taskService.addTask(this.tasks); 
      form.reset();
    }
  }
}
