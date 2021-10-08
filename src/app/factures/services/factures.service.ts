import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { App } from 'src/app/app';

@Injectable({
  providedIn: 'root'
})
export class FacturesService {
  private url = 'https://localhost:8000/api/factures';

  constructor(private http: HttpClient) { }

  getFacturesDB(): Observable<App[]> {
    return this.http.get<App[]>(`${this.url}.json`);
  }

  searchfacture(term: string): Observable<any> {
    if (!term) {
      return of([]);
    }
    return this.http.get<any>(`${this.url}/${term}.json`);
  }

  getFacture(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}.json`);
  }
}
