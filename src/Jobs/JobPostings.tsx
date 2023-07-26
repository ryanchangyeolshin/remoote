import React, { useState, useEffect } from 'react';
import { Pagination, Loader, Container, Input } from 'semantic-ui-react';
import axios from 'axios';
import { debounce } from 'lodash';
import JobDetailModal from './JobDetailModal';
import { type JobPostingType } from '../Types/Jobs/types';
import JobPosting from './JobPosting';
import './JobPosting.scss';

const JobPostings: React.FunctionComponent = () => {
  const [jobPostings, setJobPostings] = useState<JobPostingType[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<number>(1);
  const [selectedJobPosting, setSelectedJobPosting] = useState<JobPostingType | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('Software Engineer');

  const handlePaginationChange = (_e: any, { activePage }: any) => {
    setIsLoaded(false);
    setActivePage(activePage);
  };

  const fetchJobPostings = debounce((query: string) => {
    if (process.env.REACT_APP_API_HOST != null) {
      const url: string = `https://${process.env.REACT_APP_API_HOST}/search`;
      const queryParam: string = query !== '' ? query : 'Software Engineer';
      const options = {
        method: 'GET',
        url,
        params: {
          query: queryParam,
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
  }, 3000);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (process.env.REACT_APP_API_HOST != null) {
      fetchJobPostings(searchQuery);
    }
  }, [activePage, searchQuery]);

  return (
    <Container className="job-postings-container">
      <Input loading={!isLoaded} icon='user' iconPosition='left' placeholder='Search...' onChange={handleInputChange}/>
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
          <div className='loader-container'>
            <Loader active inline='centered' content='Loading' />
          </div>)
      }
      {selectedJobPosting !== null && (
        <JobDetailModal jobPosting={selectedJobPosting} setSelectedJobPosting={setSelectedJobPosting} />)
      }
    </Container>
  );
};

export default JobPostings;
