import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IptuFormComponent } from './iptu-form/iptu-form.component';
/**Components.*/


const movimentacaoRoutes: Routes = [
  { path: 'novo', component: IptuFormComponent },
  { path: '**', redirectTo: '/iptu/novo'}
];

@NgModule({
    imports: [RouterModule.forChild(movimentacaoRoutes)],
    exports: [RouterModule]
})
export class IptuRoutingModule { }
