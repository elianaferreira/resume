export interface ExperienceProject {
  name: string;
  responsibilities: string[];
}

export interface ExperienceRole {
  title: string;

  projects: ExperienceProject[];
}

export interface ExperienceCompany {
  company: string;
  startDate: string;
  endDate: string;
  roles: ExperienceRole[];
}

export type ExperienceData = ExperienceCompany[];
