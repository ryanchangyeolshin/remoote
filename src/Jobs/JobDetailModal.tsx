import React from 'react';
import { Modal, Image, Header, Button } from 'semantic-ui-react';
import { type JobPostingType } from '../Types/Jobs/types';

interface JobDetailModalProps {
  jobPosting: JobPostingType
  setSelectedJobPosting: (selectedJobPosting: JobPostingType | null) => void
}

const JobDetailModal: React.FC<JobDetailModalProps> = (props) => {
  const { jobPosting, setSelectedJobPosting } = props;

  return (
    <Modal
      onClose={() => { setSelectedJobPosting(null); }}
      open={jobPosting !== null}
    >
      <Modal.Header>{jobPosting.job_title}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={jobPosting.employer_logo} wrapped />
        <Modal.Description>
          {jobPosting.job_description}
          <Header>Job Description</Header>
          <p>
            {jobPosting.job_description}
          </p>
          <Header>Job Responsibilities</Header>
          {jobPosting.job_highlights?.Responsibilities.map((responsibility, index) => <p key={`responsibility-${index}`}>{`${index}. ${responsibility}`}</p>)}
          <Header>Job Qualification</Header>
          {jobPosting.job_highlights?.Qualifications.map((qualification, index) => <p key={`qualification-${index}`}>{`${index}. ${qualification}`}</p>)}
          <Header>Job Benefits</Header>
          {jobPosting.job_highlights?.Benefits.map((benefit, index) => <p key={`benefit-${index}`}>{`${index}. ${benefit}`}</p>)}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black'>
          Close
        </Button>
        <Button
          content="Apply"
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default JobDetailModal;
