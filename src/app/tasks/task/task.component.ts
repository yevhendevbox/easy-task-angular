import {Component, EventEmitter, Input, Output} from '@angular/core';
import { type Task } from './task.model';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() completed = new EventEmitter<string>();

  onTaskCompleted() {
    this.completed.emit(this.task.id);
  }
}
