/* tslint:disable:use-lifecycle-interface */
import { Component, OnInit, AfterViewInit } from '@angular/core';
// @ts-ignore
import Chart from 'chart.js';

@Component({
  selector: 'app-card-line-chart',
  templateUrl: './card-line-chart.component.html',
})
export class CardLineChartComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    const config = {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
           'August',
          'September',
          'October',
          'November',
          'December'
        ],
        datasets: [
          {
            label: 'Accepted',
            backgroundColor: '#4c51bf',
            borderColor: '#4c51bf',
            data: [65, 78, 66, 44, 56, 67, 75,65, 78, 66, 44, 56, 67],
            fill: false,
          },
          {
            label: 'Shared',
            fill: false,
            backgroundColor: '#fff',
            borderColor: '#fff',
            data: [40, 68, 86, 74, 56, 60, 87,65, 78, 66, 44, 56, 67],
          },
           {
            label: 'Reported',
            fill: false,
            backgroundColor: '#eb6d51',
            borderColor: '#eb6d51',
            data: [30, 12, 22, 40, 12, 12, 22,45, 58, 44, 55, 45, 55],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Jobs Accepted | Shared | Reported',
          fontColor: 'white',
        },
        legend: {
          labels: {
            fontColor: 'white',
          },
          align: 'end',
          position: 'bottom',
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: 'rgba(255,255,255,.7)',
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Month',
                fontColor: 'white',
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.3)',
                zeroLineColor: 'rgba(0, 0, 0, 0)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: 'rgba(255,255,255,.7)',
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Value',
                fontColor: 'white',
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: 'rgba(255, 255, 255, 0.15)',
                zeroLineColor: 'rgba(33, 37, 41, 0)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx: any = document.getElementById('line-chart') as HTMLCanvasElement;
    ctx = ctx.getContext('2d');
    new Chart(ctx, config);
  }
}
