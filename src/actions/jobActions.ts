import { JobActionTypes, type RemoveJobAction, type JobPostingType, type SaveJobAction } from '../Types/Jobs/types';

export const saveJob = (jobDetails: JobPostingType): SaveJobAction => {
  return {
    type: JobActionTypes.SAVE_JOB,
    payload: jobDetails
  };
};

export const removeJob = (jobId: string): RemoveJobAction => {
  return {
    type: JobActionTypes.REMOVE_JOB,
    payload: jobId
  };
};
