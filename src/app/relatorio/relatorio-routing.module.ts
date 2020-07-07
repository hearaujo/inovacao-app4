import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelatorioListComponent } from './relatorio-list/relatorio-list.component';
/**Components.*/


const relatorioRoutes: Routes = [
  { path: '', component: RelatorioListComponent},
  { path: '**', redirectTo: '/relatorio'}
];

@NgModule({
    imports: [RouterModule.forChild(relatorioRoutes)],
    exports: [RouterModule]
})
export class RelatorioRoutingModule { }
