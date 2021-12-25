import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {

  styles: any;
  bgStyles: any;

  applyStyle() {
    if (this.router.url === '/auth/myworldspace') {
      this.styles = {
        overflow: 'hidden'
      };
    } else {
      this.styles = null;
    }
    return this.styles;
  }

  applyBgStyle() {
    if (localStorage.getItem('role') === 'Particular') {
      this.bgStyles = {
        'background-image': 'url(assets/img/Artboard 29.png)',
        'background-attachment': 'fixed',
        'background-position': 'center',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'min-height': '155%',
        overflow: 'hidden',
        margin: '0'
      }
    } else if (localStorage.getItem('role') === 'Business') {
      this.bgStyles = {
        'background-image': 'url(assets/img/Artboard 29.png\')',
        'background-attachment': 'fixed',
        'background-position': 'center',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'min-height': '160%',
        overflow: 'hidden',
        margin: '0'
      }
    } else {
      this.bgStyles = {
        'background-image': 'url(assets/img/Artboard 29.png\')',
        'background-attachment': 'fixed',
        'background-position': 'center',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'min-height': '100%',
        overflow: 'hidden',
        margin: '0'
      }
    }
    return this.bgStyles;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.applyStyle();
    this.applyBgStyle();
    if (this.router.url === '/auth/register') {
      localStorage.setItem('role', null);
    }
    if (localStorage.getItem('data') !== 'null' && JSON.parse(localStorage.getItem('data')).role === 'Business') {
      window.location.href = '/business/dashboard'
    }
    if (localStorage.getItem('data') !== 'null' && JSON.parse(localStorage.getItem('data')).role === 'admin') {
      window.location.href = '/admin/dashboard'
    }
    if (localStorage.getItem('data') !== 'null' && JSON.parse(localStorage.getItem('data')).role === 'Particular') {
      window.location.href = '/'
    }
  }
}
