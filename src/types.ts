export interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
    image?: string;
}

export interface ExperienceItem {
    company: string;
    role: string;
    duration: string;
    description: string;
}

export interface EducationItem {
    institution: string;
    degree: string;
    year: string;
}

export interface ProjectItem {
    name: string;
    description: string;
    technologies: string[];
    link?: string;
}

export interface PortfolioData {
    personalInfo: PersonalInfo;
    experience: ExperienceItem[];
    education: EducationItem[];
    skills: string[];
    projects: ProjectItem[];
}
