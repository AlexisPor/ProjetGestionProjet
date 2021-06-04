import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Module } from '../models/module.model';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http:HttpClient) { }

  public findAll(): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8888/module/list");
  }

  public addMod(mod: Module): Observable<any>{
    return this.http.post("http://localhost:8888/module/add",mod);
  }

  public deleteMod(id: number): Observable<any>{
    return this.http.delete("http://localhost:8888/module/delete/" + id);
  }

  public update(mod: Module): Observable<any>{
    return this.http.put("http://localhost:8888/module/update", mod);
  }

  public findById(id: number): Observable<any>{
    return this.http.get("http://localhost:8888/module/find/"+id);
  }
}
