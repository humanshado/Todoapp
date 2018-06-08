import { Component, AfterViewInit, ViewChild, OnInit, OnChanges } from '@angular/core';
import { Todo, todoItem } from '../shared/todo.model';
import { ChartComponent } from './chart/chart.component';

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
    todosAll:number = this.todosCompleted + this.todosPending;
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
        }else if(this.e.target.textContent === "Pending"){
          this.todos = this.model.todoItems.filter(todoItem => !todoItem.status);
          this.todosPending = this.todos.length;
        }else{
          this.todos = this.model.todoItems;
          this.todosAll = this.todos.length;
        }
    }

    addTodoItem(newTodo){
      if(newTodo){
        this.model.todoItems.push(new todoItem(newTodo));
      }
      this.todoText.nativeElement.value = "";
    }

}
