import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee:Employee;
  constructor(public employeeService:EmployeeService,private router:Router) { }

  ngOnInit() {
  }

  goDetail(){
    this.router.navigate(['employee/' + this.employee.id])
  }

}
