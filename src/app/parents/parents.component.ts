import { AfterViewInit, ViewChild, Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Parents } from './parents';
import { ParentsService } from './parents.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit, AfterViewInit {
  parents: Parents[] = [];
  displayedColumns: string[] = ['action', 'id', 'noms', 'adresse'];
  dataSource: MatTableDataSource<Parents>;

  @ViewChild(MatPaginator) paginator!: MatPaginator | null;
  @ViewChild(MatSort) sort!: MatSort | null;

  constructor(
    private parentService: ParentsService,
    private location: Location,
    public newParentdialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource(this.parents);
  }

  newParentForm() {
    const dialogRef = this.newParentdialog.open(NewparentComponent);
    dialogRef.afterClosed().subscribe(() => {
      console.log(`Dialog result`);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.getParents();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getParents(): void {
    this.parentService.getParentsDB().subscribe(p => this.dataSource = new MatTableDataSource(p));
    this.parentService.getParentsDB().subscribe(p => this.parents = p);
  }

  deleteParent(parent: Parents): void {
    this.parents = this.parents.filter(p => p !== parent);
    this.parentService.deleteParentDB(parent.id).subscribe(() => this.getParents());
  }

  goBack(): void {
    this.location.back();
  }

}

@Component({
  selector: 'newparent-component-dialog',
  templateUrl: 'newparent.component.html',
})
export class NewparentComponent {

  parents: Parents[] = [];
  displayedColumns: string[] = ['action', 'id', 'noms', 'adresse'];
  dataSource: MatTableDataSource<Parents>;

  ParentForm = this.fb.group({
    noms: [''],
    adresse: ['']
  });

  constructor(private fb: FormBuilder, private parentService: ParentsService) {
    this.dataSource = new MatTableDataSource(this.parents);
  }
  addParent(): void {
    this.parentService.addParentDB(this.ParentForm.value).subscribe(p => this.parents = p);
  }

  getParents(): void {
    this.parentService.getParentsDB().subscribe(p => this.dataSource = new MatTableDataSource(p));
    this.parentService.getParentsDB().subscribe(p => this.parents = p);
  }
}
