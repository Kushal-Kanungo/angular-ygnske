import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  url = 'https://jsonplaceholder.typicode.com/todos/';

  /*This will return a observable to which we can subscribe and get data */
  getData() {
    return this.http.get(this.url);
  }
}
