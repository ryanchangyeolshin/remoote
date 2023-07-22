import React from 'react';
import { type JobPostingType } from '../Types/Jobs/types';
import JobPosting from './JobPosting';

interface JobPostingsProps {
  jobPostings: JobPostingType[]
}

const JobPostings: React.FunctionComponent<JobPostingsProps> = (props) => {
  const { jobPostings } = props;

  return (
    <>
      {jobPostings.map((jobPosting: JobPostingType) => (
        <JobPosting key={jobPosting.id} jobPosting={jobPosting} />
      ))}
    </>
  );
};

export default JobPostings;
