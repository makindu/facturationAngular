import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { App } from '../app';
import { FacturesService } from './services/factures.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements AfterViewInit, OnInit {

  factures: App[] = [];
  displayedColumns: string[] = ['numero', 'article', 'facture', 'montant'];
  dataSource: MatTableDataSource<App>;
  myControl = new FormControl();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(protected factureService: FacturesService) {

    this.dataSource = new MatTableDataSource(this.factures);
  }

  ngOnInit() {
    this.getFactures();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getFactures(): void {
    this.factureService.getFacturesDB().subscribe(factures => this.factures = factures);
  }
}
