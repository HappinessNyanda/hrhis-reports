import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  initializeReportTypes,
  loadReportTypes,
  loadReportTypesSuccess,
  loadReportTypesFailure,
  setCurrentReportType
} from '../actions/report-type.actions';
import {
  getReportTypeInitializedStatus,
  getAllReportTypeContent
} from '../selectors/report-type.selector';
import { ReportService } from '../../core/services/report.service';
import { ReportType } from '../../core/models/report-type.model';
import { map, concatMap, withLatestFrom, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';

// import { go } from 'src/app/store/actions/router.actions';
import * as _ from 'lodash';

// import { getUrl } from 'src/app/store/selectors/router.selectors';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

@Injectable()
export class ReportTypesEffects {
  constructor(
    private actions$: Actions,
    private reportService: ReportService,
    private store: Store<State>
  ) {}

  loadReportTypes$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadReportTypes),
        withLatestFrom(this.store.pipe(select(getReportTypeInitializedStatus))),
        tap(([{}, initialized]) => {
          if (!initialized) {
            this.store.dispatch(initializeReportTypes());
            this.reportService.loadReportTypes().subscribe(
              (reportTypes: ReportType[]) => {
                this.store.dispatch(loadReportTypesSuccess({ reportTypes }));
                const currentReportTypeId = 'standard-report';
                this.store.dispatch(
                  setCurrentReportType({ currentReportTypeId })
                );
              },
              (error: any) => of(loadReportTypesFailure({ error }))
            );
          }
        })
      ),
    { dispatch: false }
  );

  // setCurrentReportType$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(setCurrentReportType),
  //     concatMap(action =>
  //       of(action).pipe(withLatestFrom(this.store.pipe(select(getAllReportTypeContent))))
  //     ),
  //     map((reportTypes) => {
  //       return go({ path: [`/updates/${id}`] });
  //     })
  //   )
  // );
}
