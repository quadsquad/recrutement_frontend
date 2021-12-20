import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-card-bar-chart',
  templateUrl: './card-bar-chart.component.html',
})
export class CardBarChartComponent implements OnInit {
@ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {

    this.chartOptions = {
      series: [
        {
          name: 'Recruiters Nb ',
          data: [50, 40, 60, 51, 42, 109, 100,50, 40, 60, 51, 42],
          color:'#dd504c'
        },

      ],
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
        style: {
          fontSize: '12px',
          colors: ['#fff']
        }
      },

      xaxis: {
         categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
      },

    };

  }

  ngOnInit() {

  }

  public generateData(baseval, count, yrange) {
    let i = 0;
    let series = [];
    while (i < count) {
      let x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      let y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      let z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
