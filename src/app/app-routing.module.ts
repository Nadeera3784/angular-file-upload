import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions} from '@angular/router';

import {HomeComponent} from '../app/home/home.component';
import {CalendarComponent} from '../app/calendar/calendar.component';
import {CropperComponent} from './cropper/cropper.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'calendar' , component: CalendarComponent},
  {path: 'cropper' , component: CropperComponent},
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


