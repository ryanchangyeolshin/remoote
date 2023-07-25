import React, { useState } from 'react';
import UserProfileInformation from './UserProfileInformation';
import UserProfileSavedJobs from './UserProfileSavedJobs.';

interface User {
  name: string
  location: string
  username: string
  telephone: string
  savedJobs: number
}

const UserProfile: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const user: User = {
    name: 'John Doe',
    location: 'New York, NY, USA, 10001',
    username: 'johndoe123',
    telephone: '+1 123-456-7890',
    savedJobs: 25
  };

  const toggleCollapse = () => {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  };

  return (
    <div className='user-profile-container'>
      <UserProfileInformation user={user} isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
      <UserProfileSavedJobs isCollapsed={isCollapsed} />
    </div>
  );
};

export default UserProfile;
