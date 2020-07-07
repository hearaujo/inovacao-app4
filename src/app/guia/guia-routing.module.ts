import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuiaFormComponent } from './guia-form/guia-form.component';
/**Components.*/


const movimentacaoRoutes: Routes = [
  { path: 'novo', component: GuiaFormComponent },
  { path: '**', redirectTo: '/guia/novo'}
];

@NgModule({
    imports: [RouterModule.forChild(movimentacaoRoutes)],
    exports: [RouterModule]
})
export class GuiaRoutingModule { }
