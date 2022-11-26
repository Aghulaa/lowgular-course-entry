import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required]),
    age: new FormControl(null,[Validators.min(0),Validators.required]),
    salary: new FormControl(null,[Validators.min(0),Validators.required])
  });

  oneButtonClicked(form: {email: string, age: number, salary: number}){
    alert('User was successfully added to the database. Email: ' + form.email +
      ', Age:' + form.age + ', Salary: ' + form.salary + "$");
  }
}