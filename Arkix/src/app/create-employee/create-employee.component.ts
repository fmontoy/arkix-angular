import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(public employeeService:EmployeeService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    console.log(form.value)
    this.employeeService.post('create',form.value)
        .subscribe(
          (response)=>{
            console.log(response)
          },
          (error)=>{
            console.log(error)
          }
        );
  }

}
