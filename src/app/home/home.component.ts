import { Component, OnInit, Injectable, AfterContentChecked, AfterViewChecked, DoCheck} from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpEventType, HttpErrorResponse} from '@angular/common/http';
import {UploadService} from '../home/upload.service';
import {catchError, map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{


  constructor(private uploadService: UploadService){
   
  }

  uploadedFile: any;

  loading: boolean = false;

  base_url : string = 'http://localhost:3000';

  fileEvent(event){

      this.uploadedFile = event.target.files[0];

      let formData = new FormData();

      formData.append("attachment",  this.uploadedFile);
      
      this.loading = true;

      this.uploadService.upload(formData).pipe(
        map(response => {
          this.loading = false;
          console.log(response.body);
          event.target.value = "";
        }),
        catchError((error: HttpErrorResponse) => {
          return of(`Upload failed: ${formData}`);
        })).subscribe((eventx: any) => {
          this.loading = false;
          //console.log('subscribe' + eventx);
        });
      


  }

  ngOnInit(){

  }

  onSubmit() {

  }

 
  ngDoCheck() {
    console.log("AppComponent:DoCheck");//
  }
 
 

}
