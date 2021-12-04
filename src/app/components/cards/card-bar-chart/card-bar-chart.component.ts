import { Component, OnInit, AfterViewInit } from '@angular/core';
// @ts-ignore
import { Chart } from 'chart.js';

@Component({
  selector: 'app-card-bar-chart',
  templateUrl: './card-bar-chart.component.html',
})
export class CardBarChartComponent implements OnInit, AfterViewInit {

  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    const config = {
      type: 'bar',
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
            label: new Date().getFullYear(),
            backgroundColor: '#132A54',
            opacity:0.9,
            borderColor: '#587EFF',
            data: [30, 78, 56, 34, 100, 45, 13, 120, 50, 68 , 12, 55],
            fill: true,
            barThickness: 50,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Orders Chart',
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: 'rgba(0,0,0,.4)',
          },
          align: 'end',
          position: 'bottom',
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: 'Month',
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.3)',
                zeroLineColor: 'rgba(33, 37, 41, 0.3)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Value',
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.2)',
                zeroLineColor: 'rgba(33, 37, 41, 0.15)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx: any = document.getElementById('bar-chart');
    ctx = ctx.getContext('2d');
    // @ts-ignore
    new Chart(ctx, config as any);
  }
}