import { Component, OnInit, Input } from '@angular/core';
//import { Todo, todoItem } from '../../models/todo.model';


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

  constructor() {}

  ngOnInit() {
    console.log(this.todos.length);
    this.todosCompleted = this.todos.filter(todo => todo.status).length
    this.todosPending = this.todos.filter(todo => !todo.status).length
    this.todosAll = this.todos.length

    this.doughnutChartData = [this.todosPending, this.todosCompleted]

  }

  // Doughnut
  public doughnutChartLabels: string[] = ['Pending Tasks', 'Completed Tasks']
  public doughnutChartData: number[];
  public doughnutChartType: string = 'doughnut';

   // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
