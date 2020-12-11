import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SignupModule { }
