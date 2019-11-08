import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { forkJoin, of, throwError } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import { reportTypes } from '../../../constants/reportTypes';
import { standardReports } from '../../../constants/standard-reports';
import { sqlViews } from '../../../constants/sql-view';
const apiLink = '../../../api';

@Injectable({ providedIn: 'root' })
export class ReportService {
  constructor(private httpClient: HttpClient) {}

  loadReportTypes() {
    const url = apiLink + '/reportTypes';
    return of(reportTypes).pipe(
      switchMap((reportTypes: any) => {
        forkJoin(
          _.map(reportTypes, (reportType: any) => {
            if (reportType.name == 'Standard Report') {
              reportType.reports = standardReports;
            } else if (reportType.name == 'SQL Views') {
              reportType.reports = sqlViews;
            }
          })
        );
        return of(reportTypes);
      }),
      catchError((error: any) => {
        if (error.status !== 404) {
          return throwError(error);
        }
        return of([]);
      })
    );
  }

  fetchFormByUid(formUid: string) {
    const url = apiLink + '/forms/' + formUid;
    return this.httpClient.get(url);
  }
}
