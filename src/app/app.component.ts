import { Component, ViewChild, OnInit } from '@angular/core';
import { Todo, todoItem } from '../models/todo.model';
import { ChartComponent } from './chart/chart.component';
import { DataService } from 'services/data.service';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    todos;
    todosCompleted: number;
    todosPending: number;
    todosAll:number = this.todosCompleted + this.todosPending;
    model = new Todo();
    @ViewChild('todoText') todoText;
    @ViewChild('todoChart') todoChart;

    constructor(private dataService: DataService){}

    ngOnInit(){
        this.dataService.getTodos().subscribe(todos => {
            this.todos = todos;
        })
    }


    switchTodos(e){
      if(e.target.textContent === "Completed"){
        this.todos = this.todos.filter(todoItem => todoItem.status);
      }else if(e.target.textContent === "Pending"){
        this.todos = this.todos.filter(todoItem => !todoItem.status);
      }else{
        this.todos;
      }
    }

    addTodoItem(newTodo){
      if(newTodo){
        this.model.todoItems.push(new todoItem(newTodo));
      }
      this.todoText.nativeElement.value = "";
    }

}
