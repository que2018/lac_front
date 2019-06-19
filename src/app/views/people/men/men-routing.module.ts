import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenComponent} from './men.component';

const menRoutes: Routes = [
    {
        path: '',
        component: MenComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(menRoutes)],
    exports: [RouterModule]
})

export class MenRoutingModule {}
