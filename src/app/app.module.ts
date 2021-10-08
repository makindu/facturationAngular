import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactureSearchComponent } from './facture-search/facture-search.component';
import { FacturesComponent } from './factures/factures.component';
import { FactureDetailComponent } from './facture-detail/facture-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewfactureComponent } from './factures/newfacture/newfacture.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { ParentsComponent, NewparentComponent } from './parents/parents.component';
import { ParentDetailComponent } from './parents/parent-detail/parent-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TableOverviewExampleComponent } from './table-overview-example/table-overview-example.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { SearchParentComponent } from './search-parent/search-parent.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { PlanComptableModule } from './plan-comptable/plan-comptable.module';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    FactureSearchComponent,
    FacturesComponent,
    FactureDetailComponent,
    DashboardComponent,
    NewfactureComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    FormbuilderComponent,
    ParentsComponent,
    ParentDetailComponent,
    SideNavComponent,
    ToolbarComponent,
    TableOverviewExampleComponent,
    SearchParentComponent,
    NewparentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    PlanComptableModule,
    MatListModule
  ],
  entryComponents: [ParentsComponent, NewparentComponent],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
