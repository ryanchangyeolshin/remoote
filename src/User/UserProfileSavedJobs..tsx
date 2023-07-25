import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

interface UserProfileSavedJobsProps {
  isCollapsed: boolean
}

const UserProfileSavedJobs: React.FC<UserProfileSavedJobsProps> = (props) => {
  const { isCollapsed } = props;

  return (
    <Segment className={`user-profile-saved-jobs-container ${isCollapsed ? 'collapsed' : ''}`}>
      <div className={`user-profile-saved-jobs ${isCollapsed ? 'collapsed' : ''}`}>
        <Header>Saved Jobs</Header>
        askudgauidhgqawgdgqiwudgqiawdguiagduiawgduiawgduiawgduiawgdiuawgdiua
      </div>
    </Segment>
  );
};

export default UserProfileSavedJobs;
