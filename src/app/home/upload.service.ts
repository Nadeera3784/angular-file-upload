import {HttpClient, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UploadService { 

    base_url: string = 'http://localhost:3000';

    constructor(private httpClient: HttpClient) { }
    
    public upload(formData) {
        return this.httpClient.post<any>(this.base_url+'/api/upload', formData, {
              reportProgress: true,
              observe: 'response'
        });
    }         
}
    

