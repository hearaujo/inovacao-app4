import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NfFormComponent } from './nf-form/nf-form.component';
/**Components.*/


const movimentacaoRoutes: Routes = [
  { path: 'novo', component: NfFormComponent },
  { path: '**', redirectTo: '/nf/novo'}
];

@NgModule({
    imports: [RouterModule.forChild(movimentacaoRoutes)],
    exports: [RouterModule]
})
export class NfRoutingModule { }
