import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AfpaDepartements } from '../models/departement.model';


@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http: HttpClient) { }

  public findAll():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8888/departement/list');
  }

  addDep(dep:AfpaDepartements):Observable<any>{
    console.log("emp==>"+dep);
  return this.http.post('http://localhost:8888/departement/add',dep);
  }
}
