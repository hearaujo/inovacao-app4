import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { Usuario } from '../../shared/model/usuario.model'
import { Movimentacao } from '../movimentacao.model'
import { MovimentacaoService } from '../movimentacao.service'


import { takeUntil} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/shared/alert-dialog/alert-dialog.component';

//Menu lateral
import { SidenavItem } from '../../shared/model/sidenav-item.model';
import { SidenavItemFactory } from '../../shared/factory/sidenav-item.factory';


@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit, OnDestroy {

  //para garantir a finalização das requisições do banco quando a página é fechada
  private end: Subject<boolean> = new Subject();

  public sidenavItems: SidenavItem[] = [];
  //variaveis
  public movimentacoes: Movimentacao[]
  public usuario: Usuario;

  //construtor só é executado uma vez no carregamento da página
  constructor(private router: Router,
    private movimentacaoService: MovimentacaoService,
    private authenticationService: AuthenticationService) { }

  //ngOnInit é executado constantemente
  ngOnInit() {
    this.usuario  = sessionStorage.getItem('usuario')
    ? JSON.parse(sessionStorage.getItem('usuario'))
    : null;

    if (this.usuario) {
      this.sidenavItems = SidenavItemFactory.buildSidenav();
      this.iniciandoListaMovimentacoes();
    } else {
      this.authenticationService.logout();
    }
   }


   //buscando informações no banco de dados
   iniciandoListaMovimentacoes(){
    this.movimentacaoService.getMovimentacoes().pipe(takeUntil(this.end)).subscribe(res => {
      this.movimentacoes = res.map(e => {
        return {
          uid: e.payload.doc.id,
          campos: e.payload.doc.data().campos,
          createdAt: e.payload.doc.data().createdAt
        }
      });
      console.log(this.movimentacoes);
    });
  }



  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }
}

