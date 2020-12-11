import { RouterModule } from '@angular/router';
import { HomeModule } from './components/home/home.module';
import { FileuploadModule } from './components/fileupload/fileupload.module';
import { LoginModule } from './components/login/login.module';
import { SignupModule } from './components/signup/signup.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    SignupModule,
    LoginModule,
    FileuploadModule,
    HomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
