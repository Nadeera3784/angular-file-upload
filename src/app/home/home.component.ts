import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';
import {User} from './user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) {

  }

  ngOnInit(){
    const userPayload = {
      first_name: "micky",
      last_name: "mouse"
    }
    this.homeService.addUsers(userPayload).subscribe( data =>{
      console.log(data);
    });
  }

}
