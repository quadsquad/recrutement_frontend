import { VerifiedAccountComponent } from './views/auth/verified-account/verified-account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// layouts
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';

// admin views
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { MapsComponent } from './views/admin/maps/maps.component';
import { SettingsComponent } from './views/admin/settings/settings.component';

// auth views
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import {AuthRegisterComponent} from './views/auth/auth-register/auth-register.component';

// no layouts views
import { LandingComponent } from './views/landing/landing.component';
import { ProfileComponent } from './views/profile/profile.component';
import {JobsComponent} from './views/admin/jobs/jobs.component';
import {ServicesComponent} from './views/admin/services/services.component';
import {AddServiceComponent} from './views/admin/services/add-service/add-service.component';
import {JobClientComponent} from './job-client/job-client.component';

import {ProfileAdminComponent} from './views/admin/profile-admin/profile-admin.component';
import {CandidaciesComponent} from './views/admin/candidacies/candidacies.component';
import {ContactListComponent} from './views/admin/contact-list/contact-list.component';
import {BusinessComponent} from './layouts/business/business.component';
import {BusinessDashboardComponent} from './views/business/business-dashboard/business-dashboard.component';
import {JobsBusinessComponent} from './views/business/jobs-business/jobs-business.component';
import {BusinessCandidatesComponent} from './views/business/business-candidates/business-candidates.component';
import {BusinessReportsComponent} from './views/business/business-reports/business-reports.component';
import {ProfileBusinessComponent} from './views/business/profile-business/profile-business.component';
import {MessagesBusinessComponent} from './views/business/messages-business/messages-business.component';
import {MessagesAdminComponent} from './views/admin/messages-admin/messages-admin.component';


const routes: Routes = [

  // business views
  {
    path : 'business',
    component: BusinessComponent,
    children : [
      { path: 'dashboard', component: BusinessDashboardComponent},
      { path: 'jobs', component: JobsBusinessComponent},
      { path: 'candidates', component: BusinessCandidatesComponent},
      { path: 'reports', component: BusinessReportsComponent},
      { path: 'profile', component: ProfileBusinessComponent},
      { path: 'messages', component: MessagesBusinessComponent},
    ]
  },

  // admin views
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'recruiters', component: SettingsComponent },
      { path: 'particulars', component: MapsComponent },
      { path: 'jobs', component : JobsComponent },
      { path: 'candidacies', component : CandidaciesComponent},
      { path: 'services', component : ServicesComponent  },
      { path: 'add-service', component : AddServiceComponent  },
      { path: 'deleteS/:id', component: ServicesComponent },
      { path: 'profile', component: ProfileAdminComponent },
      { path: 'feedback', component: ContactListComponent },
      { path: 'messages', component: MessagesAdminComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  // auth views
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'myworldspace', component: AuthRegisterComponent},
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ],
  },
  // no layout views
  { path: 'profile', component: ProfileComponent },
  { path: '', component: LandingComponent },
  { path: 'myworldforjobs', component: JobClientComponent },
  { path: 'verified', component: VerifiedAccountComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
