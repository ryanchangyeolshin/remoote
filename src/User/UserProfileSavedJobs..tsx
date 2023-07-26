import React from 'react';
import { connect } from 'react-redux';
import { Header, Segment } from 'semantic-ui-react';
import { selectSavedJobs } from '../selectors/jobSelectors';
import { type JobPostingType } from '../Types/Jobs/types';
import { type RootState } from '../store';
import JobPosting from '../Jobs/JobPosting';

interface UserProfileSavedJobsProps {
  isCollapsed: boolean
  setSelectedJobPosting: (selectedJobPosting: JobPostingType | null) => void
  savedJobs: JobPostingType[]
}

const UserProfileSavedJobs: React.FC<UserProfileSavedJobsProps> = (props) => {
  const { isCollapsed, savedJobs, setSelectedJobPosting } = props;
  console.log(savedJobs);

  return (
    <Segment className={`user-profile-saved-jobs-container ${isCollapsed ? 'collapsed' : ''}`}>
      <div className={`user-profile-saved-jobs ${isCollapsed ? 'collapsed' : ''}`}>
        <Header>Saved Jobs</Header>
        {savedJobs.map((savedJob: JobPostingType) => (
          <JobPosting key={savedJob.job_id} jobPosting={savedJob} setSelectedJobPosting={setSelectedJobPosting} />
        ))}
      </div>
    </Segment>
  );
};

const mapStateToProps = (state: RootState) => ({
  savedJobs: selectSavedJobs(state)
});

export default connect(mapStateToProps)(UserProfileSavedJobs);
