import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users';


@Injectable({
  providedIn: 'root'
})

export class TesteService {

  constructor( private http: HttpClient ) {}

  private urlApi: string = "https://fakestoreapi.com/users"

  getAll (): Observable<Users[]> {
    return this.http.get<Users[]>(this.urlApi)
  }
}
