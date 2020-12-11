import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

user:User=new User();

  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   this.user=JSON.parse(localStorage.getItem('currentuser'));
   console.log(this.user);
}


downloadMyFile(url:string){
  const link = document.createElement('a');
  link.setAttribute('target', '_blank');
  link.setAttribute('href', url);
  link.setAttribute('download', 'true');
  document.body.appendChild(link);
  link.click();
  link.remove();
}

logout(){
  localStorage.clear();
  this.router.navigate(['/']);
}

}

