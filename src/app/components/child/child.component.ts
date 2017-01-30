import { Component, OnInit, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector   : 'a2anais-child',
  templateUrl: './child.component.html',
  styleUrls  : ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
  computedValue: string;
  propertyBinding: string = 'write something..';

  savedValues: string[] = [];

  @Input() inputFromParent: string;
  @Input() selectedItem: any;

  @Output() eventEmitted: EventEmitter<any> = new EventEmitter;

  constructor() {
  }

  ngOnInit() {
    /** this is an example of computed value on component init */
    if (typeof this.inputFromParent === 'string') {
      this.computedValue = 'Correct input string: ' + this.inputFromParent;
    }
  }

  /** "changes" Object containing all changed @Input values */
  ngOnChanges(changes: SimpleChanges) {
    if ((changes as any).inputFromParent) {
      // do something
    } else {
      // do something else
    }
  }

  notifyParentComponent(value): void {
    this.eventEmitted.emit(value);
  }

  /** see what inputElement is */
  saveInputValue(inputElement: any = undefined): void {
    if (inputElement.value) {
      this.addValueToSavedValuesArray(inputElement.value);
      this.resetInputValue(inputElement);
    }
  }

  addValueToSavedValuesArray(value: string): void {
    this.savedValues.push(value);
  }

  private resetInputValue(inputElement: any): void {
    inputElement.value = '';
  }
}
