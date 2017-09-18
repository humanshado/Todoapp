import { Component, OnInit, Input } from '@angular/core';
import { Todo, todoItem } from '../../shared/todo.model';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
    @Input() todosCompleted: number;
    @Input() todosPending: number;
    @Input() todosAll:number = this.todosCompleted + this.todosPending;
    kpi = Math.floor((this.todosCompleted/this.todosAll)*100)

  // Doughnut
  doughnutChartLabels:string[] = ['Completed Tasks', 'Pending Tasks'];
  //public doughnutChartData:number[];
  doughnutChartData:number[] = [this.todosCompleted, this.todosPending];
  doughnutChartType:string = 'doughnut';

  constructor() {
   
   }

  ngOnInit() {
    console.log("Messsage From ngInit");
    this.doughnutChartData = [8,13];
  }

   // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
