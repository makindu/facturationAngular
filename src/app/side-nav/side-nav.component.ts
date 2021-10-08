import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  isExpanded: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
