import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  collapseShow = 'hidden';
  constructor(private router: Router) {}
  public getToken(): string {
    return sessionStorage.getItem('token');
  }
  ngOnInit() {}
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
  adminLoggingOut(): void {
    localStorage.setItem('data', 'null');
    localStorage.setItem('token', 'null');
    this.router.navigateByUrl('/auth/login').then(() => {
      window.location.reload();
    });
  }
}
