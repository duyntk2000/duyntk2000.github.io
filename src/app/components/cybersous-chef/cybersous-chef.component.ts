import { Component } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  copyArrayItem,
  CdkDragExit,
  CdkDragStart,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cybersous-chef',
  standalone: false,
  templateUrl: './cybersous-chef.component.html',
  styleUrl: './cybersous-chef.component.css'
})
export class CybersousChefComponent {
  inputText: string = '';
  outputText: string = '';
  transferringItem: any;
  operations = [
    { name: 'Base64 Encode'},
    { name: 'Base64 Decode'},
    { name: 'Reverse Text'},
  ];

  recipe = [
    { name: 'Base64'},
  ];

  selectedOp = this.operations[0];

  runOperation() {
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log("dropped");
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.transferringItem = undefined
  }

  drop_recipe(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
    } else {
      event.previousContainer.data.splice(event.previousIndex, 1);
    }
    this.transferringItem = undefined
  }

  noEnter() {
    return false;
  }

  entered() {
    this.transferringItem = undefined;
  }

  exited(e: CdkDragStart<any>) {
    this.transferringItem = e.source.data;
  }
}
