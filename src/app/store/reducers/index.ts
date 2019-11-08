import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { ReportTypeState } from '../states/report-type.state';
import { reportTypeReducer } from './report-type.reducer';
export interface State {
  reportType: ReportTypeState;
}

export const reducers: ActionReducerMap<State> = {
  reportType: reportTypeReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

/**
 * Root state selector
 */
export const getRootState = (state: State) => state;
