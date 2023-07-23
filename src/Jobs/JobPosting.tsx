import React from 'react';
import { Segment, Item, Label } from 'semantic-ui-react';
import { provideJobPostingTime, provideSalary } from '../utils/dataManipulation';
import { type JobPostingType } from '../Types/Jobs/types';

interface JobPostingProps {
  jobPosting: JobPostingType
}

const JobPosting: React.FunctionComponent<JobPostingProps> = (props) => {
  const { jobPosting } = props;

  return (
    <Segment>
      <Item.Group divided>
        <Item>
          <Item.Image size='tiny' src={jobPosting.employer_logo} />
          <Item.Content>
            <Item.Header as='a'>{jobPosting.job_title}</Item.Header>
            <Item.Meta>
              <span className='cinema'>{jobPosting.employer_name}</span>
            </Item.Meta>
            <Item.Description>{ }</Item.Description>
            <Item.Extra>
              <Label>Job Type: {jobPosting.job_employment_type}</Label>
              <Label>Location: {`${jobPosting.job_city}, ${jobPosting.job_state} ${jobPosting.job_country}`}</Label>
              <Label>{provideJobPostingTime(jobPosting.job_posted_at_datetime_utc)}</Label>
              <Label>{provideSalary(jobPosting.job_min_salary, jobPosting.job_max_salary)}</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};

export default JobPosting;
