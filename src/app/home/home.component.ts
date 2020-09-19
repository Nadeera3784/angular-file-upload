import { Component, OnInit, Injectable, AfterContentChecked, AfterViewChecked,
  DoCheck} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{


  value : string = "";

  constructor(private http: HttpClient){
   
  }

  uploadedFiles: any;

  loading: boolean = false;

  base_url : string = 'http://localhost:3000';

  fileEvent(event){

      this.uploadedFiles = event.target.files[0];

      let formData = new FormData();

      formData.append("attachment",  this.uploadedFiles);
      
      this.loading = true;
      
      this.http.post(this.base_url+'/api/upload', formData, {observe: 'response'}).subscribe(
        (response) => {
           console.log('sucess response' +response);
        },
        (error) => {
          console.log('error response' + error.status);  
          this.loading = false;
      });
  }

  ngOnInit(){

  }

  onSubmit() {

  }

 
  ngDoCheck() {
    console.log("AppComponent:DoCheck");//
  }
 
  // ngAfterContentChecked() {
  //   console.log("AppComponent:AfterContentChecked");//
  // }
 

 
  // ngAfterViewChecked() {
  //   console.log("AppComponent:AfterViewChecked");//
  // }
 

}
