import { Injectable, OnInit} from '@angular/core';
import { HttpClient , HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/index";


@Injectable({
  providedIn: 'root'
})

export class HomeService{

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWYzNGJiN2I1N2IzYzVlNjQ4NDc2NjZjIiwicm9sZSI6InRlYWNoZXIifSwiaWF0IjoxNjAwMTg1MTQ5LCJleHAiOjE2MDAyMTM5NDl9.PwGb9kzvXKuSYBFjZvbXPpx_QpauDrNMBDGNDd1Nwwg' ,
      'Content-Type': 'application/json'
    })
  }
  baseUrl: string = 'https://damp-meadow-37696.herokuapp.com/';

  constructor(private http: HttpClient) {

  }

  // addUsers(User): Observable<User> {
  //   return this.http.post<User>(this.baseUrl + 'registration_action/', JSON.stringify(User), this.httpOptions)
  // }  

}
