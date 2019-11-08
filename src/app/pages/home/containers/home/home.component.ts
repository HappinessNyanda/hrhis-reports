import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Observable } from 'rxjs';

import { setCurrentReportType } from 'src/app/store/actions/report-type.actions';
import {
  getAllReportTypeContent,
  getCurrentReportTypeReports
} from 'src/app/store/selectors/report-type.selector';

import { ReportType } from 'src/app/core/models/report-type.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reportTypes$: Observable<ReportType[]>;
  currentReportTypeList$: Observable<ReportType>;
  constructor(private store: Store<State>) {
    this.reportTypes$ = this.store.select(getAllReportTypeContent);
    this.currentReportTypeList$ = this.store.select(
      getCurrentReportTypeReports
    );
    this.store.select(getCurrentReportTypeReports).subscribe(object => {
      console.log(object);
    });
  }
  setCurrentReportType(currentReportTypeId) {
    this.store.dispatch(setCurrentReportType({ currentReportTypeId }));
  }
  ngOnInit() {}
}
