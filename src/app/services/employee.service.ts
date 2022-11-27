import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { PersonModel } from '../model/person.model';
import { CreateEmployeeModel } from '../model/create-employee.model';

//import {EmployeeModel} from "../model/employee.model"; useless library after change Model

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) { }
  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<PersonModel[]>('assets/data/people.json');
  }

  create(employee: CreateEmployeeModel): Observable<void> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create',employee)
      .pipe(map(_ => void 0));
  }
  //Automatically generated by browser after submit
  // create(employee: CreateEmployeeModel): Observable<any>{
  //   return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create',employee);
  // }

}
