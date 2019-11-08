import { createReducer, on } from '@ngrx/store';

import {
  initializeReportTypes,
  loadReportTypes,
  loadReportTypesSuccess,
  loadReportTypesFailure,
  setCurrentReportType
} from '../actions/report-type.actions';
import {
  initialFormState,
  ReportTypeState,
  reportTypeAdapter
} from '../states/report-type.state';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from '../states/base.state';

export const reducer = createReducer(
  initialFormState,
  on(initializeReportTypes, state => ({ ...state, initialized: true })),
  on(loadReportTypes, state => ({
    ...state,
    ...loadingBaseState,
    loading: state.initialized ? state.loading : true,
    loaded: state.initialized ? state.loaded : false
  })),

  on(loadReportTypesSuccess, (state, { reportTypes }) =>
    reportTypeAdapter.addMany(reportTypes, {
      ...state,
      ...loadedBaseState
    })
  ),
  on(setCurrentReportType, (state, { currentReportType }) => ({
    ...state,
    currentReportType: currentReportType
  }))
);

export function reportTypeReducer(state, action): ReportTypeState {
  return reducer(state, action);
}
