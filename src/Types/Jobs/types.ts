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
  job_city?: string
  job_state?: string
  job_country?: string
  job_posted_at_datetime_utc: string
  job_apply_link: string
  job_description: string
  job_highlights?: JobHighlight
  job_min_salary: number | null
  job_max_salary: number | null
};
