import React from 'react';
import { Container } from 'semantic-ui-react';
import NavigationBar from './Navigation/NavigationBar';
import JobPostings from './Jobs/JobPostings';
import 'semantic-ui-css/semantic.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Container>
        <JobPostings />
      </Container>
    </div>
  );
};

export default App;
