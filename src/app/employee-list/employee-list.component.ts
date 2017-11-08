import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeListService } from './employee-list.service';
import { configurations } from '../shared/configurations';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./scss/employee-list.scss'],
  providers: [ EmployeeListService ]
})
export class EmployeeListComponent implements OnInit {

  employees = [];
  photoFolder = '';

  constructor(
    private employeeListService: EmployeeListService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    const obs = employeeListService.getEmployees();
    const that = this;
    that.photoFolder = configurations.photo_folder_path;

    obs.subscribe(
      data => {
        console.log(data);
        that.employees = data;
      },
      error => {
        console.log(error)
      }
    );

  }

  ngOnInit() {

  }

  displayEmployee(id) {
    this.router.navigate(['/employees/' + id]);
  }

}
