import { createSelector } from 'reselect';
import { type RootState } from '../store';

export const selectSavedJobs = createSelector(
  (state: RootState) => state.jobs.savedJobs,
  (savedJobs) => savedJobs
);
