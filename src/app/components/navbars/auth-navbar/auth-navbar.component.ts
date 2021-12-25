import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
})
export class AuthNavbarComponent implements OnInit {
  navbarOpen = false;
  tokenExist: any;
  roleFound = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') !== 'null') {
      this.tokenExist = true;
    } else {
      this.tokenExist = false;
    }
    if (localStorage.getItem('data') !== 'null' && JSON.parse(localStorage.getItem('data')).role === 'admin') {
      this.roleFound = 'admin';
    }
  }

  loggingOut() {
    localStorage.setItem('data', 'null');
    localStorage.setItem('token', 'null');
    this.router.navigateByUrl('/auth/login').then(() => {
      window.location.reload();
    });
  }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
