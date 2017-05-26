import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   model = new Todo();
   
    constructor(){}

    ngOnInit(){
      console.log(this.model.todoItems);
    }

    getTodoItems(){
      return this.model.todoItems;
    }
}
