import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tache } from '../models/tache.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8888/tache/list');
  }

  public addTache(tache: Tache): Observable<any>{
    return this.http.post('http://localhost:8888/tache/add',tache);
  }

  public deleteTache(id: number): Observable<any>{
    return this.http.delete('http://localhost:8888/tache/delete/'+ id);
  }

  public updateTache(tache: Tache): Observable<any>{
    return this.http.put('http://localhost:8888/tache/update',tache);
  }

  public findById(id: number): Observable<any>{
    return this.http.get('http://localhost:8888/tache/find/' + id);
  }
}
