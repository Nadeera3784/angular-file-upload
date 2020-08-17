import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/index";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  baseUrl: string = 'https://damp-meadow-37696.herokuapp.com/';

  constructor(private http: HttpClient) {

  }

  addUsers(product): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'registration_action/', JSON.stringify(product), this.httpOptions)
  }  

}
