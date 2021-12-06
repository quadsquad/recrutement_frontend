import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-job-detail-client',
  templateUrl: './job-detail-client.component.html',
  styleUrls: ['./job-detail-client.component.css']
})
export class JobDetailClientComponent implements OnInit {
  @Input() job;
  constructor() { }

  ngOnInit(): void {
  }

}
