import React from 'react';
import { Segment, Item, Label } from 'semantic-ui-react';
import { provideJobPostingTime, provideSalary, provideLocation } from '../utils/dataManipulation';
import { type JobPostingType } from '../Types/Jobs/types';

interface JobPostingProps {
  jobPosting: JobPostingType
  setSelectedJobPosting: (selectedJobPosting: JobPostingType | null) => void
}

const JobPosting: React.FunctionComponent<JobPostingProps> = (props) => {
  const { jobPosting, setSelectedJobPosting } = props;
  const salary: string | null = provideSalary(jobPosting.job_min_salary, jobPosting.job_max_salary, jobPosting.job_salary_currency);
  const location: string | null = provideLocation(jobPosting.job_city, jobPosting.job_state, jobPosting.job_country);

  return (
    <Segment className='job-posting' onClick={() => { setSelectedJobPosting(jobPosting); }}>
      <Item.Group divided>
        <Item>
          <Item.Image size='tiny' src={jobPosting.employer_logo} />
          <Item.Content>
            <Item.Header>{jobPosting.job_title}</Item.Header>
            <Item.Meta>
              <span className='cinema'>{jobPosting.employer_name}</span>
            </Item.Meta>
            <Item.Description>{ }</Item.Description>
            <Item.Extra>
              <Label>Job Type: {jobPosting.job_employment_type}</Label>
              {(location != null) && (<Label>{location}</Label>)}
              <Label>{provideJobPostingTime(jobPosting.job_posted_at_datetime_utc)}</Label>
              {(salary != null) && (<Label>{salary}</Label>)}
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};

export default JobPosting;
