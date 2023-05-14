import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiDataComponent } from './api-data/api-data.component';
import { HeaderComponent } from './header/header.component';
import { SimilarListComponent } from './similar-list/similar-list.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { OtpVerifyComponent } from './users/otp-verify/otp-verify.component'
import {ForgotPasswordComponent} from './users/forgot-password/forgot-password.component'
import {ChangePasswordComponent} from './users/change-password/change-password.component'
import { AuthGuard } from './Guards/auth.guard';
import { LogoutComponent } from './users/logout/logout.component';
import { AboutUsComponent } from './users/about-us/about-us.component';
import { ContactUsComponent } from './users/contact-us/contact-us.component';
import { RoleGuard } from './Guards/role.guard';
import { UserProfileComponent } from './users/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'similar_data_list', component: SimilarListComponent
,
    children: [
      { path: 'prduct_detail', component: ProductDetailComponent  },
    ]
  },
  // ,canActivate:[AuthGuard]
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeScreenComponent },
  { path: 'prduct_detail', component: ProductDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'register1', component: ApiDataComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'verify', component: OtpVerifyComponent },
  {path : 'forget_user',component:ForgotPasswordComponent},
  {path : 'change/password',component:ChangePasswordComponent},
  { path: 'registeration', component: RegisterComponent },
  {path: 'logout',component:LogoutComponent},
  {path:'aboutUs',component:AboutUsComponent,canActivate:[RoleGuard]},
  {path: 'contactUs',component:ContactUsComponent,canActivate:[RoleGuard]},
  {path:'profile',component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

