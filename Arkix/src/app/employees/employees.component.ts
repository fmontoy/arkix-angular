import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {                      
  employees:Employee[]                                                                                                                                                                                                                                                        
  searchTerm='';
  options = [{name:'Nombre', value:'employee_name'},
             {name:'Salario',value:'employee_salary'},
             {name:'Edad',value:'employee_age'}]
  propName='employee_name';
  constructor(public employee:EmployeeService) {}

  ngOnInit() {
    this.employee.get('employees')
      .subscribe(
        (response)=>{
          this.employees = response.json().slice(0,20);
        },
        (error)=>{
          console.log(error.json());
        }

      );
  }
  
}
