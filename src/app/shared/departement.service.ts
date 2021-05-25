import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../models/departement.model';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http: HttpClient) { }

  public findAll():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8888/departement/list');
  }

  addDep(dep:Departement):Observable<any[]>{
  return this.http.get<any[]>('http://localhost:8888/departement/add');
  }
}
