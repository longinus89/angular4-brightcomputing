import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmployeeListModule } from './employee-list/employee-list.module';
import { EmployeeDetailsModule } from './employee-details/employee-details.module';
import { EmployeeReportsModule } from './employee-reports/employee-reports.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list';
import { EmployeeDetailsComponent } from './employee-details';
import { EmployeeReportsComponent } from './employee-reports';


const rootRouting: ModuleWithProviders = RouterModule.forRoot([
  {
    path: 'employees/:id',
    component: EmployeeDetailsComponent,
    data: {
      value: 'employeeDetails',
    }
  },
  {
    path: 'employees/:id/reports',
    component: EmployeeReportsComponent,
    data: {
      value: 'employeeReports',
    }
  },
  {
    path: 'employees',
    component: EmployeeListComponent,
    data: {
      value: 'employeeList',
    },
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  }
], { useHash: true });

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    rootRouting,
    BrowserModule,
    HomeModule,
    EmployeeListModule,
    BrowserAnimationsModule,
    EmployeeDetailsModule,
    EmployeeReportsModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
