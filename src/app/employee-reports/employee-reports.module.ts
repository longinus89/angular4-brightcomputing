import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { EmployeeReportsComponent } from './employee-reports.component';

// const rateAlertRouting: ModuleWithProviders = RouterModule.forChild([]);

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    // rateAlertRouting,
    BrowserAnimationsModule
  ],
  declarations: [
    EmployeeReportsComponent
  ],
  providers: [
    HttpModule
  ],
  exports: [
    EmployeeReportsComponent
  ]
})
export class EmployeeReportsModule {}
