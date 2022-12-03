import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Kushal';
  disabledBox = true;

  enableBox() {
    this.disabledBox = this.disabledBox !== true;
  }
}
