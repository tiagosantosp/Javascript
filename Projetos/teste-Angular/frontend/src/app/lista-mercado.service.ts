import { List } from './List';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListaMercadoService {

  private API = 'http://localhost:3001/produtos'

  constructor(private http: HttpClient) { }

  list () {
    return this.http.get<List[]>(this.API)
  }
}
