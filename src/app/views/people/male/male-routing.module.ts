import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MaleComponent} from './male.component';

const maleRoutes: Routes = [
    {
        path: '',
        component: MaleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(maleRoutes)],
    exports: [RouterModule]
})

export class MaleRoutingModule {}
