import {NewTaskData} from "./task/task.model";
import {Injectable} from "@angular/core";

interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [
    { id: 't1', userId: 'u1', title: 'Task 1', summary: 'Summary 1', dueDate: '2024-06-15' },
    { id: 't2', userId: 'u2', title: 'Task 2', summary: 'Summary 2', dueDate: '2024-06-15' },
    { id: 't3', userId: 'u3', title: 'Task 3', summary: 'Summary 3', dueDate: '2024-06-15' },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);

    this.saveTasks();
  }

  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(task: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.tasks[0].userId,
      ...task
    })

    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
