import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  constructor() {}

  getUserData() {
    return {
      name: 'Kushal',
      age: '22',
      location: 'Jaipur',
    };
  }
}
