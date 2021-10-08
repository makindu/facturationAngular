import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { App } from '../app';
import { FacturesService } from '../factures/services/factures.service';

@Component({
  selector: 'app-facture-detail',
  templateUrl: './facture-detail.component.html',
  styleUrls: ['./facture-detail.component.css']
})
export class FactureDetailComponent implements OnInit {

  facture: App | undefined;
  constructor(
    private route: ActivatedRoute,
    private factureService: FacturesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getfacture();
  }

  getfacture(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.factureService.getFacture(id).subscribe(facture => this.facture = facture);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.facture) {
      alert('Edition en cours de developpement...');
    }
  }
}
