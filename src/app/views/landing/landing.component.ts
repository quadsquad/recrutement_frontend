import { Component, OnInit } from '@angular/core';
import {JobServiceService} from '../../services/jobs/job-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']

})
export class LandingComponent implements OnInit {
  blurStyle: any;
  constructor(private js: JobServiceService) {}
  dataJobs:any =[];

    slideOptions = {
    nav: false,
    dots: true,
    loop: true,
    margin: 10,
    responsiveClass: true,
    // responsive object contains responsive options.
    responsive: {
      0: {
        items: 1,
        dots: true
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  };

    images = [
      'assets/img/avatar.jpg',
      'assets/img/ryan.jpg',
      'assets/img/team-1-800x800.jpg',
      'assets/img/team-2-800x800.jpg',
      'assets/img/team-3-800x800.jpg',
      'assets/img/team-4-470x470.png',
  ];


  applyBlur() {
    if (localStorage.getItem('data') !== 'null' && JSON.parse(localStorage.getItem('data')).role === 'admin') {
      this.blurStyle = {
        'filter': 'blur(10px)'
      }
    } else {
      this.blurStyle = null;
    }
    return this.blurStyle;
  }


  ngOnInit(): void {
    this.js.getAllJobs().subscribe((res : [])=>{
      this.dataJobs=res
    }, (err)=>{
      console.log(err);
    });
    if (localStorage.getItem('data') !== 'null' && JSON.parse(localStorage.getItem('data')).role === 'admin') {
      window.location.href = '/admin/dashboard';
    }
  }


}
