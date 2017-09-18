import { Component, AfterViewInit, ViewChild, OnInit, OnChanges } from '@angular/core';
import { Todo, todoItem } from '../shared/todo.model';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
    todos;
    e:any;
    todosCompleted: number;
    todosPending: number;
    todosAll:number;
   model = new Todo();
   @ViewChild('todoText') todoText;
   @ViewChild('todoChart') todoChart;

    constructor(){}

    ngAfterViewInit(){}

    switchfn(event){
      this.e = event;

        if(this.e.target.textContent === "Completed"){
          this.todos =  this.model.todoItems.filter(todoItem => todoItem.status);
          this.todosCompleted = this.todos.length;
          console.log(this.todosCompleted);
        }else if(this.e.target.textContent === "Pending"){
          this.todos = this.model.todoItems.filter(todoItem => !todoItem.status);
          this.todosPending = this.todos.length;
          console.log(this.todosPending);
        }else{
          this.todos = this.model.todoItems;
          this.todosAll = this.todos.length;
          console.log(this.todosAll);
        }
    }

    addTodoItem(newTodo){
      if(newTodo){
        this.model.todoItems.push(new todoItem(newTodo));
      }
      this.todoText.nativeElement.value = "";
    }

}
