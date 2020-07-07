import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { Usuario } from '../../shared/model/usuario.model'
import { Guia } from '../guia.model'
import { GuiaService } from '../guia.service'


import { SidenavItem } from '../../shared/model/sidenav-item.model';
import { SidenavItemFactory } from '../../shared/factory/sidenav-item.factory';


import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/shared/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-guia-form',
  templateUrl: './guia-form.component.html',
  styleUrls: ['./guia-form.component.css']
})
export class GuiaFormComponent implements OnInit, OnDestroy {

  private end: Subject<boolean> = new Subject();

  public sidenavItems: SidenavItem[] = [];

  public guia: Guia = {
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
  public formGuiaInformacoes: FormGroup;
  public title = "Nova Movimentação no Form";


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private movimentacaoService: GuiaService,
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
      this.buildFormGuia();       
    }
   }

   //carregando form
   private buildFormGuia(): void {
     console.log(this.data.value)
    this.formGuiaInformacoes = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      cpf: ['', [Validators.required]],
      numContrato: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      mes: [1, [Validators.required]],
      ano: [2020, [Validators.required]],
      obs1: [''],
      obs2: [''],
    })
    //this.data = new FormControl((new Date(carregaGuia.informacoes.data.seconds * 1000)));
   }

   //Submetendo informações do formulário
  async submitFormGuia(){
    this.guia.campos = this.formGuiaInformacoes.value

    console.log('salvando', this.guia)

    if(this.formGuiaInformacoes.valid){
        var retorno = await this.movimentacaoService.addGuia(this.guia)
        console.log('uid retorno', retorno);
        // this.buildFormItem();
        localStorage.removeItem('guia');
        this.router.navigate(['/guia', 'relatorio']); 
    }
  }
 
 
  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }
}
