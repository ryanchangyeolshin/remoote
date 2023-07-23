import React from 'react';
import { Segment, Item, Label } from 'semantic-ui-react';
import { capitalizeFirstLetter, provideJobPostingTime } from '../utils/dataManipulation';
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
          <Item.Image size='tiny' src={jobPosting.company_logo} />
          <Item.Content>
            <Item.Header as='a'>{jobPosting.title}</Item.Header>
            <Item.Meta>
              <span className='cinema'>{jobPosting.company_name}</span>
            </Item.Meta>
            <Item.Description>{ }</Item.Description>
            <Item.Extra>
              <Label>Location: {capitalizeFirstLetter(jobPosting.location)}</Label>
              <Label>{provideJobPostingTime(jobPosting.date)}</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};

export default JobPosting;
