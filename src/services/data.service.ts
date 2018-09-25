import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Todo, todoItem } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  model = new Todo();

  constructor() { }

  getTodos(): Observable<Todo[]> {
    console.log('todoItems in service', this.model.todoItems)
    return of(this.model.todoItems);
  }
}
