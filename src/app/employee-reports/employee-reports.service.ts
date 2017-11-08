import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response, URLSearchParams} from '@angular/http';
import { Employee, configurations } from '../shared';

@Injectable()
export class EmployeeReportsService {

  constructor(private http: Http) {

  }

  public getEmployeeReports(id): Observable<Employee[]> {
    return this.http.get(configurations.employeeDataFile).map((res: Response) => {
       const data = res.json();
       const returningArray = [];

       for (let key = 0; key < data.length; key++) {

          const currEl = data[key];
          if (currEl.managerId === id) {
            returningArray.push(new Employee(currEl));
          }
       }

       return <Employee[]> returningArray;

     })
     .catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }


}
