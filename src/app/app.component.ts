import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}
  name = 'Angular';
  dynamicdata: string = 'Kushal a dynamic data.';

  importLine = "import { Routes, RouterModule } from '@angular/router';";

  user = {
    username: 'kushal',
    userid: '101',
  };

  navigate() {
    this.router.navigate(['user', this.user.userid, this.user.username]);
  }
}
