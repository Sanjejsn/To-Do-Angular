import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Output() createTask: EventEmitter<any> = new EventEmitter();

  title = '';

  constructor() { }

  ngOnInit() {
  }



  submit() {
    this.title = this.title.trim();
    if (this.title.length) {
      this.createTask.emit(this.title);
    }
    this.title = '';
  }





}
