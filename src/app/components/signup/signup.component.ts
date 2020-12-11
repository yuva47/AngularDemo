import { UserService } from './../../services/services.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private userservice:UserService,) { }

  ngOnInit(): void {
      this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            emailid: ['', [Validators.required,Validators.email]],
            mobileno:['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            gender:['Male', Validators.required],
            address:['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(8)]],
            cpassword:['',Validators.required]
        }, {
          validator: this.MustMatch('password', 'cpassword')
        });


  }

  get f() { return this.form.controls; }
  onSubmit() {
    this.submitted=true;
    if (this.form.invalid) {
        return;
    }
    this.loading = true;
    this.userservice.register(this.form.value).subscribe(response =>{
      if("name" in response){
        this.router.navigate(['/login'],{ queryParams :{ "registered":true}});
      };
     });


}

MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}


}

