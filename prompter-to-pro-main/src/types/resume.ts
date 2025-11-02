export interface ResumeData {
  name: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  summary?: string;
  education?: Array<{
    degree: string;
    institution: string;
    year?: string;
    gpa?: string;
  }>;
  skills?: string[];
  experience?: Array<{
    position: string;
    company: string;
    duration?: string;
    responsibilities?: string[];
  }>;
  projects?: Array<{
    name: string;
    description: string;
    technologies?: string[];
  }>;
  achievements?: string[];
}