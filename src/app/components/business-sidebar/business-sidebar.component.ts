import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-sidebar',
  templateUrl: './business-sidebar.component.html',
  styleUrls: ['./business-sidebar.component.css']
})
export class BusinessSidebarComponent implements OnInit {
  collapseShow = 'hidden';

  constructor() { }

  ngOnInit(): void {
  }
toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
}
