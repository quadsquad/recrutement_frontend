import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  blurStyle: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') === 'null') {
      window.location.href = '/auth/login';
    }
    if (localStorage.getItem('data') && JSON.parse(localStorage.getItem('data')).role !== 'admin') {
      Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'ONLY ACCESSIBLE TO ADMINISTRATORS'
          }).then(() => {
            this.router.navigateByUrl('/');
          });
    }
  }

  applyBlur() {
    if (localStorage.getItem('data') && JSON.parse(localStorage.getItem('data')).role !== 'admin') {
      this.blurStyle = {
        'filter': 'blur(10px)'
      }
    } else {
      this.blurStyle = null;
    }
    return this.blurStyle;
  }
}
