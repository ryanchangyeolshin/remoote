import React from 'react';
import { Container } from 'semantic-ui-react';
import NavigationBar from './Navigation/NavigationBar';
import JobPosting from './Jobs/JobPosting';
import 'semantic-ui-css/semantic.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Container>
        <JobPosting />
      </Container>
    </div>
  );
};

export default App;
