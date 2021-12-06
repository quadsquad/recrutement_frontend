import { Component, OnInit } from '@angular/core';
import {JobServiceService} from '../../../services/jobs/job-service.service';
import {AuthenticationServiceService} from '../../../services/authentication-service.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  dataJobs:any =[];
  constructor(private js: JobServiceService, private us: AuthenticationServiceService) { }
  public getToken(): string {
    return sessionStorage.getItem('token');
  }
  ngOnInit(): void {

    this.js.getAllJobs().subscribe((res : [])=>{
      this.dataJobs=res
    }, (err)=>{
      console.log(err);
    });
  }



}
