import { Component } from '@angular/core';
import { UsersDataService } from './users-data.service';
import { AdminDataService } from './admin-data.service';
import { EmployeeDataService } from './employee-data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: object;
  userName = '';
  userAge = '';
  userLocation = '';
  adminName = '';
  adminAge = '';
  adminLocation = '';
  empData = {};

  //Injecting as a dependency injection
  constructor(
    private user: UsersDataService,
    private admin: AdminDataService,
    private emp: EmployeeDataService
  ) {
    this.userName = this.user.getUserData().name;
    this.userAge = this.user.getUserData().age;
    this.userLocation = this.user.getUserData().location;
    this.adminName = this.admin.getAdminData().name;
    this.adminAge = this.admin.getAdminData().age;
    this.adminLocation = this.admin.getAdminData().location;
    this.empData = this.emp.getData();
  }
}
