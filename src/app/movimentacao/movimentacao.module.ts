import { NgModule, LOCALE_ID} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';

/**Routes.*/
import { MovimentacaoRoutingModule } from './movimentacao-routing.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

/**Modules.*/
import { SharedModule } from '../shared/shared.module';
import { MovimentacaoFormComponent } from './movimentacao-form/movimentacao-form.component';
import { AlertDialogComponent } from '../shared/alert-dialog/alert-dialog.component';
import { MovimentacaoListComponent } from './movimentacao-list/movimentacao-list.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


registerLocaleData(localeBr, 'pt')

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MovimentacaoRoutingModule,
    SharedModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    MovimentacaoFormComponent,
    MovimentacaoListComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class MovimentacaoModule { }
