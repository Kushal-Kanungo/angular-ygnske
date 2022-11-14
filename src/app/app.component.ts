import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dataArray = [
    { name: 'Kushal', age: 22, address: 'Jaipur' },
    { name: 'Tony', age: 30, address: 'Noida' },
    { name: 'Andrew', age: 45, address: 'Delhi' },
    { name: 'John', age: 34, address: 'Gurgao' },
  ];
}
