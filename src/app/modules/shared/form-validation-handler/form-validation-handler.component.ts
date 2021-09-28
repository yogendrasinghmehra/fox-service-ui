import { Component, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-validation-handler',
  templateUrl: './form-validation-handler.component.html',
  styleUrls: ['./form-validation-handler.component.scss'],
})
export class FormValidationHandlerComponent implements OnChanges {
  @Input() ControlName = '';
  @Input() Control = new FormControl();
  constructor() {}

  ngOnChanges() {
    console.log(this.ControlName);
    console.log(this.Control);
  }
}
