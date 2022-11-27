import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
//import { HttpClient } from '@angular/common/http'; <- this library is useless after change constructor
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
//import { EmployeeModel } from '../../model/employee.model'; useless library after change Model
import {PersonModel} from "../../model/person.model";

@Component({
  selector: 'app-employees-faces',
  templateUrl: './employees-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesFacesComponent {
}
