import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import {NewTaskData} from "./task/task.model";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name: string | undefined;

  isNewTaskOpen = false;

  tasks = [
    { id: 't1', userId: 'u1', title: 'Task 1', summary: 'Summary 1', dueDate: '2024-06-15' },
    { id: 't2', userId: 'u2', title: 'Task 2', summary: 'Summary 2', dueDate: '2024-06-15' },
    { id: 't3', userId: 'u3', title: 'Task 3', summary: 'Summary 3', dueDate: '2024-06-15' },
  ];

  get userTasks() {
    return this.tasks.filter(task => task.userId === this.id);
  }

  onTaskCompleted(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  onAddTask() {
    this.isNewTaskOpen = true;
  }

  onCancelAddTask() {
    this.isNewTaskOpen = false;
  }

  onAddNewTask(taskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.id,
      ...taskData
    })

    this.isNewTaskOpen = false;
  }
}
