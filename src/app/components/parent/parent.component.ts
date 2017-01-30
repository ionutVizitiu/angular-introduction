import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector   : 'a2anais-parent',
  templateUrl: './parent.component.html',
  styleUrls  : ['./parent.component.scss']
})
export class ParentComponent {
  title: string        = 'This is AppComponent title';
  parentInput: string  = 'Abracadabra';
  pInnerText: string   = 'this is a string from component';
  receivedMessage: string;
  selectedItem: any;
  valueCounter: number = 1;

  /**
   * this is a way to take a child component instance
   * you have now access to childComponent public methods
   */
  @ViewChild(ChildComponent) dashboardComp: ChildComponent;

  /** this is used for ngFor directive */
  dummyList: any[] = [
    {
      title  : 'Item1',
      content: 'just another content...'
    },
    {
      title  : 'Item2',
      content: 'just another content...'
    },
    {
      title  : 'Item3',
      content: 'just another content...'
    }
  ];

  /** this is used for click event handler */
  changeTitle(): void {
    this.title = 'New title';
  }

  /** this is used for click event handler */
  selectItem(item: any = undefined): void {
    this.selectedItem = item;
  }

  /** handle event received from child component */
  handleChildEvent(value: string): void {
    this.receivedMessage = value;
  }

  /** call childComponent public method */
  saveChildInput(): void {
    let value = 'value #' + this.valueCounter + ' from parent component ';
    this.dashboardComp.addValueToSavedValuesArray(value);
    this.valueCounter++;
  }
}
