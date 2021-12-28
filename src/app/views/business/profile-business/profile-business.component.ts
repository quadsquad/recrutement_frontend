import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import { countries } from 'country-flags-svg';
import { City }  from 'country-state-city';
import { ToastrService } from 'ngx-toastr';
import * as ngTelInput from 'ng2-tel-input';
import 'intl-tel-input';
import 'intl-tel-input/build/js/utils';
import Swal from 'sweetalert2';
import {BusinessServiceService} from '../../../services/business/business-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-business',
  templateUrl: './profile-business.component.html',
  styleUrls: ['./profile-business.component.css']
})
export class ProfileBusinessComponent implements OnInit {

  @Input('ng2TelInputOptions') ng2TelInputOptions: any;
@Output('hasError') hasError: EventEmitter<boolean> = new EventEmitter();
@Output('ng2TelOutput') ng2TelOutput: EventEmitter<any> = new EventEmitter();
@Output('intlTelInputObject') intlTelInputObject: EventEmitter<any> = new EventEmitter();
ngTelInput: any;

  business_id = '';
  business_name = '';
  email = '';
  phonenumber = '';
  address = '';
  business_website = '';
  business_logo = '';
  business_country = '';
  business_city = '';
  business_countryIso = '';
  business_cc = '';
  cell1TelInput: any;

  business_countryCode = '';
  newCountryIso = '';
  newCountryName = '';
  codeCountryUpdated = '';
  allCountries: any = [];
  citiesToShow: any = [];
  countrySelected: any = '';
  citySelectedVal: any;
  hideSelectedCountry: any = false;
  selectedCityHidden: any = false;
  inputHidden: any;
  inputCity: any = '';
  hasErr: boolean;
  prefixPhoneB: any = '216';
  updateBusiness;
  allUsers: any = [];
  counterRB: any = 0;
  isLoading = false;
  scBtnState = true;
  pointerEvents = 'none';
  pointerEventsBLogo = 'auto';
  opacityBLogo = 1;
  opacity = 0.5;
  uuidFile: any = '';
  newUploadedLogo = '';
  existedUUIDP1 = '';
  existedUUID = '';

  constructor(private businessService: BusinessServiceService, private router: Router,
              private toastr: ToastrService) { }

  OnChangeUpload(e) {
    console.log(e);
    this.isLoading = true;
     setTimeout( () => this.isLoading = false, 4000 );
  }
  uploadCompleted(e) {
    if (e.cdnUrl) {
      this.pointerEventsBLogo = 'none';
            this.opacityBLogo = 0.5;
    }
      this.newUploadedLogo = e.cdnUrl;
    console.log(this.newUploadedLogo);
    console.log(e);
    this.uuidFile = e.uuid;
    this.updateBusiness = {
      id : JSON.parse(localStorage.getItem('data')).id,
      role : 'Business',
      business_name : JSON.parse(localStorage.getItem('data')).business_name,
      business_website : JSON.parse(localStorage.getItem('data')).business_website,
      email : JSON.parse(localStorage.getItem('data')).email,
      address : JSON.parse(localStorage.getItem('data')).address,
      country : JSON.parse(localStorage.getItem('data')).country,
      codeCountry : JSON.parse(localStorage.getItem('data')).codeCountry,
      countryIso : JSON.parse(localStorage.getItem('data')).countryIso,
      business_logo : e.cdnUrl,
      city : JSON.parse(localStorage.getItem('data')).city,
      phonenumber : JSON.parse(localStorage.getItem('data')).phonenumber,
      enabled : true
    }
    this.businessService.storeFile(this.uuidFile).subscribe(
            res => {
              console.log('IMAGE STORED SUCCESSFULLY');
              this.businessService.deleteFile(this.existedUUID).subscribe(
      response => {
        console.log('FILE DELETED');
      },error => {
          console.log('COULD NOT DELETE FILE');
        }
    )
            }, error => {
              console.log(error);
            }
          )

    this.businessService.updateBusinessLogo(this.updateBusiness, this.business_id).subscribe(
          res => {
            console.log(res);
          }, error => {
            console.log('BUSINESS LOGO UPDATED');
            localStorage.setItem('data', JSON.stringify(this.updateBusiness));
            this.toastr.info('RELOADING PAGE');
            setTimeout(() => {window.location.reload()}, 2000);
          }
        )
  }

  changeBusinessName(event: any) {
    if (event.target.value === JSON.parse(localStorage.getItem('data')).business_name || event.target.value === '') {
      this.scBtnState = true;
      this.pointerEvents = 'none';
      this.opacity = 0.5;
    } else {
      this.scBtnState = false;
      this.pointerEvents = 'auto';
      this.opacity = 1;
    }
  }

  changeAddress(event: any) {
    if (event.target.value === JSON.parse(localStorage.getItem('data')).address || event.target.value === '') {
      this.scBtnState = true;
      this.pointerEvents = 'none';
      this.opacity = 0.5;
    } else {
      this.scBtnState = false;
      this.pointerEvents = 'auto';
      this.opacity = 1;
    }
  }

  changeEmail(event: any) {
    if (event.target.value === JSON.parse(localStorage.getItem('data')).email || event.target.value === '') {
      this.scBtnState = true;
      this.pointerEvents = 'none';
      this.opacity = 0.5;
    } else {
      this.scBtnState = false;
      this.pointerEvents = 'auto';
      this.opacity = 1;
    }
    var emailPattern = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$');
    var isValidEmail = emailPattern.test(event.target.value);
    if (isValidEmail === false && event.target.value !== '') {
      this.scBtnState = true;
      this.pointerEvents = 'none';
      this.opacity = 0.5;
      this.toastr.error('BUSINESS EMAIL HAS AN INVALID FORMAT');
    } else if (isValidEmail === true && event.target.value !== JSON.parse(localStorage.getItem('data')).email
    && event.target.value !== '') {
      this.scBtnState = false;
      this.pointerEvents = 'auto';
      this.opacity = 1;
    }
  }

  changeBusinessWebsite(event: any) {
    if (event.target.value === JSON.parse(localStorage.getItem('data')).business_website || event.target.value === '') {
      this.scBtnState = true;
      this.pointerEvents = 'none';
      this.opacity = 0.5;
    } else {
      this.scBtnState = false;
      this.pointerEvents = 'auto';
      this.opacity = 1;
    }
    var websitePattern = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
    var isValidWebsite = websitePattern.test(event.target.value);
    if (isValidWebsite === false && event.target.value !== '') {
      this.scBtnState = true;
      this.pointerEvents = 'none';
      this.opacity = 0.5;
      this.toastr.error('BUSINESS WEBSITE HAS AN INVALID FORMAT');
    } else if (isValidWebsite === true && event.target.value !== JSON.parse(localStorage.getItem('data')).business_website
    && event.target.value !== '') {
      this.scBtnState = false;
      this.pointerEvents = 'auto';
      this.opacity = 1;
    }
  }

  changeCityInput(event: any) {
    if (event.target.value === JSON.parse(localStorage.getItem('data')).city || event.target.value === '') {
      this.scBtnState = true;
      this.pointerEvents = 'none';
      this.opacity = 0.5;
    } else {
      this.scBtnState = false;
      this.pointerEvents = 'auto';
      this.opacity = 1;
    }
  }

  cancelChanges() {
    let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
  }

  saveChanges(event: any) {
    if (!this.prefixPhoneB) {
      this.prefixPhoneB = '216';
    }
    if (this.newCountryIso === '') {
      this.newCountryIso = JSON.parse(localStorage.getItem('data')).countryIso;
    }
    if (this.codeCountryUpdated === '') {
      this.codeCountryUpdated = JSON.parse(localStorage.getItem('data')).business_cc;
    }
    if (this.countrySelected === '') {
      this.updateBusiness = {
      id : this.business_id,
      role : 'Business',
      business_name : event.target.businessName.value,
      business_website : event.target.businessWebsite.value,
      email : event.target.businessEmail.value,
      address : event.target.businessAddress.value,
      country : this.business_country,
      codeCountry : this.codeCountryUpdated,
      countryIso : this.newCountryIso,
      business_logo : this.business_logo,
      city : event.target.city.value,
      cityInput : event.target.cityInput.value,
      phonenumber : this.prefixPhoneB+''+event.target.phonenumber.value.replace(/\s/g, ''),
      enabled : true
    }
    } else {
      this.updateBusiness = {
      id : this.business_id,
      role : 'Business',
      business_name : event.target.businessName.value,
      business_website : event.target.businessWebsite.value,
      email : event.target.businessEmail.value,
      address : event.target.businessAddress.value,
      country : this.newCountryName,
      codeCountry : this.codeCountryUpdated,
      countryIso : this.newCountryIso,
      business_logo : this.business_logo,
      city : event.target.city.value,
      cityInput : event.target.cityInput.value,
      phonenumber : this.prefixPhoneB+''+event.target.phonenumber.value.replace(/\s/g, ''),
      enabled : true
    }
    }

    this.inputCity = event.target.cityInput.value;
    for (let i = 0; i<this.allCountries.length; i++) {
      if (this.updateBusiness.country === this.allCountries[i].iso2) {
        this.updateBusiness.country = this.allCountries[i].name;
      }
    }
    for (let i = 0; i<this.allUsers.length; i++) {
            if (this.allUsers[i].email === this.updateBusiness.email
              && this.updateBusiness.email !== JSON.parse(localStorage.getItem('data')).email && this.allUsers.length > 0) {
                this.counterRB = 1;
            }
            if (this.allUsers[i].business_name === this.updateBusiness.business_name
              && this.updateBusiness.business_name !== JSON.parse(localStorage.getItem('data')).business_name
              && this.allUsers.length > 0) {
              this.counterRB = 1;
            }
            if (this.allUsers[i].business_website === this.updateBusiness.business_website
              && this.updateBusiness.business_website !== JSON.parse(localStorage.getItem('data')).business_website
              && this.allUsers.length > 0) {
              this.counterRB = 1;
            }
          }
    if (this.counterRB === 1) {
            this.toastr.error('THIS BUSINESS IS ALREADY REGISTERED');
            this.counterRB = 0;
          } else {
      this.businessService.validateEmail(this.updateBusiness.email).subscribe(
      response => {
        this.businessService.validatePhone(this.updateBusiness.phonenumber).subscribe(
          resphone => {
            this.isLoading = true;
            setTimeout( () => this.isLoading = false, 3000 );
            this.businessService.updateBusiness(this.updateBusiness, this.business_id)
      .subscribe(
        res => {
          //this.btnRegisterB = true;
          this.scBtnState = true;
          this.pointerEvents = 'none';
          this.opacity = 0.5;
          Swal.fire({
            icon: 'success',
            title: 'SUCCESS',
            text: 'BUSINESS PROFILE UPDATED SUCCESSFULLY'
          }).then(() => {
            if (this.updateBusiness.email === JSON.parse(localStorage.getItem('data')).email) {
              window.location.reload();
              localStorage.setItem('data', JSON.stringify(this.updateBusiness));
            } else {
              this.toastr.info('LOGGING OUT');
              localStorage.setItem('data', 'null');
              this.router.navigateByUrl('/auth/login').then(() => {
                this.toastr.info('PLEASE LOGIN WITH THE NEW EMAIL');
              });
            }
          });
        }, error => {
          console.log(error);
        }
      )
          },error => {
          this.toastr.error('PROFILE NOT UPDATED DUE TO NOT EXISTANT PHONE NUMBER');
          //this.btnRegisterB = false;
        }
        )
      },error => {
          this.toastr.error('PROFILE NOT UPDATED DUE TO INVALID EMAIL');
          //this.btnRegisterB = false;
        }
    )
    }
  }

  onError(obj) {
        this.hasErr = obj;
        console.log(this.hasErr);
        if (this.hasErr === false) {
      this.scBtnState = true;
      this.pointerEvents = 'none';
      this.opacity = 0.5;
    } else if (this.hasErr === true) {
      this.scBtnState = false;
      this.pointerEvents = 'auto';
      this.opacity = 1;
    }
    }
    onCountryChange(event)
  {
    this.prefixPhoneB = event.dialCode;
    this.newCountryIso = event.iso2;
    console.log(event);
  }

  select_country(deviceValue) {
    this.codeCountryUpdated = deviceValue;
    if (deviceValue === this.business_cc) {
      this.scBtnState = true;
      this.pointerEvents = 'none';
      this.opacity = 0.5;
    } else {
      this.scBtnState = false;
      this.pointerEvents = 'auto';
      this.opacity = 1;
    }
    this.countrySelected = deviceValue;
    for (let i = 0; i<this.allCountries.length; i++) {
      if (this.allCountries[i].iso2 === deviceValue) {
        this.newCountryName = this.allCountries[i].name;
      }
    }
    this.citiesToShow = [];
    for (let i = 0; i<City.getAllCities().length; i++) {
      if (City.getAllCities()[i].countryCode === this.countrySelected
      && City.getAllCities()[i].name !== this.business_city) {
        this.citiesToShow.push(City.getAllCities()[i].name);
      }
    }
    if (this.business_countryCode === deviceValue) {
        this.inputCity = this.business_city;
      } else {
        this.inputCity = '';
      }
    if (this.citiesToShow.length === 0) {
      this.selectedCityHidden = true;
      this.toastr.error('WE COULD NOT FIND CITIES OF THE SELECTED COUNTRY');
      this.toastr.info('PLEASE WRITE YOUR CITY');
      this.inputHidden = false;
    } else {
      this.selectedCityHidden = false;
      this.inputHidden = true;
    }
    if (this.countrySelected !== this.business_countryCode) {
      this.hideSelectedCountry = true;
    } else {
      this.hideSelectedCountry = false;
    }
  }

  select_city(cityValue) {
    this.citySelectedVal = cityValue;
    if (cityValue === this.business_city) {
      this.scBtnState = true;
      this.pointerEvents = 'none';
      this.opacity = 0.5;
    } else {
      this.scBtnState = false;
      this.pointerEvents = 'auto';
      this.opacity = 1;
    }
  }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('data')).role === 'Business') {
      this.business_id = JSON.parse(localStorage.getItem('data')).id;
      this.business_name = JSON.parse(localStorage.getItem('data')).business_name;
      this.email = JSON.parse(localStorage.getItem('data')).email;
      this.phonenumber = JSON.parse(localStorage.getItem('data')).phonenumber;
      this.business_country = JSON.parse(localStorage.getItem('data')).country;
      this.business_city = JSON.parse(localStorage.getItem('data')).city;
      this.address = JSON.parse(localStorage.getItem('data')).address;
      this.business_website = JSON.parse(localStorage.getItem('data')).business_website;
      this.business_countryIso = JSON.parse(localStorage.getItem('data')).countryIso;
      this.business_cc = JSON.parse(localStorage.getItem('data')).codeCountry;
      this.business_logo = JSON.parse(localStorage.getItem('data')).business_logo;
    }
    this.existedUUIDP1 = this.business_logo.replace('https://ucarecdn.com/','');
    this.existedUUID = this.existedUUIDP1.substring(0, this.existedUUIDP1.indexOf('/'));
    console.log(this.existedUUID);
    this.cell1TelInput = {
    initialCountry: this.business_countryIso,
    autoPlaceholder: 'polite',
    nationalMode :true,
    customPlaceholder(selectedCountryPlaceholder) {
      return selectedCountryPlaceholder;
    }
  }

    for (let i = 0; i < countries.length; i++) {
      if (countries[i].name !== this.business_country) {
        this.allCountries.push(countries[i]);
      }
      if (countries[i].name === this.business_country) {
        this.business_countryCode = countries[i].iso2;
      }
    }

    for (let j = 0; j < City.getAllCities().length; j++) {
      if (City.getAllCities()[j].countryCode === this.business_countryCode
        && City.getAllCities()[j].name !== this.business_city) {
        this.citiesToShow.push(City.getAllCities()[j].name);
      }
      if (City.getAllCities()[j].name === this.business_city) {
        this.inputCity = City.getAllCities()[j].name;
      }
    }
    if (this.citiesToShow.length === 0) {
      this.selectedCityHidden = true;
      this.inputHidden = false;
    } else {
      this.inputHidden = true;
      this.selectedCityHidden = false;
    }
    this.businessService.getAllUsers().subscribe((res : [])=>{
      this.allUsers=res
    }, (err)=>{
      console.log(err);
    });
  this.counterRB = 0;
  }

}
