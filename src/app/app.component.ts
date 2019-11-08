import { Component, OnInit } from '@angular/core';
import { loadReportTypes } from './store/actions/report-type.actions';

import { Store, select } from '@ngrx/store';
import { State } from './store/reducers';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'new-hrhis-reports';

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(loadReportTypes({}));
  }
}
