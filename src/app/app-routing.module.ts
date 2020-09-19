import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions} from '@angular/router';

import {HomeComponent} from '../app/home/home.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


