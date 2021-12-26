import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Ng2TelInputModule} from 'ng2-tel-input';

import { AgGridModule } from 'ag-grid-angular';
// @ts-ignore
import { UcWidgetModule } from 'ngx-uploadcare-widget';


import { AppComponent } from './app.component';
// layouts
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
// admin views
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { MapsComponent } from './views/admin/maps/maps.component';
import { SettingsComponent } from './views/admin/settings/settings.component';
import { TablesComponent } from './views/admin/tables/tables.component';
// auth views
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { LoadingComponent } from './views/auth/register/loading';

// no layouts views
import { IndexComponent } from './views/index/index.component';
import { LandingComponent } from './views/landing/landing.component';
import { ProfileComponent } from './views/profile/profile.component';
// components for views and layouts
import { AdminNavbarComponent } from './components/navbars/admin-navbar/admin-navbar.component';
import { AuthNavbarComponent } from './components/navbars/auth-navbar/auth-navbar.component';
import { CardBarChartComponent } from './components/cards/card-bar-chart/card-bar-chart.component';
import { CardLineChartComponent } from './components/cards/card-line-chart/card-line-chart.component';
import { CardPageVisitsComponent } from './components/cards/card-page-visits/card-page-visits.component';
import { CardProfileComponent } from './components/cards/card-profile/card-profile.component';
import { CardSettingsComponent } from './components/cards/card-settings/card-settings.component';
import { CardSocialTrafficComponent } from './components/cards/card-social-traffic/card-social-traffic.component';
import { CardStatsComponent } from './components/cards/card-stats/card-stats.component';
import { CardTableComponent } from './components/cards/card-table/card-table.component';
import { FooterAdminComponent } from './components/footers/footer-admin/footer-admin.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { FooterSmallComponent } from './components/footers/footer-small/footer-small.component';
import { HeaderStatsComponent } from './components/headers/header-stats/header-stats.component';
import { IndexNavbarComponent } from './components/navbars/index-navbar/index-navbar.component';
import { MapExampleComponent } from './components/maps/map-example/map-example.component';
import { IndexDropdownComponent } from './components/dropdowns/index-dropdown/index-dropdown.component';
import { TableDropdownComponent } from './components/dropdowns/table-dropdown/table-dropdown.component';
import { PagesDropdownComponent } from './components/dropdowns/pages-dropdown/pages-dropdown.component';
import { NotificationDropdownComponent } from './components/dropdowns/notification-dropdown/notification-dropdown.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserDropdownComponent } from './components/dropdowns/user-dropdown/user-dropdown.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BasicAuthHtppInterceptorServiceService} from './services/basic-auth-htpp-interceptor-service.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JobsComponent} from './views/admin/jobs/jobs.component';
import { ServicesComponent } from './views/admin/services/services.component';
import { AddServiceComponent } from './views/admin/services/add-service/add-service.component';
import { AuthRegisterComponent } from './views/auth/auth-register/auth-register.component';
import { JobClientComponent } from './job-client/job-client.component';
import { JobDetailClientComponent } from './job-detail-client/job-detail-client.component';
import { UserNavbarComponent } from './components/navbars/user-navbar/user-navbar.component';
import { RecruiterJobsComponent } from './views/admin/recruiter-jobs/recruiter-jobs.component';
import { ParticularSkillsComponent } from './views/admin/particular-skills/particular-skills.component';
import { ProfileAdminComponent } from './views/admin/profile-admin/profile-admin.component';
import { CandidaciesComponent } from './views/admin/candidacies/candidacies.component';
import { ContactListComponent } from './views/admin/contact-list/contact-list.component';

import { VerifiedAccountComponent } from './views/auth/verified-account/verified-account.component';
import {SkillsUserComponent} from './views/skills-user/skills-user.component';
import { BusinessComponent } from './layouts/business/business.component';
import { BusinessNavbarComponent } from './components/navbars/business-navbar/business-navbar.component';
import { BusinessSidebarComponent } from './components/business-sidebar/business-sidebar.component';
import { BusinessDashboardComponent } from './views/business/business-dashboard/business-dashboard.component';
import { ParticularCvRegisterComponent } from './views/auth/register/particular-cv-register/particular-cv-register.component';
import { ExperienceUserComponent } from './views/experience-user/experience-user.component';
import { HeaderStatBusinessComponent } from './components/headers/header-stat-business/header-stat-business.component';
import { CarLineChartBusinessJobsComponent } from './components/cards/car-line-chart-business-jobs/car-line-chart-business-jobs.component';
import { JobsBusinessComponent } from './views/business/jobs-business/jobs-business.component';
import { BusinessCandidatesComponent } from './views/business/business-candidates/business-candidates.component';
import { BusinessReportsComponent } from './views/business/business-reports/business-reports.component';
import { ProfileBusinessComponent } from './views/business/profile-business/profile-business.component';
import { MessagesBusinessComponent } from './views/business/messages-business/messages-business.component';
import { MessagesAdminComponent } from './views/admin/messages-admin/messages-admin.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { ApplyforjobComponent } from './applyforjob/applyforjob.component';



// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    IndexDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardSocialTrafficComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatsComponent,
    MapExampleComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    LoadingComponent,
    IndexComponent,
    LandingComponent,
    ProfileComponent,
    JobsComponent,
    ServicesComponent,
    AddServiceComponent,
    AuthRegisterComponent,
    JobClientComponent,
    JobDetailClientComponent,
    UserNavbarComponent,
    RecruiterJobsComponent,
    ParticularSkillsComponent,
    ProfileAdminComponent,
    CandidaciesComponent,
    ContactListComponent,
    VerifiedAccountComponent,
    SkillsUserComponent,
    BusinessComponent,
    BusinessNavbarComponent,
    BusinessSidebarComponent,
    BusinessDashboardComponent,
    ParticularCvRegisterComponent,
    ExperienceUserComponent,
    HeaderStatBusinessComponent,
    CarLineChartBusinessJobsComponent,
    JobsBusinessComponent,
    BusinessCandidatesComponent,
    BusinessReportsComponent,
    ProfileBusinessComponent,
    MessagesBusinessComponent,
    MessagesAdminComponent,
    NotFoundComponent,
    ApplyforjobComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    OwlModule,
    Ng2TelInputModule,
    ToastrModule.forRoot(),
    OwlModule,
    Ng2SearchPipeModule,
    NgApexchartsModule,
    AgGridModule.withComponents([]),
    Ng2SmartTableModule,

    UcWidgetModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorServiceService, multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
