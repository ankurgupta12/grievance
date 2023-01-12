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
      id: 1, name: 'NEW GRIEVANCE' 
    },
    {
      id: 2, name: 'VIEW GRIEVANCE' 
    },
    {
      id: 3, name: 'GRIEVANCE MIS' 
    },{
      id: 4, name: 'FAQ' 
    },
    {
      id: 5, name: 'ADMIN' 
    }


  ];
  opened: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
