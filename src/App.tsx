import React from 'react';
import { Container } from 'semantic-ui-react';
import NavigationBar from './Navigation/NavigationBar';
import JobPostings from './Jobs/JobPostings';
import { type JobPostingType } from './Types/Jobs/types';
import 'semantic-ui-css/semantic.min.css';

const App: React.FC = () => {
  const data: JobPostingType[] = [
    {
      _id: '6246db5be7676f0018395187',
      company_logo: 'https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg',
      id: 'mailchimp-3966706',
      title: 'Staff Systems Engineer, Foundry',
      location: 'remote',
      company_name: 'mailchimp',
      date: '2022-04-01T11:00:43.063Z'
    },
    {
      _id: '6246db5be7676f0018395187',
      company_logo: 'https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg',
      id: 'mailchimp-3966706',
      title: 'Staff Systems Engineer, Foundry',
      location: 'remote',
      company_name: 'mailchimp',
      date: '2022-04-01T11:00:43.063Z'
    }
  ];

  return (
    <div className="App">
      <NavigationBar />
      <Container>
        <JobPostings jobPostings={data} />
      </Container>
    </div>
  );
};

export default App;
