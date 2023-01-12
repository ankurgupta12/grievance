import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  events: string[] = [];
  defaultSections = [
    {
      routerLink: 'grievance-form', name: 'NEW GRIEVANCE' 
    },
    {
      routerLink: 'grievance-form', name: 'VIEW GRIEVANCE' 
    },
    {
      routerLink: 'grievance-form', name: 'GRIEVANCE MIS' 
    },{
      routerLink: 'grievance-form', name: 'FAQ' 
    },
    {
      routerLink: 'grievance-form', name: 'ADMIN' 
    }


  ];
  opened: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
