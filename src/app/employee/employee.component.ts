import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  empData = { emp: 'Employee Kushal' };
  constructor(private employee: EmployeeDataService) {
    this.employee.setData(this.empData);
  }

  ngOnInit() {}
}
