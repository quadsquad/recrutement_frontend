import {Component, OnInit} from '@angular/core';
import {CandidatureService} from '../services/candidatures/candidature.service';
import Swal from 'sweetalert2';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as filestack from 'filestack-js';


@Component({
  selector: 'app-applyforjob',
  templateUrl: './applyforjob.component.html',
  styleUrls: ['./applyforjob.component.css']
})
export class ApplyforjobComponent implements OnInit {
  client = filestack.init('AwkYSZCVuSQGXHs1JlR6yz');
  options = {
    onUploadDone: (res) => {
      this.FileCV = res.filesUploaded[0].url;
    },
    fromSources: ['local_file_system', 'url', 'googledrive', 'dropbox']
  };
  options1 = {
    onUploadDone: (res) => {
      this.FileLA = res.filesUploaded[0].url;
    },
    fromSources: ['local_file_system', 'url', 'googledrive', 'dropbox']
  };
  application;
  doNotStore: true;
  FileCV = '';
  FileLA = '';
  cvApply: any = '';
  formApplication: FormGroup;
  btnRegisterB: any = false;
  emploicand;
  user;
  constructor(private cu: CandidatureService, private formBuilder: FormBuilder,
              private router: Router, private activatedRoute: ActivatedRoute) {
    this.formApplication = formBuilder.group({
      cv_cand: ['', Validators.required],
      letter_aff_cand: ['', Validators.required],
    })
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

  openPicker(): void {
    this.client.picker(this.options).open();

  }

  openPicker1(): void {
    this.client.picker(this.options1).open();

  }

  get cv_cand() {
    return this.formApplication.get('cv_cand');
  }

   get emploi_cand() {
    return this.formApplication.get('emploi_cand');
  }
  get letter_aff_cand() {
    return this.formApplication.get('letter_aff_cand');
  }

  get f() {
    return this.formApplication.controls;
  }

  save() {
      this.activatedRoute.queryParams.subscribe(params => {
          this.emploicand = this.activatedRoute.snapshot.paramMap.get('id');

    });
       if (localStorage.getItem('data') && JSON.parse(localStorage.getItem('data')).role === 'Particular'){
      this.user=localStorage.getItem('data');
    }
    this.application={
      cv_cand: this.formApplication.value.cv_cand,
      letter_aff_cand: this.formApplication.value.letter_aff_cand,
      emploi_cand: this.emploicand,
      user_model: localStorage.getItem('data')
    }
    this.cu.applyCandidate(this.application, this.emploicand).subscribe(result => {
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
