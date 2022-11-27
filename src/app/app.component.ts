import { Component } from '@angular/core';

enum Priority {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topicName = 'Topic Name';
  desc = 'it is desc';

  onSubmit(data) {
    console.warn(data);
    console.log(data.priority === Priority.HIGH);
    console.log(Priority.HIGH);
  }
}
