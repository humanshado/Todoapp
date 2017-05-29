import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Todo, todoItem } from '../shared/todo.model';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
   model = new Todo();
   @ViewChild('todoText') todoText;

    constructor(){}

    ngAfterViewInit(){
      // let el = this.todoText.nativeElement;
      // el.textContent = " ";
    }

    getTodoItems(){
      return this.model.todoItems;
      //return this.model.todoItems.filter(todoItem => !todoItem.status);
    }

    addTodoItem(newTodo){
      if(newTodo){
        this.model.todoItems.push(new todoItem(newTodo));
      }
    
      this.todoText.nativeElement.value = "";
    }
}
