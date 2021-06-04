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
  };

  public addDep(dep:AfpaDepartements):Observable<any>{
    console.log("emp==>"+dep);
  return this.http.post('http://localhost:8888/departement/add',dep);
  };

public deleteDep(id: number):Observable<any>{
  return this.http.delete('http://localhost:8888/departement/delete/'+id);
};

public findById(id: number): Observable<any>{
  return this.http.get('http://localhost:8888/departement/find/'+id);
}

public updateDep(dep: AfpaDepartements): Observable<any>{
  return this.http.put("http://localhost:8888/departement/update", dep);
}
}
