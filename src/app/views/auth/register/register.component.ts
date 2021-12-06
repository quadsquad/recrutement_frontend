import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {RegisterService} from '../../../services/register.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { countries } from "country-flags-svg";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers : [RegisterService]
})
export class RegisterComponent implements OnInit {

  rb_form: FormGroup;

  constructor(private registerService : RegisterService ,private formBuilder: FormBuilder,
              private router: Router, private toastr: ToastrService
  ) {
    this.rb_form = formBuilder.group({
      business_name: ['', Validators.required],
      address:['', Validators.required],
      country:['',Validators.required],
      city:['', Validators.required],
      email:['',[Validators.required]],
      password : ['',[Validators.required,Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phonenumber: ['', Validators.required],
      business_website: ['', Validators.required]

    }, {
      validator: RegisterComponent.MustMatch('password', 'confirmPassword')
    });
  }
  
  registerBusiness;
  step_styles;

  role: any='';
  style: any;

  secondStepColorOne: String='#ffffff';
  secondStepColorTwo: String='#ffffff';

  thirdStepColorOne: String='#ffffff';
  thirdStepColorTwo: String='#ffffff';

  public roleChoosed ='';

  static validUsername(fc: FormControl) {
    if (fc.value.toLowerCase() === 'abc123' || fc.value.toLowerCase() === '123abc') {
      return ({validUsername: true});
    } else {
      return null;
    }
  }

 static  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  allCountries:any = countries;

  selected:any = false;

  cell1TelInput: any = {
    initialCountry: 'tn', 
    autoPlaceholder: 'polite',
    nationalMode :true,
    customPlaceholder: function(selectedCountryPlaceholder) {
      return selectedCountryPlaceholder;
    }
  }

  select_country(deviceValue) {
    console.log(deviceValue);
    this.selected = true;
  }

  applyStepStyles() {
    if (this.role === 'Particular') {
      this.step_styles = {
        'margin-left': 'auto',
        'margin-right': '14px',
        'margin-top': '-35px'
      }
    } else {
      this.step_styles = {
        'margin-left': 'auto',
        'margin-right': '0px',
        'margin-top': '-35px'
      }
    }
    return this.step_styles;
  }

  applyStyles() {
    const styles = {
      background: `linear-gradient(${this.secondStepColorOne}, ${this.secondStepColorTwo})`,
      border: '3px solid white',
      width: '22px',
      height: '22px'
    };
    return styles;
  }

  applyStylesThree() {
    const styles = {
      background: `linear-gradient(${this.thirdStepColorOne}, ${this.thirdStepColorTwo})`,
      border: '3px solid white',
      width: '22px',
      height: '22px'
    };
    return styles;
  }
  goToHomepage() {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
      localStorage.setItem('role', null);
    })
  }
  getBack() {
    this.role = '';
    this.secondStepColorOne = '#ffffff';
    this.secondStepColorTwo = '#ffffff';
    window.scroll(0,0);
    localStorage.setItem('role', null);
  }

  getBackThree() {
    this.thirdStepColorOne = '#ffffff';
    this.thirdStepColorTwo = '#ffffff';
    window.scroll(0,0);
    localStorage.setItem('role', null);
  }
  getBackToAuthenticate() {
    this.router.navigate(['/auth/myworldspace']).then(() => {
      window.location.reload();
      window.scroll(0,0);
    })
  }

  changeValueBuisness(): void {
    this.role = 'Business';
  }

  changeValueParticular(): void {
    this.role = 'Particular';
  }

  confirmRole(): void {
    if (this.role === '') {
      this.toastr.error('Please choose a role before you proceed');
    } else {
      this.secondStepColorOne = '#FF8856';
      this.secondStepColorTwo = '#FF6555';
      // tslint:disable-next-line:only-arrow-functions
      localStorage.setItem("role", this.role);
    }
  }

  confirmRegisterP(): void {
    this.thirdStepColorOne = '#FF8856';
    this.thirdStepColorTwo = '#FF6555';
    window.scroll(0,0);
  }

  ngOnInit() {

    localStorage.setItem("role", null);

    if (this.secondStepColorOne === '#ffffff') {
      window.scrollTo(0,0);
    }

  }


  registerB_Form(): void {
    this.registerBusiness = {
      role : "Business",
      business_name : this.rb_form.value.business_name,
      business_website : this.rb_form.value.business_website,
      email : this.rb_form.value.email,
      address : this.rb_form.value.address,
      country : this.rb_form.value.country,
      city : this.rb_form.value.city,
      phonenumber : this.rb_form.value.phonenumber,
      password : this.rb_form.value.password
    };
    this.registerService.register(this.registerBusiness)
      .subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Please Check Out Your Mail Box To Complete Registration'
          }).then(() => {
            window.location.reload();
            this.router.navigateByUrl('/auth/login');
          });
          
        }, error => {
          console.log(error);
        }
      )
  }



}