import React from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Navigation/NavigationBar';
import JobPostings from './Jobs/JobPostings';
import UserProfile from './User/UserProfile';
import 'semantic-ui-css/semantic.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Container>
          <Routes>
            <Route path="/" element={<JobPostings />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
};

export default App;
