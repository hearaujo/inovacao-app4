import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { Usuario } from '../../shared/model/usuario.model'
import { Nf } from '../nf.model'
import { NfService } from '../nf.service'


import { SidenavItem } from '../../shared/model/sidenav-item.model';
import { SidenavItemFactory } from '../../shared/factory/sidenav-item.factory';


import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/shared/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-nf-form',
  templateUrl: './nf-form.component.html',
  styleUrls: ['./nf-form.component.css']
})
export class NfFormComponent implements OnInit, OnDestroy {

  private end: Subject<boolean> = new Subject();

  public sidenavItems: SidenavItem[] = [];

  public nf: Nf = {
    campos: {
      nome: '',
      cpf: '',
      numContrato: '',
      uf: '',
      mes: 0,
      ano: 0,
      obs1: '',
      obs2: ''
    },
    createdAt: ''
  }

  public data = new FormControl((new Date()));
  public formNfInformacoes: FormGroup;
  public title = "Nova Movimentação no Form";


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private movimentacaoService: NfService,
    private authenticationService: AuthenticationService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute
) {}

  ngOnInit() {
    const usuario: Usuario = sessionStorage.getItem('usuario')
    ? JSON.parse(sessionStorage.getItem('usuario'))
    : null;

    if (usuario) {
      this.sidenavItems = SidenavItemFactory.buildSidenav();
      this.buildFormNf();       
    }
   }

   //carregando form
   private buildFormNf(): void {
     console.log(this.data.value)
    this.formNfInformacoes = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      cpf: ['', [Validators.required]],
      numContrato: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      mes: [1, [Validators.required]],
      ano: [2020, [Validators.required]],
      obs1: [''],
      obs2: [''],
    })
    //this.data = new FormControl((new Date(carregaNf.informacoes.data.seconds * 1000)));
   }

   //Submetendo informações do formulário
  async submitFormNf(){
    this.nf.campos = this.formNfInformacoes.value

    console.log('salvando', this.nf)

    if(this.formNfInformacoes.valid){
        var retorno = await this.movimentacaoService.addNf(this.nf)
        console.log('uid retorno', retorno);
        // this.buildFormItem();
        localStorage.removeItem('nf');
        this.router.navigate(['/nf', 'relatorio']); 
    }
  }
 
 
  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }
}
