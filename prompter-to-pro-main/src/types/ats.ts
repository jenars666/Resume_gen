export interface ATSAnalysisResult {
  overallScore: number; // 0-100
  categoryScores: {
    contactInfo: number;
    skills: number;
    experience: number;
    education: number;
    keywords: number;
    formatting: number;
    achievements: number;
    actionVerbs: number;
  };
  recommendations: Array<{
    category: string;
    priority: 'high' | 'medium' | 'low';
    message: string;
    improvement: string;
  }>;
  strengths: string[];
  missingKeywords?: string[];
  matchedKeywords?: string[];
}

export interface ATSMetrics {
  hasEmail: boolean;
  hasPhone: boolean;
  hasLinkedIn: boolean;
  hasSummary: boolean;
  hasEducation: boolean;
  hasExperience: boolean;
  hasSkills: boolean;
  hasProjects: boolean;
  hasAchievements: boolean;
  skillsCount: number;
  experienceCount: number;
  projectsCount: number;
  achievementsCount: number;
  totalResponsibilities: number;
  hasQuantifiableMetrics: boolean;
  actionVerbsCount: number;
  resumeLength: number;
}

