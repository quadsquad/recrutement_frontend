import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
})
export class BusinessComponent implements OnInit {
  blurStyle: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') === 'null') {
      window.location.href = '/auth/login';
    }
    if (localStorage.getItem('data') && JSON.parse(localStorage.getItem('data')).role !== 'Business') {
      Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'ONLY ACCESSIBLE TO ENTERPRISES'
          }).then(() => {
            this.router.navigateByUrl('/');
          });
    }
  }
  applyBlur() {
    if (localStorage.getItem('data') && JSON.parse(localStorage.getItem('data')).role !== 'Business') {
      this.blurStyle = {
        'filter': 'blur(10px)'
      }
    } else {
      this.blurStyle = null;
    }
    return this.blurStyle;
  }

}
