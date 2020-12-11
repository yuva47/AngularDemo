import { UserService } from 'src/app/services/services.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  shortLink: string = "";
  cloading: boolean = false;
  ploading: boolean = false;
  rloading: boolean = false;
  cfile!: File;
  pfile!: File;
  rfile!: File;
  user:User=new User();
  msg:string;
  msgclass:string;
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('currentuser'));
  }
  oncChange(event) {
    this.cfile = event.target.files[0];
}

onpChange(event) {
  this.pfile = event.target.files[0];
}

onrChange(event) {
  this.rfile = event.target.files[0];
}



onUpload(tempurl:string) {
  let file=this.cfile;

  switch(tempurl){
    case "curl":
        file=this.cfile;
        this.cloading = !this.cloading;
      break;
      case "purl":
        file=this.pfile;
        this.ploading = !this.ploading;
      break;
      case "rurl":
        file=this.rfile;
        this.rloading = !this.rloading;
      break;
  }
 if(file!=undefined && file!=null){
  this.userservice.upload(file).subscribe(
      (event: any) => {
          if (typeof (event) === 'object') {
            console.log(event);
              this.shortLink = event.link;
              console.log(this.user.id);
              this.userservice.update(this.shortLink,this.user.id,tempurl).subscribe(response=>{
                console.log(response);
                this.user[tempurl]=this.shortLink;
                localStorage.setItem('currentuser',JSON.stringify(this.user));
              });
              this.msg="SuccessFully Uploaded."
          this.msgclass="alert alert-success";
          setTimeout(()=>this.msg=null,5000);
              this.cloading = false;
              this.ploading = false;
              this.rloading = false;
          }
      },(err)=>{
        this.cloading = false;
        this.ploading = false;
        this.rloading = false;
        this.msg="SomethingThing went wrong.Try Again Later."
        this.msgclass="alert alert-danger";
        setTimeout(()=>this.msg=null,5000)
      }
  );
    }else{
        this.cloading = false;
        this.ploading = false;
        this.rloading = false;
        this.msg="Select the file before upload."
        this.msgclass="alert alert-danger";
        setTimeout(()=>this.msg=null,5000)
    }
}
}
