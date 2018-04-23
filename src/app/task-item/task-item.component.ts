import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ITask, Task } from '../task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() newTask: ITask;
  @Output() delete = new EventEmitter<any>();


  editing = false;
  title = '';



  constructor() {

  }

  ngOnInit() {
  }

  isDone() {
    this.newTask.completed = !this.newTask.completed;
  }

  handleClick(event: MouseEvent) {
    this.delete.emit(event);
  }

  startEditing() {
    this.editing = true;
    this.title = this.newTask.title;
  }

  stopEditing() {
    this.newTask.title = this.title;
    this.editing = false;
  }



}
