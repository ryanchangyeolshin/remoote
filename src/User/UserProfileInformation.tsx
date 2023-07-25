import React from 'react';
import { Image, Header, Segment, Label, Icon } from 'semantic-ui-react';
import { type UserType } from '../Types/Jobs/types';

interface UserProfileInformationProps {
  user: UserType
  isCollapsed: boolean
  toggleCollapse: () => void
}

const UserProfileInformation: React.FC<UserProfileInformationProps> = (props) => {
  const { user, isCollapsed, toggleCollapse } = props;

  return (
    <Segment className={`user-profile-information-container ${isCollapsed ? 'collapsed' : ''}`}>
      <div className={`user-profile-information ${isCollapsed ? 'collapsed' : ''}`}>
        <Image circular size="huge" centered>
          <Icon name="user" size="huge" />
        </Image>
        <Header as="h2" textAlign="center">{user.name}</Header>
        <p><strong>Location:</strong> {user.location}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Telephone:</strong> {user.telephone}</p>
        <div className="saved-jobs">
          <Label color="blue">{user.savedJobs} jobs saved</Label>
        </div>
      </div>
      <div className='user-profile-collapse' onClick={toggleCollapse}>
        <Icon name="chevron right" />
      </div>
    </Segment>
  );
};

export default UserProfileInformation;
