import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  curly = '{{item}}';
  data = ['Bruce', 'Tony', 'Andrew', 'Ram'];
  objectData = [
    { name: 'Kushal', age: 22, email: 'kushal@com' },
    { name: 'Ram', age: 26, email: 'ram@com' },
    { name: 'Tony', age: 50, email: 'tony@com' },
  ];
}
