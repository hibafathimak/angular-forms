import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../interface/employee';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employeeForm: FormGroup;

  employeeList: Employee[] = [];

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      contact: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18), Validators.pattern("[0-9]{1,3}")]],
      address: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.pattern("[0-9]+")]]
    });
  }

  submit() {
    if (this.employeeForm.valid) {
      const newEmployee: Employee = this.employeeForm.value;
      console.log(this.employeeForm);
      this.employeeList.push(newEmployee);
      console.log(this.employeeList);
      this.employeeForm.reset();
    }
  }
}
