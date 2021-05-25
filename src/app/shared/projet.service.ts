import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http: HttpClient) {

  }

  public findAll():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8888/projet/list');
  }
}
