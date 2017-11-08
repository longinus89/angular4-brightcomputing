import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response, URLSearchParams} from '@angular/http';
import { Employee, configurations } from '../shared';

@Injectable()
export class EmployeeDetailsService {

  constructor(private http: Http) {
  }
  public getEmployee(id): Observable<Employee> {
   return this.http.get(configurations.employeeDataFile)
     .map((res: Response) => {

       const data = res.json();

       for (let key = 0; key < data.length; key++) {
         const singleElem = data[key];
         if (singleElem.id === id) {
           return <Employee> singleElem;
         }
       }
     })
     .catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }


}
