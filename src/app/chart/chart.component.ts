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
    @Input() todosAll:number;
    
  // Doughnut
  doughnutChartLabels:string[] = ['Completed Tasks', 'Pending Tasks'];
  doughnutChartData:number[];
  doughnutChartType:string = 'doughnut';

  constructor() {
   
   }

  ngOnInit() {
    console.log(this.todosCompleted)
  }

   // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
