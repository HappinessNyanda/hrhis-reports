import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Observable } from 'rxjs';

import { getAllReportTypeContent } from 'src/app/store/selectors/report-type.selector';

import { ReportType } from 'src/app/core/models/report-type.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reportTypes$: Observable<ReportType[]>;
  constructor(private store: Store<State>) {
    this.reportTypes$ = this.store.select(getAllReportTypeContent);
  }
  hideReport() {}
  ngOnInit() {}
}
