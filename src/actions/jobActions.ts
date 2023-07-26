import { JobActionTypes, type JobPostingType, type SaveJobAction } from '../Types/Jobs/types';

export const saveJob = (jobDetails: JobPostingType): SaveJobAction => {
  console.log(jobDetails);
  return {
    type: JobActionTypes.SAVE_JOB,
    payload: jobDetails
  };
};
