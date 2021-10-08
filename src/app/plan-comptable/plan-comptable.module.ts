import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComptableComponent } from './plan-comptable/plan-comptable.component';
import { ComptesComponent } from './comptes/comptes.component';
import { SouscomptesComponent } from './souscomptes/souscomptes.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';



@NgModule({
  declarations: [PlanComptableComponent, ComptesComponent, SouscomptesComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatChipsModule,
    MatButtonToggleModule
  ]
})
export class PlanComptableModule { }
