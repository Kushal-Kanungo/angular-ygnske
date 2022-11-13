import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  dynamicdata: string =
    'Kushal a Dynamic data. This data is comming from .ts file so comming dynamiclly';

  dynamicFunction() {
    return 'This is dynamic unparametrized function';
  }

  parameterFunction(name: string) {
    return name + ' is a passed parameter';
  }
}
