import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  value = '';
  clickEvent(eve) {
    this.value = eve;
  }

  keyupEvent(eve) {
    this.value = eve;
  }

  

}
