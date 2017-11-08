import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { EmployeeDetailsComponent } from './employee-details.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  declarations: [
    EmployeeDetailsComponent
  ],
  providers: [
    HttpModule
  ],
  exports: [
    EmployeeDetailsComponent
  ]
})
export class EmployeeDetailsModule {}
