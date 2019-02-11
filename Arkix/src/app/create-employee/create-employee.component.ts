import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material';
import {AlertModalComponent} from '../alert-modal/alert-modal.component';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(public employeeService:EmployeeService,public route:Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    this.employeeService.post('create',form.value)
        .subscribe(
          (response)=>{
            this.dialog.open(AlertModalComponent, {
              width: '250px',
              data: {title:'Empleado Creado', subtitle:'El empleado ha sido creado exitosamente'}
            });
            this.route.navigate(['']);
          },
          (error)=>{
            console.log(error)
          }
        );
  }

}
