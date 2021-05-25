import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddEmployeComponent } from '../components/employe/add-employe/add-employe.component';
import { Employe } from '../models/employe.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeService {


  constructor(private http:HttpClient) {
  }


  addEmp(emp: Employe): Observable<any> {
    ///this.emps.push(emp);
    console.log("emp==>"+emp);
   return this.http.post("http://localhost:8888/employe/add",emp);
  }

  public findAll():Observable<any[]>{

    return this.http.get<any[]>('http://localhost:8888/employe/list');


  }



}
