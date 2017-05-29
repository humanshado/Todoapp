import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels:string[] = ['Completed Tasks', 'Pending Tasks'];
  public doughnutChartData:number[] = [350, 100];
  public doughnutChartType:string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

   // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
