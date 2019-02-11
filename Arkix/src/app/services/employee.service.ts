import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl = 'http://dummy.restapiexample.com/api/v1/'
  constructor(private http:Http) { }
  
  get(url:string){
    return this.http.get(this.apiUrl + url);
  }

  delete(id:any){
    return this.http.delete(this.apiUrl + 'delete/{id}' + id)
  }

  post(url:string,data:{}){
    return this.http.post(this.apiUrl + url,JSON.stringify(data));
  }
}
