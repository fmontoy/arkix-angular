import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {
  employee:Employee;

  constructor(public employeeService:EmployeeService, private route: ActivatedRoute, 
    public dialog: MatDialog,private routs:Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.employeeService.get('employee/'+ id)
      .subscribe(
        (response)=>this.employee = response.json(),
        (error)=>console.log(error)
      );
  }

  deleteEmployee():void{
    const dialogRef = this.dialog.open(DialogModalComponent, {
      width: '250px',
      data: {id: this.employee.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.employeeService.delete(this.employee.id)
          .subscribe(
            (response)=>{
              console.log(response);
              alert('Empleado eliminado exitosamente!')
              this.routs.navigate(['']);

            },
            (error)=>{
              console.log(error);
            }
          );
      }
    });
    }
}


