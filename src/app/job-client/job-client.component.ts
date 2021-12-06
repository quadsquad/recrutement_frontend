import {Component, Input, OnInit} from '@angular/core';
import {JobServiceService} from '../services/jobs/job-service.service';

@Component({
  selector: 'app-job-client',
  templateUrl: './job-client.component.html',
  styleUrls: ['./job-client.component.css']
})
export class JobClientComponent implements OnInit {
  dataJobs: any =[];
  @Input() job: string;
  term: string;
  city: string;
  constructor(private js: JobServiceService) { }
  selectedJob:any;
 onSelect(job):void{
  this.selectedJob=job;
 }
  ngOnInit(): void {
    this.js.getAllJobs().subscribe((res : [])=>{
      this.dataJobs=res
    }, (err)=>{
      console.log(err);
    });
  }

}
