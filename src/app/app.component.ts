import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  braces = '{{ variable/funct()}}';

  dynamicdata: string =
    'This is a Dynamic data. This data is comming from .ts file so comming dynamically';

  myNumber: number = 98;

  dynamicFunction() {
    return 'This is dynamic unparametrized function';
  }

  parameterFunction(name: string) {
    return name + ' is a passed parameter';
  }

  myArray: string[] = ['first value', 'second value'];

  myObject: object = { name: 'Kushal', topic: 'Angular' };

  a = 10;
  b = 20;
}
