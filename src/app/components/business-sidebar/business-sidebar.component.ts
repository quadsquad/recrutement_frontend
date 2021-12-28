import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-business-sidebar',
  templateUrl: './business-sidebar.component.html',
  styleUrls: ['./business-sidebar.component.css']
})
export class BusinessSidebarComponent implements OnInit {
  collapseShow = 'hidden';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }

  businessLoggingOut() {
    localStorage.setItem('data', 'null');
    localStorage.setItem('token', 'null');
    this.router.navigateByUrl('/auth/login');
  }
}
