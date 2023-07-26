import React from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store';
import NavigationBar from './Navigation/NavigationBar';
import JobPostings from './Jobs/JobPostings';
import UserProfile from './User/UserProfile';
import 'semantic-ui-css/semantic.min.css';

const store = configureStore({
  reducer: rootReducer
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
