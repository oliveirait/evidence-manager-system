import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interface_Users } from '../interfaces/interface_users';


@Injectable({
  providedIn: 'root'
})

export class TesteService {

  constructor( private http: HttpClient ) {}

  private urlApi: string = "https://fakestoreapi.com/users"

  getAll (): Observable<Interface_Users[]> {
    return this.http.get<Interface_Users[]>(this.urlApi)
  }
}
