import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PhoneListingComponent } from './components/phone-listing/phone-listing.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    LoginComponent, 
    RegistrationComponent, 
    DashboardComponent, 
    PhoneListingComponent, SideBarComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbAlertModule,
    NgbPaginationModule
  ]
})
export class AuthModule { }
