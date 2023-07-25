export interface JobHighlight {
  Qualifications: string[]
  Responsibilities: string[]
  Benefits: string[]
}

export interface JobPostingType {
  job_id: string
  employer_logo: string
  job_title: string
  employer_name: string
  job_employment_type: string
  job_city: string | null
  job_state: string | null
  job_country: string | null
  job_posted_at_datetime_utc: string
  job_apply_link: string
  job_description: string
  job_highlights?: JobHighlight
  job_min_salary: number | null
  job_max_salary: number | null
  job_salary_currency: string
};

export interface UserType {
  name: string
  location: string
  username: string
  telephone: string
  savedJobs: number
};
