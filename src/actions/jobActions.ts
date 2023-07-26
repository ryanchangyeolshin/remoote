import { JobActionTypes, type JobPostingType, type SaveJobAction } from '../Types/Jobs/types';

export const saveJob = (jobDetails: JobPostingType): SaveJobAction => {
  return {
    type: JobActionTypes.SAVE_JOB,
    payload: jobDetails
  };
};
