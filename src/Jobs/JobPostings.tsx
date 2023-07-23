import React, { useState, useRef, useEffect } from 'react';
import { Pagination, Dimmer, Loader } from 'semantic-ui-react';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { type JobPostingType } from '../Types/Jobs/types';
import JobPosting from './JobPosting';
import './JobPosting.scss';

const JobPostings: React.FunctionComponent = () => {
  const [jobPostings, setJobPostings] = useState<JobPostingType[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<number>(1);
  const nodeRef = useRef(null);

  const handlePaginationChange = (_e: any, { activePage }: any) => {
    setIsLoaded(false);
    setActivePage(activePage);
  };

  useEffect(() => {
    if (process.env.REACT_APP_API_HOST != null) {
      const url: string = `https://${process.env.REACT_APP_API_HOST}/search`;
      const options = {
        method: 'GET',
        url,
        params: {
          query: 'UI/UX Designer',
          page: activePage,
          num_pages: '1',
          remote_jobs_only: 'true'
        },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
        }
      };

      axios.request(options)
        .then(({ data }) => {
          console.log(data);
          setJobPostings(data.data);
          setIsLoaded(true);
        })
        .catch(console.error);
    }
  }, [activePage]);

  return (
    <TransitionGroup>
      {isLoaded
        ? (
          <>
            {jobPostings.map((jobPosting: JobPostingType) => (
              <CSSTransition key={jobPosting.job_id} nodeRef={nodeRef} classNames="fade" timeout={300}>
                <JobPosting jobPosting={jobPosting} />
              </CSSTransition>
            ))}

            <Pagination
              activePage={activePage}
              onPageChange={handlePaginationChange}
              totalPages={100}
            />
          </>)
        : (
          <Dimmer active inverted>
            <Loader content='Loading' />
          </Dimmer>)
      }
    </TransitionGroup>
  );
};

export default JobPostings;
