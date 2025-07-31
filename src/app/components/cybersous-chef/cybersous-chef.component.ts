import { Component, inject } from '@angular/core';
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
import { Operation } from '../../operation';

import * as data_format from "../../../script/cybersous-chef/data-format";
import * as networking from "../../../script/cybersous-chef/networking";




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
  operations: Operation[] = [
    { name: 'To Base64', action: (str: string) => data_format.to_base64(str)},
    { name: 'From Base64', action: (str: string) => data_format.from_base64(str)},
    { name: 'Reverse Text', action: (str: string) => data_format.reverse_str(str)},
    { name: 'Defang IP', action: (str: string) => networking.defang_ip(str)},
    { name: 'Defang URL', action: (str: string) => networking.defang_url(str)},
    { name: 'To Hex', action: (str: string) => data_format.to_hex(str)},
    { name: 'From Hex', action: (str: string) => data_format.from_hex(str)},
  ];

  recipe: Operation[] = [
  ];

  selectedOp = this.operations[0];

  runOperation() {
    let tmp:string = this.inputText;
    this.recipe.forEach((op) => {
        tmp = op.action(tmp);
    });
    this.outputText = tmp;
  }

  drop(event: CdkDragDrop<Operation[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.recipe.push(this.transferringItem);
    }
    this.transferringItem = undefined;
    this.runOperation();
  }

  drop_recipe(event: CdkDragDrop<Operation[]>) {
    if (event.previousContainer === event.container) {
    } else {
      event.previousContainer.data.splice(event.previousIndex, 1);
      this.runOperation();
    }
    this.transferringItem = undefined
  }

  noEnter() {
    return false;
  }

  entered() {
    this.transferringItem = undefined;
  }

  exited(e: CdkDragStart<Operation>) {
    this.transferringItem = e.source.data;
  }
}
