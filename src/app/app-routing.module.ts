import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FactureDetailComponent } from './facture-detail/facture-detail.component';
import { FacturesComponent } from './factures/factures.component';
import { NewfactureComponent } from './factures/newfacture/newfacture.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ParentDetailComponent } from './parents/parent-detail/parent-detail.component';
import { ParentsComponent } from './parents/parents.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { TableOverviewExampleComponent } from './table-overview-example/table-overview-example.component';
import { PlanComptableComponent } from './plan-comptable/plan-comptable/plan-comptable.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'facture/:id', component: FactureDetailComponent },
  { path: 'factures', component: FacturesComponent },
  { path: 'addfacture', component: NewfactureComponent },
  { path: 'from1', component: NameEditorComponent },
  { path: 'profileditor', component: ProfileEditorComponent },
  { path: 'formbuilder', component: FormbuilderComponent },
  { path: 'parents', component: ParentsComponent },
  { path: 'detail-parent/:id', component: ParentDetailComponent },
  { path: 'tableMaterialExample', component: TableOverviewExampleComponent },
  { path: 'plancomptable', component: PlanComptableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
