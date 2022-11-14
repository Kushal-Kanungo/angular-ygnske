import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.parentFunction.emit('Child Data Passed');
  }

  sendData() {
    let item = { name: 'Kushal', age: 22 };
    this.parentFunction.emit(item);
  }
}
