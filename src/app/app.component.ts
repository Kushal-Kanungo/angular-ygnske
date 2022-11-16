import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  dynamicdata: string = 'Kushal a dynamic data.';

  importLine = "import { Routes, RouterModule } from '@angular/router';";
}
