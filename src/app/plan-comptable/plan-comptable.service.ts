import { Injectable } from '@angular/core';
import { Classe } from './Interfaces/classe';
import { Compte } from './Interfaces/compte';
import { Souscompte } from './Interfaces/souscompte';
import { Client } from './Interfaces/client';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanComptableService {

  private companyId = 2;
  private classurl = 'http://api-ohada.naledi.cd/api/classes';
  private classComptesurl = 'http://api-ohada.naledi.cd/api/comptescompany';
  private compteSousComptesurl = 'http://api-ohada.naledi.cd/api/souscomptescompany';
  private clientsurl = 'http://api-ohada.naledi.cd/api/clientscompany';

  constructor(private http: HttpClient) { }

  getClassesDB(): Observable<Classe[]> {
    return this.http.get<Classe[]>(`${this.classurl}`);
  }

  getComptesDB(classId: number): Observable<Compte[]> {
    return this.http.get<Compte[]>(`${this.classComptesurl}/{"companyId":${this.companyId},"classId":${classId}}`);
  }

  getSousComptesDB(compteId: number): Observable<Souscompte[]> {
    return this.http.get<Souscompte[]>(`${this.compteSousComptesurl}/{"companyId":${this.companyId},"compteId":${compteId}}`);
  }

  getClientsDB(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.clientsurl}`);
  }
}
