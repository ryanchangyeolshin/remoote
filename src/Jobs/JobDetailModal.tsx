import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Image, Header, Button, Label } from 'semantic-ui-react';
import { type JobPostingType } from '../Types/Jobs/types';
import { provideSalary, provideLocation } from '../utils/dataManipulation';
import { removeJob, saveJob } from '../actions/jobActions';

interface JobDetailModalProps {
  jobPosting: JobPostingType
  setSelectedJobPosting: (selectedJobPosting: JobPostingType | null) => void
  saved?: boolean
}

const JobDetailModal: React.FC<JobDetailModalProps> = (props) => {
  const dispatch = useDispatch();
  const { jobPosting, setSelectedJobPosting, saved = false } = props;
  const salary: string | null = provideSalary(jobPosting.job_min_salary, jobPosting.job_max_salary, jobPosting.job_salary_currency);
  const location: string | null = provideLocation(jobPosting.job_city, jobPosting.job_state, jobPosting.job_country);

  const handleSaveJob = useCallback(() => {
    dispatch(saveJob(jobPosting));
    setSelectedJobPosting(null);
  }, [jobPosting, saveJob, setSelectedJobPosting]);

  const handleRemoveJob = useCallback(() => {
    dispatch(removeJob(jobPosting.job_id));
    setSelectedJobPosting(null);
  }, [jobPosting, removeJob, setSelectedJobPosting]);

  return (
    <Modal
      onClose={() => { setSelectedJobPosting(null); }}
      open={jobPosting !== null}
    >
      <Modal.Header className='job-posting-detail-header'>
        <Image size='tiny' src={jobPosting.employer_logo} wrapped />
        <div className='job-posting-detail-position-information'>
          <div>
            {jobPosting.job_title}
          </div>
          <div>
            {jobPosting.employer_name}
          </div>
        </div>
      </Modal.Header>
      <Modal.Content>
        <div className='job-posting-detail-location-and-salary'>
          {(location != null) && (<Label>{location}</Label>)}
          {(salary != null) && (<Label>{salary}</Label>)}
        </div>
        <Modal.Description>
          <Header>Job Description</Header>
          <p>
            {jobPosting.job_description}
          </p>
          {jobPosting.job_highlights?.Responsibilities !== undefined && (
            <>
              <Header>Job Responsibilities</Header>
              {jobPosting.job_highlights?.Responsibilities.map((responsibility, index) => <p key={`responsibility-${index}`}>{`${index + 1}. ${responsibility}`}</p>)}
            </>
          )}
          {jobPosting.job_highlights?.Qualifications !== undefined && (
            <>
              <Header>Job Qualifications</Header>
              {jobPosting.job_highlights?.Qualifications.map((qualification, index) => <p key={`responsibility-${index}`}>{`${index + 1}. ${qualification}`}</p>)}
            </>
          )}
          {jobPosting.job_highlights?.Benefits !== undefined && (
            <>
              <Header>Job Benefits</Header>
              {jobPosting.job_highlights?.Benefits.map((benefit, index) => <p key={`responsibility-${index}`}>{`${index + 1}. ${benefit}`}</p>)}
            </>
          )}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => { setSelectedJobPosting(null); }}>
          Close
        </Button>
        {
          saved ? (<Button negative onClick={handleRemoveJob}>Remove Job</Button>) : (<Button primary onClick={handleSaveJob}>Save Job</Button>)
        }
        <Button
          content="Apply"
          positive
          as="a"
          href={jobPosting.job_apply_link}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default JobDetailModal;
