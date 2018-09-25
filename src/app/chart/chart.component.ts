import { Component, OnInit, Input } from '@angular/core';
import { Todo, todoItem } from '../../models/todo.model';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
    @Input('todos') todos;
    todosCompleted: number;
    todosPending: number;
    todosAll: number;

  // Doughnut
  doughnutChartLabels:string[] = ['Completed Tasks', 'Pending Tasks'];
  doughnutChartData:number[];
  doughnutChartType:string = 'doughnut';

  constructor() {}

  ngOnInit() {
    console.log(this.todos);
    this.todosCompleted = this.todos.filter(todo => todo.status).length
    this.todosPending = this.todos.filter(todo => !todo.status).length
    this.todosAll = this.todos.length
  }

   // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
