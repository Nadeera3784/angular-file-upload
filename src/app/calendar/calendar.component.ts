import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarOptions: CalendarOptions;

  constructor() { }

  handleDateClick(arg) {
    //console.log(arg);
    //alert('date click! ' + arg.dateStr)
  }

  onSelect(event){
    console.log('on select vent fired' + JSON.stringify(event));
  }

  ngOnInit() {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      selectable: true,
      //dateClick: this.handleDateClick.bind(this),
      select: this.onSelect.bind(this),
      events: [
        { id : '47948594', title: 'event 1', date: '2020-09-25' },
        { id : '84759847', title: 'event 2', date: '2020-09-26' }
      ]
    }
  }

}
