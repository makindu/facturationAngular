import { Component, OnInit } from '@angular/core';
import { App } from '../app';
import { FacturesService } from '../factures/services/factures.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  factures: App[] = [];
  today: number = Date.now()
  constructor(private factureService: FacturesService) { }

  ngOnInit(): void {
    this.factureService.getFacturesDB().subscribe(factures => this.factures = factures.slice(1, 10));
  }

}
