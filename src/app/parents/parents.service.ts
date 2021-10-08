import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Parents } from './parents';

@Injectable({
  providedIn: 'root'
})
export class ParentsService {

  httOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  private parentsUrl = 'https://127.0.0.1:8000/api/parents.json';
  private parentUrl = 'https://127.0.0.1:8000/api/parents';

  constructor(private http: HttpClient) { }

  /** GET list of parents from the server DB */
  getParentsDB(): Observable<Parents[]> {
    return this.http.get<Parents[]>(this.parentsUrl);
  }

  /** GET a particular parent from the server DB */
  getParentDB(id: number): Observable<Parents> {
    return this.http.get<Parents>(`${this.parentUrl}/${id}`);
  }

  /** POST a new parent in the DB */
  addParentDB(parent: any): Observable<any> {
    return this.http.post<any>(this.parentUrl, parent);
  }

  /** GET search parent by name asynch */
  searchParents(term: string): Observable<Parents[]> {
    //if not search term, return empty parent array
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Parents[]>(`${this.parentsUrl}/?noms=${term}`);
  }
  /** PUT: update a parent */
  updateParentDB(parent: Parents, id: number): Observable<any> {
    return this.http.put(`${this.parentUrl}/${id}`, parent);
  }

  /**DELETE: delete a parent */
  deleteParentDB(id: number): Observable<Parents> {
    return this.http.delete<Parents>(`${this.parentUrl}/${id}`);
  }

}
