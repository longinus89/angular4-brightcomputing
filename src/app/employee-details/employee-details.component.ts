import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Employee } from '../shared/employee.model';
import { EmployeeDetailsService } from './employee-details.service';
import { configurations } from '../shared/configurations';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./scss/employee-details.scss'],
  providers: [ EmployeeDetailsService ]
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;
  private employeeDetailsService;
  private sub: any;
  photoFolder = '';

  constructor(
    private _location: Location,
    private serv: EmployeeDetailsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.employeeDetailsService = serv;
    this.photoFolder = configurations.photo_folder_path;
  }

  ngOnInit() {

    const that = this;

    this.sub = this.route.params.subscribe(params => {
      const employeeId = +params['id'];
      const obs = this.employeeDetailsService.getEmployee(employeeId);

      obs.subscribe(
       data => {
         console.log(data);
         that.employee = data;
       },
       error => {
         console.log(error)
       }
      );
    });
  }

  public back() {
    // this.slider = 'slider-right';
    this._location.back();
  }
  public displayEmployee(id) {
    this.router.navigate(['/employees/' + id]);
  }
  public displayEmployeeReports(id) {
    this.router.navigate(['/employees/' + id + '/reports']);
  }

}
