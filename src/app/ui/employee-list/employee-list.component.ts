import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  //template: '<h1>Inaczej</h1>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) {}
  data$ = this._employeeService.getAll();

  remove(id: string){
    this._employeeService.delete(id).subscribe();
  }
}
