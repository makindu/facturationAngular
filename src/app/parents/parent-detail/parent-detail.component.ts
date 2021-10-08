import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Parents } from '../parents';
import { ParentsService } from '../parents.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-parent-detail',
  templateUrl: './parent-detail.component.html',
  styleUrls: ['./parent-detail.component.css']
})
export class ParentDetailComponent implements OnInit {

  parent: Parents | undefined;
  updateParentForm = this.fb.group({
    noms: [''],
    adresse: ['']
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private parentService: ParentsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getParent();
  }

  getParent(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.parentService.getParentDB(id).subscribe(parent => this.parent = parent);
  }

  updateParent(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.parentService.updateParentDB(this.updateParentForm.value, id).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
