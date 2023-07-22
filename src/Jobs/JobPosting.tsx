import React from 'react';
import { Segment, Item, Label } from 'semantic-ui-react';
import { capitalizeFirstLetter } from '../utils/dataManipulation';

interface JobPostingType {
  _id: string
  company_logo: string
  id: string
  title: string
  location: string
  company_name: string
  date: string
}

const JobPosting: React.FC = () => {
  const data: JobPostingType = {
    _id: '6246db5be7676f0018395187',
    company_logo: 'https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg',
    id: 'mailchimp-3966706',
    title: 'Staff Systems Engineer, Foundry',
    location: 'remote',
    company_name: 'mailchimp',
    date: '2022-04-01T11:00:43.063Z'
  };

  return (
    <Segment>
      <Item.Group divided>
        <Item>
          <Item.Image size='tiny' src={data.company_logo} />
          <Item.Content>
            <Item.Header as='a'>{data.title}</Item.Header>
            <Item.Meta>
              <span className='cinema'>{data.company_name}</span>
            </Item.Meta>
            <Item.Description>{ }</Item.Description>
            <Item.Extra>
              <Label>Location: {capitalizeFirstLetter(data.location)}</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};

export default JobPosting;
