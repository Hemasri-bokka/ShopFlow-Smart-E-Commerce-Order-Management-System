import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { AdminviewproductComponent } from './components/adminviewproduct/adminviewproduct.component';
import { FormsModule } from '@angular/forms';
import { AdminnavbarComponent } from './components/adminnavbar/adminnavbar.component';
import { AdminviewordersComponent } from './components/adminvieworders/adminvieworders.component';
import { AdminviewuserdetailsComponent } from './components/adminviewuserdetails/adminviewuserdetails.component';
import { AuthguardComponent } from './components/authguard/authguard.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UseraddcartComponent } from './components/useraddcart/useraddcart.component';
import { UseraddfeedbackComponent } from './components/useraddfeedback/useraddfeedback.component';
import { UsernavbarComponent } from './components/usernavbar/usernavbar.component';
import { UserviewfeedbackComponent } from './components/userviewfeedback/userviewfeedback.component';
import { UserviewordersComponent } from './components/uservieworders/uservieworders.component';
import { UserviewproductComponent } from './components/userviewproduct/userviewproduct.component';
import { FormsModule } from '@angular/forms';
import { AdminviewfeedbackComponent } from './components/adminviewfeedback/adminviewfeedback.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    AdminviewproductComponent,
    AdminnavbarComponent,
    AdminviewordersComponent,
    AdminviewuserdetailsComponent,
    AuthguardComponent,
    LoginComponent,
    NavbarComponent,
    RegistrationComponent,
    UseraddcartComponent,
    UseraddfeedbackComponent,
    UsernavbarComponent,
    UserviewfeedbackComponent,
    UserviewordersComponent,
    UserviewproductComponent,
    AdminviewfeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
