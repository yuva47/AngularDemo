import { User } from './../../model/user';
import { UserService } from './../../services/services.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  form: FormGroup = new FormGroup({});
  submitted = false;
  registered =false;
  invalidup=false;
  constructor(private userservice:UserService, private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      emailid: ['', Validators.required],
      password: ['', Validators.required]
  });
   this.route.queryParams.subscribe(params => {
    this.registered = params['registered'];
    if(this.registered){
    setTimeout(()=> this.registered=!this.registered,5000);
  }
 });

  }

  get f() {
    return this.form.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
        return;
    }

    this.loading = true;
    this.userservice.login().pipe(
      map(response=>{
      const postarray=[];
      for(const key in response){
        if(response.hasOwnProperty(key)){
        postarray.push({...response[key], id:key});
        }
      }
      postarray.forEach( (value) => {
        if(value.emailid==this.form.value.emailid && value.password==this.form.value.password){
          localStorage.setItem('currentuser',JSON.stringify(value));
          this.router.navigate(['home']);
          return;
        }else{
          this.invalidup=true;
          this.loading = false;
          setTimeout(()=>this.invalidup=false,5000);
        }
      });

    })).subscribe(

    );





}

gotohome(){

}


}
