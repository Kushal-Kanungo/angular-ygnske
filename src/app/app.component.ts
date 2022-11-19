import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topicName = 'List of API Data';
  desc = 'We will use service and for loop';
  data: any = [];

  constructor(private todoData: UserServiceService) {
    this.todoData.getData().subscribe((data) => {
      this.data = data;
    });
  }
}
