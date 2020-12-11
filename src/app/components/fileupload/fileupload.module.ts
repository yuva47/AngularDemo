import { RouterModule } from '@angular/router';
import { FileuploadComponent } from './fileupload.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [FileuploadComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FileuploadModule {   }
