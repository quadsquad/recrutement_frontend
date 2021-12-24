import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  blurStyle: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') === 'null') {
      window.location.href = '/auth/login';
    }
    if (localStorage.getItem('data') && JSON.parse(localStorage.getItem('data')).role !== 'Particular') {
      Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'ONLY ACCESSIBLE TO PARTICULARS'
          }).then(() => {
            this.router.navigateByUrl('/');
          });
    }
  }

  applyBlur() {
    if (localStorage.getItem('data') && JSON.parse(localStorage.getItem('data')).role !== 'Particular') {
      this.blurStyle = {
        'filter': 'blur(10px)'
      }
    } else {
      this.blurStyle = null;
    }
    return this.blurStyle;
  }
}
