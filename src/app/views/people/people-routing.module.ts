import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';

import { PaginationsComponent } from './paginations.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'People'
    },
    children: [
      {
        path: 'men',
        component: MenComponent,
        data: {
          title: 'Men'
        }
      },
      {
        path: 'women',
        component: WomenComponent,
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
