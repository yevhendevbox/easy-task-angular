import {
  Component, EventEmitter,
  // computed,
  Input,
  Output,
  // input
} from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;
  @Input() id!: string;

  @Output() select = new EventEmitter();

  // avatar = input.required<string>()
  // name = input.required<string>()
  //
  // imagePath = computed(() => `../../assets/users/${this.avatar()}`);

  get imagePath() {
    return `../../assets/users/${this.avatar}`
  }
  onSelectUser() {
    this.select.emit(this.id);
  }
}
