import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reportTypes: any = [
    { name: 'Standard Report', link: 'standard-report' },
    { name: 'SQL Views', link: 'sql-views' }
  ];
  constructor() {}
hideReport(){
}
  ngOnInit() {}
}

