import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  money = 10;
  name = 'kushal kaungo';
  today = Date.now();
  str = 'Hello angular';
}
