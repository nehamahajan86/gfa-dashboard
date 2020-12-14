import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { SalesService } from 'src/app/sales/sales.service';

@Component({
  selector: 'app-annual-sales-chart',
  templateUrl: './annual-sales-chart.component.html',
  styleUrls: ['./annual-sales-chart.component.css']
})
export class AnnualSalesChartComponent implements OnInit {

  public salesChartData: ChartDataSets[] = [
    { data: [], label: 'Total Sales' },
  ];

  public salesChartLabels: Label[] = [];

  constructor(private salesService: SalesService) { }

  ngOnInit() {
    
  }

}
