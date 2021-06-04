import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<any[]>{
   return this.http.get<any[]>('http://localhost:8888/role/list');
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>('http://localhost:8888/role/delete/'+id)
  }

  public addRole(role:Role): Observable<any>{
    return this.http.post('http://localhost:8888/role/add',role);
  }

  public updateRole(role: Role): Observable<any>{
    return this.http.put('http://localhost:8888/role/update', role);
  }

  public findById(id: number): Observable<any>{
    return this.http.get('http://localhost:8888/role/find/' + id);
  }
}
