import { Component, OnInit } from '@angular/core';
import { ITask, Task } from '../task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: ITask[] = [];
  status = 'all';

  constructor() { }

  ngOnInit() {


  }


  onCreatedTask(task) {
    return this.tasks.push(new Task(task));

  }


  onDelete(event, i) {
    return this.tasks.splice(i, 1);
  }

  onComplited() {
    this.status = 'completed';
  }

  onAll() {
    this.status = 'all';
  }

  onStarted() {
    this.status = 'started';
  }



}
