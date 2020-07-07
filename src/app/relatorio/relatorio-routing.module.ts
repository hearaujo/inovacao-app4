import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelatorioListComponent } from './relatorio-list/relatorio-list.component';
/**Components.*/


const relatorioRoutes: Routes = [
  { path: 'relatorio', component: RelatorioListComponent},
  { path: '**', redirectTo: '/relatorio/novo'}
];

@NgModule({
    imports: [RouterModule.forChild(relatorioRoutes)],
    exports: [RouterModule]
})
export class RelatorioRoutingModule { }
