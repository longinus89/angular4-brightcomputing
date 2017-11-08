import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { EmployeeReportsService } from './employee-reports.service';
import { configurations } from '../shared/configurations';

@Component({
  selector: 'app-employee-reports',
  templateUrl: './employee-reports.component.html',
  styleUrls: ['./scss/employee-reports.scss'],
  providers: [ EmployeeReportsService ]
})
export class EmployeeReportsComponent implements OnInit {

  employees = [];
  private employeeReportsService;
  private sub: any;
  photoFolder = '';

  constructor(
    private _location: Location,
    private serv: EmployeeReportsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.employeeReportsService = serv;
    this.photoFolder = configurations.photo_folder_path;
  }

  ngOnInit() {

    const that = this;

    this.sub = this.route.params.subscribe(params => {
      // (+) converts string 'id' to a number
      const employeeId = +params['id'];

      const obs = this.employeeReportsService.getEmployeeReports(employeeId);

      obs.subscribe(
       data => {
         console.log(data);
         that.employees = data;
       },
       error => {
         console.log(error)
       }
      );
    });
  }

  public back() {
    this._location.back();
  }
  public displayEmployee(id) {
    this.router.navigate(['/employees/' + id]);
  }

}
