import { Injectable } from '@angular/core';
import { person } from './usersType';
@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor() {}

  getData() {
    const p1: person = {
      name: 'kushal',
      id: 101,
      indian: true,
      address: 'Vaishali Nagar',
    };
    return p1;
  }
}
