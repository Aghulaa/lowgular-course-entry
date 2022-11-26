import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
//import { HttpClient } from '@angular/common/http'; <- this library is useless after change constructor
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
//import { EmployeeModel } from '../../model/employee.model'; useless library after change Model
import {PersonModel} from "../../model/person.model";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  //template: '<h1>Inaczej</h1>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) { }
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();

  // data = [{name: 'Agnieszka'},{name: 'Monika'}];
  //title: string='Tekst, który pojawi się w HTML';
}
