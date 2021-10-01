import { TodosResponseModel } from './../models/todosResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from '../models/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl = "https://jsonplaceholder.typicode.com/todos";
  constructor(private httpClient:HttpClient) { }

  getTodos():Observable<Todos[]>{
    return this.httpClient.get<Todos[]>(this.apiUrl);
  }


}
