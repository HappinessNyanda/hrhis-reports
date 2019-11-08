import { createAction, props } from '@ngrx/store';
import { ReportType } from '../../core/models/report-type.model';

export const initializeReportTypes = createAction(
  '[ReportTypes] Initialize Report Types'
);

export const loadReportTypes = createAction(
  '[ReportTypes] Load Report Type',
  props<{}>()
);

export const loadReportTypesSuccess = createAction(
  '[ReportTypes] Load Report Type Success',
  props<{ reportTypes: ReportType[] }>()
);
export const loadReportTypesFailure = createAction(
  '[ReportTypes] Load Report Type Failure',
  props<{ error: any }>()
);

export const setCurrentReportType = createAction(
  '[ReportTypes] Set Current Report Type',
  props<{ currentReportTypeId: string }>()
);
