import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminDataService {
  constructor() {}
  getAdminData() {
    return {
      name: 'Admin Kushal',
      age: '34',
      location: 'Delhi',
    };
  }
}
