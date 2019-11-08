import { BaseState, initialBaseState } from './base.state';
import { ReportType } from '../../core/models/report-type.model';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';

export interface ReportTypeState extends EntityState<ReportType>, BaseState {
  initialized: boolean;
  currentReportTypeId: string;
}

export const reportTypeAdapter: EntityAdapter<ReportType> = createEntityAdapter<
  ReportType
>({
  sortComparer: null
});

export const initialFormState: ReportTypeState = reportTypeAdapter.getInitialState(
  {
    ...initialBaseState,
    initialized: false,
    currentReportTypeId: ''
  }
);
