import {Component, EventEmitter, Input, Output, inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import { type NewTaskData } from "../task/task.model";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter();
  private taskService: TasksService = inject(TasksService);

  newTask: NewTaskData = {
    title: '',
    summary: '',
    dueDate: ''
  };

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask(this.newTask, this.userId);

    this.close.emit();
  }
}
