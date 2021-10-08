import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Classe } from '../Interfaces/classe';
import { Compte } from '../Interfaces/compte';
import { Souscompte } from '../Interfaces/souscompte';
import { Client } from '../Interfaces/client';
import { PlanComptableService } from '../plan-comptable.service';

@Component({
  selector: 'app-plan-comptable',
  templateUrl: './plan-comptable.component.html',
  styleUrls: ['./plan-comptable.component.css']
})
export class PlanComptableComponent implements OnInit {

  classes: Classe[] = [];
  comptes: Compte[] = [];
  sousComptes: Souscompte[] = [];
  compteIdsent: any;
  clientInfo: Client[] = [];

  isComptes: boolean = false;
  panelOpenState = false;
  constructor(private classeService: PlanComptableService) {
  }

  ngOnInit(): void {
    this.getClasses();
  }
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  getClasses(): void {
    this.classeService.getClassesDB().subscribe(c => this.classes = c);
  }

  getComptes(classId: any): void {

    const idtosent = parseInt(classId);
    this.classeService.getComptesDB(idtosent).subscribe(cp => this.comptes = cp);
  }

  getSousComptes(compteId: any) {
    const idtosend = parseInt(compteId);
    this.compteIdsent = idtosend;
    this.classeService.getSousComptesDB(idtosend).subscribe(scp => this.sousComptes = scp);
  }

  getClients(): void {
    this.classeService.getClientsDB().subscribe(cl => this.clientInfo = cl);
  }

  openNewClassModal(): void {
    console.log("New Classe");
  }
}
