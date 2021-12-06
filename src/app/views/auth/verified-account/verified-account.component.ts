import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verified-account',
  templateUrl: './verified-account.component.html',
  styleUrls: ['./verified-account.component.css']
})
export class VerifiedAccountComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Your Account Has Been Verified!'
    }).then(() => {
      this.router.navigateByUrl('/auth/login');
    });
  }

}
