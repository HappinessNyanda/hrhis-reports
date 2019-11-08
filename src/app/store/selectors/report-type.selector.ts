import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { ReportType } from '../../core/models/report-type.model';
import {
  reportTypeAdapter,
  ReportTypeState
} from '../states/report-type.state';
import { getRootState, State } from '../reducers';

import * as _ from 'lodash';

const getReportTypeState = createSelector(
  getRootState,
  (state: State) => state.reportType
);

export const {
  selectEntities: getReportTypeEntities,
  selectAll: getAllReportTypeContent
} = reportTypeAdapter.getSelectors(getReportTypeState);

export const getReportTypeInitializedStatus = createSelector(
  getReportTypeState,
  (state: ReportTypeState) => state.initialized
);
export const getCurrentReportTypeStatus = createSelector(
  getReportTypeState,
  (state: ReportTypeState) => state.currentReportType
);
