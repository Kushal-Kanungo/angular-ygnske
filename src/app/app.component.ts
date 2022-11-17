import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topicName = 'Calling Api In a Service';
  desc =
    'We generally call an api in a service so that we can provide this data to different components';

  constructor(private todoData: UserServiceService) {
    this.todoData.getData().subscribe((data) => {
      console.log(data);
    });
  }
}
