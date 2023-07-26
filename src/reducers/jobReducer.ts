import { type AnyAction, type Reducer } from 'redux';
import { JobActionTypes, type JobState } from '../Types/Jobs/types';

const initialState: JobState = {
  savedJobs: []
};

const jobReducer: Reducer<JobState, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    case JobActionTypes.SAVE_JOB:
      return {
        ...state,
        savedJobs: [...state.savedJobs, action.payload]
      };
    default:
      return state;
  }
};

export default jobReducer;
