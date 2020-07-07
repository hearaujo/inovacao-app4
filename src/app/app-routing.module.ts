import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**Components.*/
import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticationGuard } from './authentication/authentication.guard';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', loadChildren: './authentication/authentication.module#AuthenticationModule' },
  { path: 'movimentacao', loadChildren: './movimentacao/movimentacao.module#MovimentacaoModule', canActivate: [AuthenticationGuard]},
  { path: 'enel', loadChildren: './enel/enel.module#EnelModule', canActivate: [AuthenticationGuard]},
  { path: 'iptu', loadChildren: './iptu/iptu.module#IptuModule', canActivate: [AuthenticationGuard]},
  { path: 'nf', loadChildren: './nf/nf.module#NfModule', canActivate: [AuthenticationGuard]},
  { path: 'guia', loadChildren: './guia/guia.module#GuiaModule', canActivate: [AuthenticationGuard]},
  { path: 'dashboard', loadChildren: './dash/dash.module#DashModule', canActivate: [AuthenticationGuard]},
  { path: '**', redirectTo: '/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
