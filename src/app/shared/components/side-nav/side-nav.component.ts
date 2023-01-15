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
      routerLink: 'view-grievance', name: 'VIEW GRIEVANCE' 
    },
    {
      routerLink: 'null', name: 'GRIEVANCE MIS' 
    },{
      routerLink: 'null', name: 'FAQ' 
    },
    {
      routerLink: 'null', name: 'ADMIN' 
    }


  ];
  opened: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
