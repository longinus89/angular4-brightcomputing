import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { EmployeeListComponent } from './employee-list.component';
import { EmployeeListPipe } from './employee-list.pipe';

// const rateAlertRouting: ModuleWithProviders = RouterModule.forChild([]);

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    // rateAlertRouting,
    BrowserAnimationsModule
  ],
  declarations: [
    EmployeeListComponent,
    EmployeeListPipe
  ],
  providers: [
    HttpModule
  ],
  exports: [
    EmployeeListComponent
  ]
})
export class EmployeeListModule {}
