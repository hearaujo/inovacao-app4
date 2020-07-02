import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovimentacaoFormComponent } from './movimentacao-form/movimentacao-form.component';
import { MovimentacaoListComponent } from './movimentacao-list/movimentacao-list.component';
/**Components.*/


const movimentacaoRoutes: Routes = [
  { path: 'novo', component: MovimentacaoFormComponent },
  { path: 'editar/:id', component: MovimentacaoFormComponent },
  { path: 'relatorio', component: MovimentacaoListComponent},
  { path: '**', redirectTo: '/movimentacao/novo'}
];

@NgModule({
    imports: [RouterModule.forChild(movimentacaoRoutes)],
    exports: [RouterModule]
})
export class MovimentacaoRoutingModule { }
