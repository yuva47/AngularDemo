import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseApiUrl : string = "https://file.io/";
  constructor(private router: Router,private http: HttpClient) {

   }

   register(user: User) {
     return this.http.post<User>(`${environment.apiUrl}posts.json`,
     user);

}

  login(){
    return this.http.get(`${environment.apiUrl}posts.json`);
  }

  upload(file):Observable<any> {

    const formData = new FormData();

    formData.append("file", file, file.name);


    return this.http.post(this.baseApiUrl, formData)
}

update(filelink:string,id:string,key:string){
  let obj={};
  obj[key]=filelink;

  return this.http.patch(`${environment.apiUrl}posts/`+id+`/.json`,
  obj);
}


}
