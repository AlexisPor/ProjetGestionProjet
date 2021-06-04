import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from '../models/projet.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http: HttpClient) {

  }

  public findAll(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8888/projet/list');
  }

  public addProjet(proj: Projet): Observable<any>{
    return this.http.post('http://localhost:8888/projet/add',proj);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete("http://localhost:8888/projet/delete/" + id);
  }

  public update(proj: Projet): Observable<any>{
    return this.http.put("http://localhost:8888/projet/update", proj);
  }

  public findById(id: number): Observable<any>{
    return this.http.get("http://localhost:8888/projet/find/" + id);
  }
}
