import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { type JobPostingType } from '../Types/Jobs/types';
import JobPosting from './JobPosting';

const JobPostings: React.FunctionComponent = () => {
  const [jobPostings, setJobPostings] = useState<JobPostingType[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (process.env.REACT_APP_API_HOST != null) {
      const url: string = `https://${process.env.REACT_APP_API_HOST}/jobs/page/1`;
      const options = {
        method: 'GET',
        url,
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
        }
      };

      axios.request(options)
        .then(({ data }) => {
          console.log(data);
          setJobPostings(data.items);
          setIsLoaded(true);
        })
        .catch(console.error);
    }
  }, []);

  return (
    <TransitionGroup>
      {isLoaded && (
        <CSSTransition classNames="fade" timeout={300}>
          <>
            {jobPostings.map((jobPosting: JobPostingType) => (
              <JobPosting key={jobPosting._id} jobPosting={jobPosting} />
            ))}
          </>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default JobPostings;
