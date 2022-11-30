import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  topicName = 'Observable ';
  desc =
    'Instead of promise which provides all data at once observable provide data in stream';

  apiData: string[] = ['Default Data'];

  /* Observable provides data only when a observer is present */
  myObservable = new Observable((observer) => {
    console.warn('Observable is starting to emit data');

    setTimeout(() => {
      observer.next('Data 1');
    }, 1000);

    setTimeout(() => {
      observer.next('Data 2');
    }, 1000);
    setTimeout(() => {
      observer.next('Data 3');
    }, 2000);
    setTimeout(() => {
      observer.next('Data 4');
    }, 3000);
    setTimeout(() => {
      observer.next('Data 5');
    }, 4000);
    setTimeout(() => {
      observer.next('Data 6');
    }, 5000);
    setTimeout(() => {
      observer.next('Data 7');
    }, 6000);

    // observer.next('Data 1');
    // observer.next('Data 2');
    // observer.next('Data 3');
    // observer.next('Data 4');
    // observer.next('Data 5');
    // observer.next('Data 6');
    // observer.next('Data 7');
  });

  ngOnInit() {
    this.myObservable.subscribe((emittedValue: string) => {
      this.apiData.push(emittedValue);
    });
  }
}
