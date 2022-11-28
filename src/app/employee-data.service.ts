import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDataService {
  constructor() {}
  employeeData = {};
  setData(emp) {
    this.employeeData = emp;
  }

  getData() {
    return this.employeeData;
  }
}
