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
        'overflow': 'hidden'
      };
    } else {
      this.styles = null;
    }
    return this.styles;
  }

  applyBgStyle() {
    if (localStorage.getItem("role") !== "null") {
      this.bgStyles = {
        'background-image': 'url(assets/img/Artboard 29.png)',
        'background-attachment': 'fixed',
        'background-position': 'center',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'min-height': '150%',
        'overflow': 'hidden',
        'margin': '0'
      }
    } else {
      this.bgStyles = {
        'background-image': "url(assets/img/Artboard 29.png')",
        'background-attachment': 'fixed',
        'background-position': 'center',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'min-height': '100%',
        'overflow': 'hidden',
        'margin': '0'
      }
    }
    return this.bgStyles;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.applyStyle();
    this.applyBgStyle();
  }
}
