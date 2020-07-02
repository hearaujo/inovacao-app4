import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { Usuario } from '../../shared/model/usuario.model'
import { Movimentacao } from '../movimentacao.model'
import { MovimentacaoService } from '../movimentacao.service'


import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/shared/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-movimentacao-form',
  templateUrl: './movimentacao-form.component.html',
  styleUrls: ['./movimentacao-form.component.css']
})
export class MovimentacaoFormComponent implements OnInit, OnDestroy {

  private end: Subject<boolean> = new Subject();


  public movimentacao: Movimentacao = {
    campos: {
      data: '',
      identificacao: '',
      qtdPessoas: '',
      obs: '',
    },
    createdAt: ''
  }

  public data = new FormControl((new Date()));
  public formMovimentacaoInformacoes: FormGroup;
  public title = "Nova Movimentação no Form";


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private movimentacaoService: MovimentacaoService,
    private authenticationService: AuthenticationService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute
) {}

  ngOnInit() {
    const usuario: Usuario = sessionStorage.getItem('usuario')
    ? JSON.parse(sessionStorage.getItem('usuario'))
    : null;

    if (usuario) {
      this.buildFormMovimentacao();       
    }
   }

   //carregando form
   private buildFormMovimentacao(): void {
     console.log(this.data.value)
    this.formMovimentacaoInformacoes = this.formBuilder.group({
      data: [''],
      identificacao: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      qtdPessoas: ['', [Validators.required]],
      obs: [''],
    })
    //this.data = new FormControl((new Date(carregaMovimentacao.informacoes.data.seconds * 1000)));
   }

   //Submetendo informações do formulário
  async submitFormMovimentacao(){
    this.movimentacao.campos = this.formMovimentacaoInformacoes.value
    this.movimentacao.campos.data = this.data.value
    console.log('salvando', this.movimentacao)

    if(this.formMovimentacaoInformacoes.valid){
        var retorno = await this.movimentacaoService.addMovimentacao(this.movimentacao)
        console.log('uid retorno', retorno);
        // this.buildFormItem();
        localStorage.removeItem('movimentacao');
        this.router.navigate(['/movimentacao', 'relatorio']); 
    }
  }
 
 
  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }
}
