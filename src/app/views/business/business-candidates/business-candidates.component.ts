import { Component, OnInit } from '@angular/core';
import {JobServiceService} from '../../../services/jobs/job-service.service';
import {CandidatureService} from '../../../services/candidatures/candidature.service';

@Component({
  selector: 'app-business-candidates',
  templateUrl: './business-candidates.component.html',
  styleUrls: ['./business-candidates.component.css']
})
export class BusinessCandidatesComponent implements OnInit {

    dataJobs: any = [];
    dataCandidatures: any = [];

  constructor(private js: JobServiceService, private cs: CandidatureService) { }

  ngOnInit(): void {
     this.js.getAllJobs().subscribe((res: []) => {
      this.dataJobs = res
    }, (err) => {
      console.log(err);
    });
       this.cs.getAllCandidatures().subscribe((res: []) => {
      this.dataCandidatures = res
    }, (err) => {
      console.log(err);
    });
  }

}
