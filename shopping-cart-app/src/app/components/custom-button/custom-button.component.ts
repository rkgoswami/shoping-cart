import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UpdateType } from './update-type.enum';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.less']
})
export class CustomButtonComponent {

  @Input() count = 0;
  @Output() countChange = new EventEmitter();

  constructor() { }

  _updateCount(updateType: UpdateType) {
    if (updateType === 'INCREMENT') {
      this.count++;
    } else {
      this.count--;
    }
    this.countChange.emit(this.count);
  }
}
