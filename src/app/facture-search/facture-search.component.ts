import { Component, OnInit } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { App } from '../app';
import { FacturesService } from '../factures/services/factures.service';

@Component({
  selector: 'app-facture-search',
  templateUrl: './facture-search.component.html',
  styleUrls: ['./facture-search.component.css']
})
export class FactureSearchComponent implements OnInit {

  factures$!: Observable<any>;
  private searchTerms = new Subject<string>();

  constructor(private factureServices: FacturesService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.factures$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.factureServices.searchfacture(term))
    );
  }

}
