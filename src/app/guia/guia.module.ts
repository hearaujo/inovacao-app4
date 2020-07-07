import { NgModule, LOCALE_ID} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';

/**Routes.*/
import { GuiaRoutingModule } from './guia-routing.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

/**Modules.*/
import { SharedModule } from '../shared/shared.module';
import { GuiaFormComponent } from './guia-form/guia-form.component';
import { AlertDialogComponent } from '../shared/alert-dialog/alert-dialog.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


registerLocaleData(localeBr, 'pt')

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GuiaRoutingModule,
    SharedModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    GuiaFormComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class GuiaModule { }
