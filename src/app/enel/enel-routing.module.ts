import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnelFormComponent } from './enel-form/enel-form.component';
/**Components.*/


const movimentacaoRoutes: Routes = [
  { path: 'novo', component: EnelFormComponent },
  { path: '**', redirectTo: '/enel/novo'}
];

@NgModule({
    imports: [RouterModule.forChild(movimentacaoRoutes)],
    exports: [RouterModule]
})
export class EnelRoutingModule { }
