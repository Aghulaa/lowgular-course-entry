import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CreateEmployeeModel } from '../../model/create-employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(0), Validators.required]),
    salary: new FormControl(null, [Validators.min(0), Validators.required])
  });

  constructor(private _employeeService: EmployeeService) {
  }

  // oneButtonClicked(form: { email: string, age: number, salary: number }) {
  //   alert('User was successfully added to the database. Email: ' + form.email +
  //     ', Age:' + form.age + ', Salary: ' + form.salary + "$");
  // }
  onFormSubmitted(form: CreateEmployeeModel) {
    this._employeeService.create({email: form.email, age: form.age, salary: form.salary})
      .subscribe(alert => 'User was successfully added to the database. Email: ' + form.email +
        ', Age:' + form.age + ', Salary: ' + form.salary + "$");
  }

}
