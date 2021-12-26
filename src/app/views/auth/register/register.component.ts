import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {RegisterService} from '../../../services/register.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { countries } from 'country-flags-svg';
import { City }  from 'country-state-city';
import * as ngTelInput from 'ng2-tel-input';
import 'intl-tel-input';
import 'intl-tel-input/build/js/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers : [RegisterService]
})
export class RegisterComponent implements OnInit {

  constructor(private registerService : RegisterService ,private formBuilder: FormBuilder,
              private router: Router, private toastr: ToastrService
  ) {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.rb_form = formBuilder.group({
      business_name: ['', [Validators.required,Validators.minLength(3)]],
      address:['', [Validators.required,Validators.minLength(6)]],
      country:['',Validators.required],
      city:['', Validators.required],
      email:['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required,Validators.minLength(6)]],
      phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      business_website: ['', [Validators.required, Validators.pattern(reg)]]
    }, {
      validator: RegisterComponent.MustMatch('password', 'confirmPassword')
    });
    this.rp_form = formBuilder.group({
      firstname: ['', [Validators.required,Validators.minLength(3)]],
      lastname: ['', [Validators.required,Validators.minLength(3)]],
      country: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: RegisterComponent.MustMatch('password', 'confirmPassword')
    })
  }

  @Input('ng2TelInputOptions') ng2TelInputOptions: any;
@Output('hasError') hasError: EventEmitter<boolean> = new EventEmitter();
@Output('ng2TelOutput') ng2TelOutput: EventEmitter<any> = new EventEmitter();
@Output('intlTelInputObject') intlTelInputObject: EventEmitter<any> = new EventEmitter();
ngTelInput: any;

  filedataB: any;

  doNotStore: true;

  doNotStoreP: true;

  uuidFileB: any = '';

  uuidFileP: any = '';

  business_logo: any;

  userPicture: any;

hasErr: boolean;

  rb_form: FormGroup;
  rp_form: FormGroup;

  registerBusiness;
  registerParticular;
  step_styles;

  countrySelected: any = '';

  countrySelectedP;

  citySelectedVal;
  citySelectedValP;

  citiesToShow: any = [];

  citiesToShowP: any = [];

  isLoading = false;

  role: any='';
  style: any;

  secondStepColorOne: String='#ffffff';
  secondStepColorTwo: String='#ffffff';

  thirdStepColorOne: String='#ffffff';
  thirdStepColorTwo: String='#ffffff';

  allCountries:any = countries;

  allCountriesP: any = countries;

  selected:any = false;

  selectedCity: any = false;

  selectedP: any = false;

  selectedCityP: any = false;

  createAccBtnStyle: any;

  btnNextPStyle: any;

  btnRegisterB: any = false;

  prefixPhoneB: any = '216';

  validWebsite: any;

  isValidWebsite: any;

  selectCityHiddenB: any;

  selectCityHiddenP: any;

  finishBtn: any = false;

  allUsersP: any = [];

  allUsers: any = [];

  counterRP: any = 0;

  counterRB: any = 0;

  cell1TelInput: any = {
    initialCountry: 'tn',
    autoPlaceholder: 'polite',
    nationalMode :true,
    customPlaceholder(selectedCountryPlaceholder) {
      return selectedCountryPlaceholder;
    }
  }

  finalSelectCountry: any;
  finalSelectCountryP: any;

  inputHidden: any;
  inputHiddenP: any;

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

  onChangeUploadP(e) {
    console.log(e);
  }

  uploadCompletedP(e) {
    if (this.uuidFileP !== '') {
      this.registerService.deleteFile(this.uuidFileP).subscribe(
      response => {
        console.log('FILE DELETED');
        console.log(this.uuidFileP);
      },error => {
          console.log('COULD NOT DELETE FILE');
        }
    )
    }
      this.userPicture = e.cdnUrl;
    console.log(this.userPicture);
    console.log(e);
    this.uuidFileP = e.uuid;
  }

  OnChangeUploadB(e) {
    console.log(e);
  }
  uploadCompleted(e) {
    if (this.uuidFileB !== '') {
      this.registerService.deleteFile(this.uuidFileB).subscribe(
      response => {
        console.log('FILE DELETED');
        console.log(this.uuidFileB);
      },error => {
          console.log('COULD NOT DELETE FILE');
        }
    )
    }
      this.business_logo = e.cdnUrl;
    console.log(this.business_logo);
    console.log(e);
    this.uuidFileB = e.uuid;
  }

  @HostListener('blur') onBlur() {
    const isInputValid:boolean = this.isInputValid();
    if (isInputValid) {
        const telOutput = this.ngTelInput.intlTelInput('getNumber');
        this.hasError.emit(isInputValid);
        this.ng2TelOutput.emit(telOutput);
    } else
    {
        this.hasError.emit(isInputValid);
    }
  }

  isInputValid(): boolean {
    return this.ngTelInput.intlTelInput('isValidNumber') ? true : false;
}
 onError(obj) {
        this.hasErr = obj;
        console.log(this.hasErr);
    }

  followInputUrl(e) {
    if (!e.hasError('pattern') && !e.hasError('required')) {
      this.registerService.validateUrl(e.value).subscribe(
      response => {
        this.isValidWebsite = true;
        this.validWebsite = '';
      },error => {
        this.validWebsite = 'URL YOU ENTERED IS INVALID';
        this.isValidWebsite = false;
        }
    )
    }
  }

  onCountryChange(event)
  {
    this.prefixPhoneB = event.dialCode;
    console.log(event);
  }

  select_country(deviceValue) {
    // console.log(deviceValue);
    this.citiesToShow = [];
    this.selected = true;
    this.finalSelectCountry = true;
    this.countrySelected = deviceValue;
    for (let i = 0; i<City.getAllCities().length; i++) {
      if (City.getAllCities()[i].countryCode === this.countrySelected) {
        this.citiesToShow.push(City.getAllCities()[i].name);
      }
    }
    if (this.citiesToShow.length === 0) {
      this.selectCityHiddenB = true;
      this.toastr.error('WE COULD NOT FIND CITIES OF THE SELECTED COUNTRY');
      this.toastr.info('PLEASE WRITE YOUR CITY');
      if (this.rb_form.controls.city) {
        this.rb_form.controls.city.reset();
        this.inputHidden = false;
      }
      this.finalSelectCountry = false;
    } else {
      // this.reversedCitites = this.citiesToShow.reverse();
      this.selectCityHiddenB = false;
      this.finalSelectCountry = true;
      this.rb_form.controls.city.reset();
    }
  }

  select_countryP(deviceValue) {
    // console.log(deviceValue);
    this.citiesToShowP = [];
    this.selectedP = true;
    this.finalSelectCountryP = true;
    this.countrySelectedP = deviceValue;
    for (let i = 0; i<City.getAllCities().length; i++) {
      if (City.getAllCities()[i].countryCode === this.countrySelectedP) {
        this.citiesToShowP.push(City.getAllCities()[i].name);
      }
    }
    if (this.citiesToShowP.length === 0) {
      this.selectCityHiddenP = true;
      this.toastr.error('WE COULD NOT FIND CITIES OF THE SELECTED COUNTRY');
      this.toastr.info('PLEASE WRITE YOUR CITY');
      if (this.rp_form.controls.city) {
        this.rp_form.controls.city.reset();
        this.inputHiddenP = false;
      }
      this.finalSelectCountryP = false;
    } else {
      // this.reversedCitites = this.citiesToShow.reverse();
      this.selectCityHiddenP = false;
      this.finalSelectCountryP = true;
      this.rp_form.controls.city.reset();
    }
  }

  select_city(cityValue) {
    this.selectedCity = true;
    this.citySelectedVal = cityValue;
    this.inputHidden = true;
  }

  select_cityP(cityValue) {
    this.selectedCityP = true;
    this.citySelectedValP = cityValue;
    this.inputHiddenP = true;
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

      localStorage.removeItem('role');
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
  }
  getBackToAuthenticate() {
    this.router.navigate(['/auth/myworldspace']).then(() => {

      localStorage.setItem('role', null);
      window.scroll(0,0);
    })
  }

  btnNextParticularStyle() {
    if (this.rp_form.invalid) {
      this.btnNextPStyle = {
        cursor: 'default',
        'pointer-events': 'none',
        opacity: '0.5'
      }
    } else {
      this.btnNextPStyle = {
        cursor: 'pointer',
        opacity: '1'
      }
    }
    if (!this.userPicture) {
      this.btnNextPStyle = {
        cursor: 'default',
        'pointer-events': 'none',
        opacity: '0.5'
      }
    }
    return this.btnNextPStyle;
  }

  btnCreateAccountStyle() {
    if (this.rb_form.invalid) {
      this.createAccBtnStyle = {
        'border-radius': '25px',
        border: '1px solid  #ffffff',
        'letter-spacing': '5px',
        cursor: 'default',
        'pointer-events': 'none',
        opacity: '0.5'
      }
    } else {
      this.createAccBtnStyle = {
        'border-radius': '25px',
        border: '1px solid  #ffffff',
        'letter-spacing': '5px',
        cursor: 'pointer'
      }
    }
    if (this.btnRegisterB === true) {
      this.createAccBtnStyle = {
        'border-radius': '25px',
        border: '1px solid  #ffffff',
        'letter-spacing': '5px',
        cursor: 'default',
        'pointer-events': 'none',
        opacity: '0.5'
      }
    }
    if (!this.hasErr) {
      this.createAccBtnStyle = {
        'border-radius': '25px',
        border: '1px solid  #ffffff',
        'letter-spacing': '5px',
        cursor: 'default',
        'pointer-events': 'none',
        opacity: '0.5'
      }
    }

    if (this.isValidWebsite === false) {
      this.createAccBtnStyle = {
        'border-radius': '25px',
        border: '1px solid  #ffffff',
        'letter-spacing': '5px',
        cursor: 'default',
        'pointer-events': 'none',
        opacity: '0.5'
      }
    }
    if (!this.business_logo) {
      this.createAccBtnStyle = {
        'border-radius': '25px',
        border: '1px solid  #ffffff',
        'letter-spacing': '5px',
        cursor: 'default',
        'pointer-events': 'none',
        opacity: '0.5'
      }
    }
    return this.createAccBtnStyle;
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
      localStorage.setItem('role', this.role);
    }
  }

  confirmRegisterP(): void {
    this.isLoading = true;
    setTimeout( () => this.isLoading = false, 4500 );
    this.registerParticular = {
      role : 'Particular',
      firstname : this.rp_form.value.firstname,
      lastname : this.rp_form.value.lastname,
      country : this.rp_form.value.country,
      city : this.rp_form.value.city,
      email : this.rp_form.value.email,
      password : this.rp_form.value.password,
      userPicture: this.userPicture
    }
    for (let i = 0; i<this.allCountriesP.length; i++) {
      if (this.registerParticular.country === this.allCountriesP[i].iso2) {
        this.registerParticular.country = this.allCountriesP[i].name;
      }
    }
    this.registerService.validateEmail(this.registerParticular.email).subscribe(
      response => {
        window.scroll(0,0);
        this.thirdStepColorOne = '#FF8856';
        this.thirdStepColorTwo = '#FF6555';
        localStorage.setItem('ParticularInfo', JSON.stringify(this.registerParticular));
        this.toastr.success('DATA HAS BEEN SAVED');
      },error => {
          this.toastr.error('EMAIL YOU ENTERED IS INVALID');
        }
    )

  }

  ngOnInit() {

    localStorage.setItem('role', null);

    if (this.secondStepColorOne === '#ffffff') {
      window.scrollTo(0,0);
    }

    localStorage.setItem('ParticularInfo', null);

    this.registerService.getAllUsers().subscribe((res : [])=>{
      this.allUsersP=res
    }, (err)=>{
      console.log(err);
    });

    this.registerService.getAllUsers().subscribe((res : [])=>{
      this.allUsers=res
    }, (err)=>{
      console.log(err);
    });

    this.counterRP = 0;
    this.counterRB = 0;

  }

  registerP_Form(): void {
    this.isLoading = true;
    setTimeout( () => this.isLoading = false, 4500 );
    for (let i = 0; i<this.allCountriesP.length; i++) {
      if (this.registerParticular.country === this.allCountriesP[i].iso2) {
        this.registerParticular.country = this.allCountriesP[i].name;
      }
    }
    for (let i = 0; i<this.allUsersP.length; i++) {
            if (this.allUsersP[i].email === this.registerParticular.email && this.allUsersP.length > 0) {
                this.counterRP = 1;
            }
          }
    if (this.counterRP === 1) {
            this.toastr.error('PARTICULAR ALREADY REGISTERED WITH THIS EMAIL');
            this.counterRP = 0;
          } else {
          this.registerService.register(this.registerParticular)
      .subscribe(
        res => {
            this.finishBtn = true;
          Swal.fire({
            icon: 'success',
            title: 'SUCCESS',
            text: 'CHECK OUT YOUR MAIL BOX TO COMPLETE REGISTRATION'
          }).then(() => {
            this.router.navigateByUrl('/auth/login');
            localStorage.removeItem('role');
          });
          this.rp_form.reset();
          this.registerService.storeFile(this.uuidFileP).subscribe(
            res => {
              console.log('IMAGE STORED SUCCESSFULLY');
            }, error => {
              console.log(error);
            }
          )
          localStorage.removeItem('ParticularInfo');

        }, error => {
          console.log(error);
          this.finishBtn = false;
        }
      )
    }
  }


  registerB_Form(): void {
    this.isLoading = true;
    setTimeout( () => this.isLoading = false, 4500 );
    if (!this.prefixPhoneB) {
      this.prefixPhoneB = '216';
    }
    this.registerBusiness = {
      role : 'Business',
      business_name : this.rb_form.value.business_name,
      business_website : this.rb_form.value.business_website,
      email : this.rb_form.value.email,
      address : this.rb_form.value.address,
      country : this.rb_form.value.country,
      city : this.rb_form.value.city,
      phonenumber : this.prefixPhoneB+''+this.rb_form.value.phonenumber,
      password : this.rb_form.value.password,
      business_logo: this.business_logo
    };

    for (let i = 0; i<this.allCountries.length; i++) {
      if (this.registerBusiness.country === this.allCountries[i].iso2) {
        this.registerBusiness.country = this.allCountries[i].name;
      }
    }
    for (let i = 0; i<this.allUsers.length; i++) {
            if (this.allUsers[i].email === this.registerBusiness.email && this.allUsers.length > 0) {
                this.counterRB = 1;
            }
            if (this.allUsers[i].business_name === this.registerBusiness.business_name && this.allUsers.length > 0) {
              this.counterRB = 1;
            }
            if (this.allUsers[i].business_website === this.registerBusiness.business_website && this.allUsers.length > 0) {
              this.counterRB = 1;
            }
          }
    if (this.counterRB === 1) {
            this.toastr.error('THIS BUSINESS IS ALREADY REGISTERED');
            this.counterRB = 0;
          } else {
      this.registerService.validateEmail(this.registerBusiness.email).subscribe(
      response => {
        this.registerService.validatePhone(this.registerBusiness.phonenumber).subscribe(
          resphone => {
            this.registerService.register(this.registerBusiness)
      .subscribe(
        res => {
          this.btnRegisterB = true;
          Swal.fire({
            icon: 'success',
            title: 'SUCCESS',
            text: 'CHECK OUT YOUR MAIL BOX TO COMPLETE REGISTRATION'
          }).then(() => {
            this.router.navigateByUrl('/auth/login');

            localStorage.removeItem('role');
          });
          this.rb_form.reset();
          this.registerService.storeFile(this.uuidFileB).subscribe(
            res => {
              console.log('IMAGE STORED SUCCESSFULLY');
            }, error => {
              console.log(error);
            }
          )
        }, error => {
          console.log(error);
        }
      )
          },error => {
          this.toastr.error('CANNOT REGISTER DUE TO NOT EXISTANT PHONE NUMBER');
          this.btnRegisterB = false;
        }
        )
      },error => {
          this.toastr.error('CANNOT REGISTER DUE TO INVALID EMAIL');
          this.btnRegisterB = false;
        }
    )
    }
  }
}
