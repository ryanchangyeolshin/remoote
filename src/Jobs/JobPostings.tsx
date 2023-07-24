import React, { useState, useEffect } from 'react';
import { Pagination, Dimmer, Loader, Container } from 'semantic-ui-react';
import axios from 'axios';
import JobDetailModal from './JobDetailModal';
import { type JobPostingType } from '../Types/Jobs/types';
import JobPosting from './JobPosting';
import './JobPosting.scss';

const JobPostings: React.FunctionComponent = () => {
  const [jobPostings, setJobPostings] = useState<JobPostingType[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<number>(1);
  const [selectedJobPosting, setSelectedJobPosting] = useState<JobPostingType | null>(null);

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
          setJobPostings(data.data);
          setIsLoaded(true);
        })
        .catch(console.error);
    }
  }, [activePage]);

  return (
    <Container className="job-postings-container">
      {isLoaded
        ? (
          <>
            {jobPostings.map((jobPosting: JobPostingType) => (
              <JobPosting key={jobPosting.job_id} jobPosting={jobPosting} setSelectedJobPosting={setSelectedJobPosting} />
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
      {selectedJobPosting !== null && (
        <JobDetailModal jobPosting={selectedJobPosting} setSelectedJobPosting={setSelectedJobPosting} />)
      }
    </Container>
  );
};

export default JobPostings;
