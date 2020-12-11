import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from './utility/authguard.guard';

const routes: Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  {
     path: 'login', component: LoginComponent
  },
  {
    path: 'register', component:SignupComponent
  },
  {
    path: 'home', component: HomeComponent ,canActivate: [AuthguardGuard]
  },
  {
    path: 'fileupload', component: FileuploadComponent ,canActivate: [AuthguardGuard]
  },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
