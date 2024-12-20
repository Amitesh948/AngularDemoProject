import { Injectable } from '@angular/core';

export interface Task {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  private tasks: Task[] = [];

  constructor() { }

  addTask(task: Task[]): void {
    this.tasks= [...task];
    console.log('hello',this.tasks);
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}
