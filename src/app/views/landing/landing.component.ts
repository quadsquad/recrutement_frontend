import { Component, OnInit } from '@angular/core';
import {JobServiceService} from '../../services/jobs/job-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {
  constructor(private js: JobServiceService) {}
  dataJobs:any =[];

  ngOnInit(): void {
    this.js.getAllJobs().subscribe((res : [])=>{
      this.dataJobs=res
    }, (err)=>{
      console.log(err);
    });
  }


}