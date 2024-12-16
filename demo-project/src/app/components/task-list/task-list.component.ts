import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent{
  @Input() tasks: string[] = [];
  @Output() tasksComplated = new EventEmitter<string[]>();
  todoList: Todo[] = [];
  completedTasks: string[] = [];
  sendTasksToParent: string[]=[];
  
  ngOnInit() {
    this.addTasksToTodoList();
  }

  addTasksToTodoList() {
    this.tasks.forEach(task => {
      this.todoList.push({ task, completed: false });
    });
    console.log(this.todoList);
  }

  updateCompletedTasks() {
    this.completedTasks = this.todoList.filter(todo => todo.completed).map(todo => todo.task);
    this.todoList = this.todoList.filter(todo => !todo.completed);
    this.sendTasksToParent= [...this.sendTasksToParent , ...this.completedTasks];
    this.tasksComplated.emit(this.sendTasksToParent);
    console.log('ami',this.sendTasksToParent);
  }

  toggleTaskCompletion(todo: Todo) {
    todo.completed = true;
    this.updateCompletedTasks(); 
  }
}
