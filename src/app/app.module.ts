import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {ApiDataComponent } from './api-data/api-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from "@angular/material/icon";
import {FormsModule} from '@angular/forms'
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import {MatToolbarModule } from '@angular/material/toolbar'
import{HeaderComponent} from './header/header.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SimilarListComponent } from './similar-list/similar-list.component';
import { CutomtextDirective } from './cutomtext.directive';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { FooterComponent } from './footer/footer.component';
import { OtpVerifyComponent } from './users/otp-verify/otp-verify.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { LogoutComponent } from './users/logout/logout.component';
import { AboutUsComponent } from './users/about-us/about-us.component';
import { ContactUsComponent } from './users/contact-us/contact-us.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiDataComponent,
    HeaderComponent,
    ProductDetailComponent,
    SimilarListComponent,
    CutomtextDirective,
    LoginComponent,
    RegisterComponent,
    HomeScreenComponent,
    FooterComponent,
    OtpVerifyComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    LogoutComponent,
    AboutUsComponent,
    ContactUsComponent,
    UserProfileComponent,

    ],
  imports: [
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatFormFieldModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    CommonModule,
    MatToolbarModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
