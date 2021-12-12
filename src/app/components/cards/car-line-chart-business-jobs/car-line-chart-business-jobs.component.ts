/* tslint:disable:use-lifecycle-interface */
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: 'app-car-line-chart-business-jobs',
  templateUrl: './car-line-chart-business-jobs.component.html',
  styleUrls: ['./car-line-chart-business-jobs.component.css']
})
export class CarLineChartBusinessJobsComponent implements OnInit {

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  constructor() {

    this.chartOptions = {
      series: [
        {
          name: 'Jobs postulated ',
          data: [50, 40, 60, 51, 42, 109, 100,50, 40, 60, 51, 42],
        },
        /*{
          name: 'Jobs shared ',
          data: [30, 20, 50, 41, 32, 99, 90,40, 30, 50, 41, 62],
          color: '#FF6555'
        },
        {
          name: 'Jobs reported ',
          data: [70, 10, 40, 21, 42, 89, 60, 30, 20, 10, 31, 100],
          color: '#000'
        },*/
      ],
      chart: {
        height: 350,
        type: 'area',
        foreColor:'#000'
      },
      dataLabels: {
        enabled: false,
        style: {
          fontSize: '25px',
          colors: ['#fff'],
        }
      },

      stroke: {
        curve: 'smooth'
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
    this.chartOptions1 = {
      series: [

        {
          name: 'Jobs shared ',
          data: [30, 20, 50, 41, 32, 99, 90,40, 30, 50, 41, 62],
          color: '#FF6555'
        },

      ],
      chart: {
        height: 350,
        type: 'area',
        foreColor:'#000'
      },
      dataLabels: {
        enabled: false,
        style: {
          fontSize: '25px',
          colors: ['#fff'],
        }
      },

      stroke: {
        curve: 'smooth'
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
    this.chartOptions2 = {
      series: [

        {
          name: 'Jobs reported ',
          data: [70, 10, 40, 21, 42, 89, 60, 30, 20, 10, 31, 100],
          color: '#000'
        },
      ],
      chart: {
        height: 350,
        type: 'area',
        foreColor:'#000'
      },
      dataLabels: {
        enabled: false,
        style: {
          fontSize: '25px',
          colors: ['#fff'],
        }
      },

      stroke: {
        curve: 'smooth'
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


  ngOnInit(): void {
  }

}
