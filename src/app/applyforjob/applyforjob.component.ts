import {Component, OnInit} from '@angular/core';
import {CandidatureService} from '../services/candidatures/candidature.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-applyforjob',
  templateUrl: './applyforjob.component.html',
  styleUrls: ['./applyforjob.component.css']
})
export class ApplyforjobComponent implements OnInit {

  application;
  doNotStore: true;
  uuidFileCV: any = '';
  uuidFileLA: any = '';
  cvApply: any = '';
  formApplication: FormGroup;
  btnRegisterB: any = false;
  constructor(private cu: CandidatureService, private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') === 'null') {
      window.location.href = '/auth/login';
    }
    if (localStorage.getItem('data') && JSON.parse(localStorage.getItem('data')).role !== 'Particular') {
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'You have to be logged in to apply for a job.'
      }).then(() => {
        this.router.navigateByUrl('/myworldforjobs');
      });
    }
  }


  OnChangeUploadCV(e) {
    console.log(e);
  }

  uploadCompletedCV(e) {
    if (this.uuidFileCV !== '') {
      this.cu.deleteFile(this.uuidFileCV).subscribe(
        response => {
          console.log('FILE DELETED');
          console.log(this.uuidFileCV);
        }, error => {
          console.log('COULD NOT DELETE FILE');
        }
      )
    }
    this.cvApply = e.cdnUrl;
    console.log(this.cvApply);
    console.log(e);
    this.uuidFileCV = e.uuid;
  }
  OnChangeUploadLA(e) {
    console.log(e);
  }

  uploadCompletedLA(e) {
    if (this.uuidFileCV !== '') {
      this.cu.deleteFile(this.uuidFileCV).subscribe(
        response => {
          console.log('FILE DELETED');
          console.log(this.uuidFileCV);
        }, error => {
          console.log('COULD NOT DELETE FILE');
        }
      )
    }
    this.cvApply = e.cdnUrl;
    console.log(this.cvApply);
    console.log(e);
    this.uuidFileCV = e.uuid;
  }
 save() {
    this.cu.applyCandidate(this.application, this.application.id).subscribe(result => {
          this.cu.storeFile(this.uuidFileCV).subscribe(
            res => {
              console.log('CV STORED SUCCESSFULLY');
            }, error => {
              console.log(error);
            }
          ),
             this.cu.storeFile(this.uuidFileLA).subscribe(
            res => {
              console.log('L.A STORED SUCCESSFULLY');
            }, error => {
              console.log(error);
            }
          )

     Swal.fire({
            icon: 'success',
            title: 'SUCCESS',
            text: 'YOUR APPLICATION HAS BEEN SUCCESSFULLY SENDED!'
          }).then(() => {
            this.router.navigateByUrl('/myworldforjobs');

          });
    },
      (err) => {
        alert('erreur')
      }
    )
  }
}
