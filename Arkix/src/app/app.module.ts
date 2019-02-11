import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './employees/employees.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import {Routes, RouterModule} from '@angular/router';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { MatDialogModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { DialogModalComponent } from './detail-employee/dialog-modal/dialog-modal.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

const appRoutes:Routes =[
  { path:'', component:EmployeesComponent },
  { path:'create-employee', component:CreateEmployeeComponent},
  { path:'employee/:id', component:DetailEmployeeComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    EmployeesComponent,
    DetailEmployeeComponent,
    FilterPipe,
    CreateEmployeeComponent,
    DialogModalComponent,
    AlertModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRadioModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DialogModalComponent,
                   AlertModalComponent]
})
export class AppModule { }
