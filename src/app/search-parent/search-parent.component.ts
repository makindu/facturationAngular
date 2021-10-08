import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Parents } from '../parents/parents';
import { ParentsService } from '../parents/parents.service';

@Component({
  selector: 'app-search-parent',
  templateUrl: './search-parent.component.html',
  styleUrls: ['./search-parent.component.css']
})
export class SearchParentComponent implements OnInit {
  parents$!: Observable<Parents[]>;
  private searchTerms = new Subject<string>();

  constructor(private parentService: ParentsService) { }

  //Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.parents$ = this.searchTerms.pipe(
      //wait 300ms after each keystroke before considering the term
      debounceTime(300),
      //ignore new term if same as previous term
      distinctUntilChanged(),
      //switch to new search observable each time the term changes
      switchMap((term: string) => this.parentService.searchParents(term)),
    );
  }

}
