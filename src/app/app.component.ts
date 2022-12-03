import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topicName = 'Models in Angualar';
  desc = 'These are just interfaces in typescript';

  constructor(private usersService: UsersService) {
    console.warn(usersService.getData());
  }
}
