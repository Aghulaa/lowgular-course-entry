import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';

@Component({
  selector: 'employee-list',
 templateUrl: './employee-list.component.html',
  //template: '<h1>Inaczej</h1>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class EmployeeListComponent {
  constructor(private _httpClient: HttpClient) {}
  data$: Observable<EmployeeModel[] | null> = this._httpClient.get<EmployeeModel[]>('assets/data/employees.json');
 // data = [{name: 'Agnieszka'},{name: 'Monika'}];
  //title: string='Tekst, który pojawi się w HTML';
}
