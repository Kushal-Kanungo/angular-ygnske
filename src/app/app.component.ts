import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  dynamicdata: string = 'Kushal a dynamic data.';

  myName = 'Kushal';
  myFunc() {
    alert('Button Clicked');
  }

  myParamFunc(param) {
    alert(param);
  }

  variableFunc(name) {
    alert(name);
  }
}
