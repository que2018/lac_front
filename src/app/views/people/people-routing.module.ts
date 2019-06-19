import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'People'
    },
    children: [
      {
        path: 'men',
        loadChildren: './men/men.module#MenModule',
        data: {
          title: 'Men'
        }
      },
      {
        path: 'women',
        loadChildren: './men/men.module#MenModule',
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
