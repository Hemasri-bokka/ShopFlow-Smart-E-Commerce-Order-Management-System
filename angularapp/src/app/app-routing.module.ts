import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdminviewproductComponent } from './components/adminviewproduct/adminviewproduct.component';
import { AdminviewordersComponent } from './components/adminvieworders/adminvieworders.component';
import { AdminviewuserdetailsComponent } from './components/adminviewuserdetails/adminviewuserdetails.component';
import { UserviewproductComponent } from './components/userviewproduct/userviewproduct.component';
import { UseraddcartComponent } from './components/useraddcart/useraddcart.component';
import { UserviewordersComponent } from './components/uservieworders/uservieworders.component';
import { UseraddfeedbackComponent } from './components/useraddfeedback/useraddfeedback.component';
import { UserviewfeedbackComponent } from './components/userviewfeedback/userviewfeedback.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthguardComponent } from './components/authguard/authguard.component';
import { AdminaddproductComponent } from './components/adminaddproduct/adminaddproduct.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '**', component: ErrorComponent },

  { path: 'admin/products', component: AdminviewproductComponent },
  { path: 'admin/orders', component: AdminviewordersComponent},
  { path: 'admin/users', component: AdminviewuserdetailsComponent},
  {path:'admin/products', component: AdminaddproductComponent},
  // {path: 'admin/view-feedback', component: AdminView}

  { path: 'user/products', component: UserviewproductComponent},
  { path: 'user/cart', component: UseraddcartComponent },
  { path: 'user/orders', component: UserviewordersComponent },
  { path: 'user/feedback', component: UseraddfeedbackComponent },
  { path: 'user/view-feedback', component: UserviewfeedbackComponent }

  // Admin routes
  // { path: 'admin/products', component: AdminviewproductComponent, canActivate: [AuthguardComponent] },
  // { path: 'admin/orders', component: AdminviewordersComponent, canActivate: [AuthguardComponent] },
  // { path: 'admin/users', component: AdminviewuserdetailsComponent, canActivate: [AuthguardComponent] },

  // User routes
  // { path: 'user/products', component: UserviewproductComponent, canActivate: [AuthguardComponent] },
  // { path: 'user/cart', component: UseraddcartComponent, canActivate: [AuthguardComponent] },
  // { path: 'user/orders', component: UserviewordersComponent, canActivate: [AuthguardComponent] },
  // { path: 'user/feedback', component: UseraddfeedbackComponent, canActivate: [AuthguardComponent] },
  // { path: 'user/view-feedback', component: UserviewfeedbackComponent, canActivate: [AuthguardComponent] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
