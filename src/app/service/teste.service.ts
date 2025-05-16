import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SprintProps, StatusPropsReturn } from '../interfaces/interface_sprint';


@Injectable({
  providedIn: 'root'
})

export class TesteService {

  constructor( private http: HttpClient ) {}

  private urlApi: string = "http://localhost:3333/"

  getAll (): Observable<StatusPropsReturn> {
    return this.http.get<StatusPropsReturn>(this.urlApi+"sprint")
  }

  postAll (data: any): Observable<StatusPropsReturn> {
    return this.http.post<StatusPropsReturn>(this.urlApi+"sprint", data)
  }

}
