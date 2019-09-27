import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaleComponent } from './male/male.component';
import { WomenComponent } from './women/women.component';

import {Auth} from '../../services/auth.service';

const routes: Routes = [
  {
    path: '',
	canActivate: [Auth],
    data: {
      title: 'People'
    },
    children: [
      {
        path: 'male',
        loadChildren: './male/male.module#MaleModule',
        data: {
          title: 'Male'
        }
      },
      {
        path: 'women',
        loadChildren: './male/male.module#MaleModule',
        data: {
          title: 'Women'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {}
