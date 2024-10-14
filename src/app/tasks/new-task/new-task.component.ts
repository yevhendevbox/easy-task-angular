import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import { type NewTaskData } from "../task/task.model";

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
  @Output() canceled = new EventEmitter();
  @Output() add = new EventEmitter<NewTaskData>();

  newTask: NewTaskData = {
    title: '',
    summary: '',
    dueDate: ''
  };

  onCancel() {
    this.canceled.emit();
  }

  onSubmit() {
    this.add.emit(this.newTask);
  }
}
