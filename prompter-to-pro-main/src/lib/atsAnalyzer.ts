import { ResumeData } from "@/types/resume";
import { ATSAnalysisResult, ATSMetrics } from "@/types/ats";

// Common action verbs that ATS systems recognize
const ACTION_VERBS = [
  'achieved', 'acquired', 'acted', 'adapted', 'addressed', 'administered', 'advanced',
  'advised', 'allocated', 'analyzed', 'applied', 'approved', 'assembled', 'assessed',
  'assigned', 'assisted', 'attained', 'authored', 'automated', 'balanced', 'boosted',
  'built', 'calculated', 'catalyzed', 'championed', 'changed', 'clarified', 'coached',
  'collaborated', 'collected', 'communicated', 'completed', 'composed', 'computed',
  'conceived', 'conducted', 'consolidated', 'constructed', 'consulted', 'controlled',
  'converted', 'coordinated', 'created', 'critiqued', 'cut', 'decreased', 'defined',
  'delegated', 'delivered', 'demonstrated', 'designed', 'determined', 'developed',
  'devised', 'diagnosed', 'directed', 'discovered', 'distributed', 'drafted', 'earned',
  'edited', 'educated', 'eliminated', 'employed', 'enabled', 'enforced', 'engineered',
  'enhanced', 'enlarged', 'enlisted', 'ensured', 'established', 'estimated', 'evaluated',
  'examined', 'exceeded', 'executed', 'expanded', 'expedited', 'experimented', 'explained',
  'explored', 'exported', 'facilitated', 'finalized', 'financed', 'focused', 'forecasted',
  'formed', 'formulated', 'founded', 'fostered', 'generated', 'governed', 'granted',
  'guided', 'handled', 'headed', 'helped', 'hired', 'identified', 'illustrated',
  'implemented', 'improved', 'improvised', 'increased', 'influenced', 'informed',
  'initiated', 'innovated', 'inspected', 'inspired', 'installed', 'instituted', 'instructed',
  'integrated', 'interpreted', 'intervened', 'interviewed', 'introduced', 'invented',
  'investigated', 'involved', 'issued', 'launched', 'led', 'learned', 'lectured', 'licensed',
  'linked', 'maintained', 'managed', 'mapped', 'marketed', 'mastered', 'maximized',
  'measured', 'mediated', 'merged', 'minimized', 'modernized', 'modified', 'monitored',
  'motivated', 'named', 'negotiated', 'nominated', 'obtained', 'offered', 'operated',
  'optimized', 'orchestrated', 'ordered', 'organized', 'originated', 'overhauled', 'oversaw',
  'participated', 'patented', 'performed', 'persuaded', 'pioneered', 'planned', 'played',
  'positioned', 'predicted', 'prepared', 'presented', 'preserved', 'presided', 'processed',
  'procured', 'produced', 'programmed', 'projected', 'promoted', 'proposed', 'provided',
  'publicized', 'published', 'purchased', 'qualified', 'quantified', 'questioned',
  'recommended', 'recorded', 'recruited', 'reduced', 'referred', 'regulated', 'reinforced',
  'rejuvenated', 'related', 'relayed', 'reorganized', 'repaired', 'replaced', 'reported',
  'represented', 'researched', 'resolved', 'responded', 'restored', 'restructured',
  'retained', 'retrieved', 'revamped', 'reviewed', 'revised', 'revitalized', 'saved',
  'scheduled', 'screened', 'secured', 'selected', 'sold', 'served', 'set', 'shaped',
  'simplified', 'simulated', 'sold', 'solved', 'sorted', 'spearheaded', 'specialized',
  'specified', 'spoke', 'sponsored', 'standardized', 'started', 'stimulated', 'streamlined',
  'strengthened', 'structured', 'studied', 'succeeded', 'suggested', 'summarized',
  'supervised', 'supplied', 'supported', 'surpassed', 'sustained', 'synthesized',
  'systematized', 'targeted', 'taught', 'tested', 'trained', 'transformed', 'translated',
  'traveled', 'treated', 'trimmed', 'troubleshot', 'uncovered', 'understood', 'undertook',
  'unified', 'updated', 'upgraded', 'used', 'utilized', 'validated', 'valued', 'verified',
  'visualized', 'volunteered', 'warranted', 'won', 'wrote'
];

// Numbers and percentage indicators
const QUANTIFIABLE_PATTERNS = [
  /\d+%/g,                    // Percentages: 50%
  /\$\d+/g,                   // Money: $1000
  /\d+\.\d+/g,                // Decimals: 3.5
  /\d+\+/g,                   // More than: 100+
  /\d+[kKmMbB]/g,             // Thousands/millions: 100k, 1M
  /\b\d+\b/g,                 // Any standalone numbers
  /increased|decreased|reduced|improved|boosted|raised|lowered/i,  // Comparison words
  /over|under|more than|less than|above|below/i,
];

export function analyzeATS(resumeData: ResumeData, jobDescription?: string): ATSAnalysisResult {
  const metrics = calculateMetrics(resumeData);
  const categoryScores = calculateCategoryScores(metrics, resumeData, jobDescription);
  const overallScore = calculateOverallScore(categoryScores);
  const recommendations = generateRecommendations(metrics, categoryScores, resumeData, jobDescription);
  const strengths = identifyStrengths(metrics, categoryScores);
  const keywordAnalysis = analyzeKeywords(resumeData, jobDescription);

  return {
    overallScore,
    categoryScores,
    recommendations,
    strengths,
    missingKeywords: keywordAnalysis.missing,
    matchedKeywords: keywordAnalysis.matched,
  };
}

function calculateMetrics(resumeData: ResumeData): ATSMetrics {
  const allText = [
    resumeData.summary || '',
    ...(resumeData.experience || []).flatMap(exp => [
      exp.position,
      exp.company,
      ...(exp.responsibilities || [])
    ]),
    ...(resumeData.projects || []).map(p => `${p.name} ${p.description} ${(p.technologies || []).join(' ')}`),
    ...(resumeData.achievements || []),
    (resumeData.skills || []).join(' ')
  ].join(' ').toLowerCase();

  const actionVerbsCount = ACTION_VERBS.filter(verb => 
    allText.includes(verb.toLowerCase())
  ).length;

  const hasQuantifiableMetrics = QUANTIFIABLE_PATTERNS.some(pattern => 
    pattern.test(allText)
  );

  const totalResponsibilities = (resumeData.experience || []).reduce(
    (sum, exp) => sum + (exp.responsibilities?.length || 0),
    0
  );

  const resumeLength = allText.split(/\s+/).length;

  return {
    hasEmail: !!resumeData.email,
    hasPhone: !!resumeData.phone,
    hasLinkedIn: !!resumeData.linkedin,
    hasSummary: !!resumeData.summary,
    hasEducation: !!(resumeData.education && resumeData.education.length > 0),
    hasExperience: !!(resumeData.experience && resumeData.experience.length > 0),
    hasSkills: !!(resumeData.skills && resumeData.skills.length > 0),
    hasProjects: !!(resumeData.projects && resumeData.projects.length > 0),
    hasAchievements: !!(resumeData.achievements && resumeData.achievements.length > 0),
    skillsCount: resumeData.skills?.length || 0,
    experienceCount: resumeData.experience?.length || 0,
    projectsCount: resumeData.projects?.length || 0,
    achievementsCount: resumeData.achievements?.length || 0,
    totalResponsibilities,
    hasQuantifiableMetrics,
    actionVerbsCount,
    resumeLength,
  };
}

function calculateCategoryScores(
  metrics: ATSMetrics,
  resumeData: ResumeData,
  jobDescription?: string
) {
  // Contact Information Score (0-100)
  const contactInfo = (
    (metrics.hasEmail ? 40 : 0) +
    (metrics.hasPhone ? 30 : 0) +
    (metrics.hasLinkedIn ? 30 : 0)
  );

  // Skills Score (0-100)
  let skills = 0;
  if (metrics.hasSkills) {
    skills = Math.min(100, (metrics.skillsCount / 15) * 100); // Optimal: 10-15 skills
    if (metrics.skillsCount < 5) skills *= 0.7;
    if (metrics.skillsCount > 20) skills *= 0.9; // Too many can hurt
  }

  // Experience Score (0-100)
  let experience = 0;
  if (metrics.hasExperience) {
    experience = Math.min(100, (metrics.experienceCount / 3) * 50); // Each experience adds points
    const avgResponsibilities = metrics.totalResponsibilities / metrics.experienceCount;
    experience += Math.min(50, (avgResponsibilities / 4) * 50); // 3-5 bullets per role is optimal
  }

  // Education Score (0-100)
  const education = metrics.hasEducation ? 100 : 0;

  // Keywords Score (0-100) - based on job description match if provided
  let keywords = 75; // Default score
  if (jobDescription) {
    keywords = calculateKeywordMatch(resumeData, jobDescription);
  }

  // Formatting Score (0-100)
  const formatting = (
    (metrics.hasSummary ? 20 : 0) +
    (metrics.hasEducation ? 15 : 0) +
    (metrics.hasExperience ? 25 : 0) +
    (metrics.hasSkills ? 15 : 0) +
    (metrics.hasProjects ? 15 : 0) +
    (metrics.hasAchievements ? 10 : 0)
  );

  // Achievements Score (0-100)
  let achievements = 0;
  if (metrics.hasAchievements) {
    achievements = Math.min(100, (metrics.achievementsCount / 3) * 100);
  }
  if (metrics.hasQuantifiableMetrics) {
    achievements = Math.min(100, achievements + 30);
  }

  // Action Verbs Score (0-100)
  const actionVerbs = Math.min(100, (metrics.actionVerbsCount / 10) * 100);

  return {
    contactInfo,
    skills,
    experience,
    education,
    keywords,
    formatting,
    achievements,
    actionVerbs,
  };
}

function calculateKeywordMatch(resumeData: ResumeData, jobDescription: string): number {
  const jdLower = jobDescription.toLowerCase();
  
  // Extract important keywords from job description (skills, technologies, requirements)
  const jdWords = jdLower
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3)
    .map(word => word.toLowerCase());

  // Count unique important keywords (appearing multiple times in JD)
  const keywordFrequency = new Map<string, number>();
  jdWords.forEach(word => {
    keywordFrequency.set(word, (keywordFrequency.get(word) || 0) + 1);
  });

  const importantKeywords = Array.from(keywordFrequency.entries())
    .filter(([_, count]) => count >= 2)
    .map(([word]) => word)
    .slice(0, 30); // Top 30 keywords

  if (importantKeywords.length === 0) {
    return 75; // Can't match if no keywords extracted
  }

  // Combine all resume text
  const resumeText = [
    resumeData.summary || '',
    ...(resumeData.skills || []),
    ...(resumeData.experience || []).flatMap(exp => [
      exp.position,
      exp.company,
      ...(exp.responsibilities || [])
    ]),
    ...(resumeData.projects || []).flatMap(p => [
      p.name,
      p.description,
      ...(p.technologies || [])
    ]),
    ...(resumeData.achievements || [])
  ].join(' ').toLowerCase();

  // Match keywords
  const matched = importantKeywords.filter(keyword =>
    resumeText.includes(keyword.toLowerCase())
  );

  const matchPercentage = (matched.length / importantKeywords.length) * 100;
  return Math.min(100, matchPercentage);
}

function calculateOverallScore(categoryScores: ATSAnalysisResult['categoryScores']): number {
  // Weighted average - some categories are more important
  const weights = {
    contactInfo: 0.10,
    skills: 0.15,
    experience: 0.20,
    education: 0.10,
    keywords: 0.20,
    formatting: 0.10,
    achievements: 0.10,
    actionVerbs: 0.05,
  };

  const weightedSum = 
    categoryScores.contactInfo * weights.contactInfo +
    categoryScores.skills * weights.skills +
    categoryScores.experience * weights.experience +
    categoryScores.education * weights.education +
    categoryScores.keywords * weights.keywords +
    categoryScores.formatting * weights.formatting +
    categoryScores.achievements * weights.achievements +
    categoryScores.actionVerbs * weights.actionVerbs;

  return Math.round(weightedSum);
}

function generateRecommendations(
  metrics: ATSMetrics,
  scores: ATSAnalysisResult['categoryScores'],
  resumeData: ResumeData,
  jobDescription?: string
): ATSAnalysisResult['recommendations'] {
  const recommendations: ATSAnalysisResult['recommendations'] = [];

  // Contact Information
  if (scores.contactInfo < 100) {
    const missing = [];
    if (!metrics.hasEmail) missing.push('email');
    if (!metrics.hasPhone) missing.push('phone');
    if (!metrics.hasLinkedIn) missing.push('LinkedIn profile');
    
    recommendations.push({
      category: 'Contact Information',
      priority: 'high',
      message: `Missing contact information: ${missing.join(', ')}`,
      improvement: `Add ${missing.join(' and ')} to improve ATS compatibility and recruiter access.`
    });
  }

  // Skills
  if (scores.skills < 70) {
    if (!metrics.hasSkills) {
      recommendations.push({
        category: 'Skills',
        priority: 'high',
        message: 'No skills section found',
        improvement: 'Add a skills section with relevant technical and soft skills (aim for 10-15 skills).'
      });
    } else if (metrics.skillsCount < 5) {
      recommendations.push({
        category: 'Skills',
        priority: 'medium',
        message: `Only ${metrics.skillsCount} skills listed`,
        improvement: 'Include more relevant skills. Aim for 10-15 skills including both technical and soft skills.'
      });
    }
  }

  // Experience
  if (scores.experience < 70) {
    if (!metrics.hasExperience) {
      recommendations.push({
        category: 'Experience',
        priority: 'high',
        message: 'No work experience listed',
        improvement: 'Add work experience, internships, or volunteer positions. Even entry-level roles benefit from listing relevant experience.'
      });
    } else {
      const avgResponsibilities = metrics.totalResponsibilities / metrics.experienceCount;
      if (avgResponsibilities < 3) {
        recommendations.push({
          category: 'Experience',
          priority: 'medium',
          message: 'Experience entries lack detail',
          improvement: 'Add 3-5 bullet points per role with specific responsibilities and achievements using action verbs.'
        });
      }
    }
  }

  // Action Verbs
  if (scores.actionVerbs < 60) {
    recommendations.push({
      category: 'Language',
      priority: 'medium',
      message: 'Limited use of action verbs',
      improvement: `Use more action verbs like "developed", "implemented", "managed", "achieved" to make your resume more impactful. Currently using ${metrics.actionVerbsCount} action verbs.`
    });
  }

  // Quantifiable Metrics
  if (!metrics.hasQuantifiableMetrics && metrics.hasExperience) {
    recommendations.push({
      category: 'Achievements',
      priority: 'high',
      message: 'Missing quantifiable achievements',
      improvement: 'Add numbers, percentages, or metrics to your experience (e.g., "increased sales by 25%", "managed team of 5", "reduced costs by $10k").'
    });
  }

  // Keywords (if job description provided)
  if (jobDescription && scores.keywords < 80) {
    recommendations.push({
      category: 'Keywords',
      priority: 'high',
      message: 'Resume may not match job description well',
      improvement: 'Review the job description and incorporate relevant keywords naturally throughout your resume, especially in skills, experience, and projects sections.'
    });
  }

  // Formatting
  if (scores.formatting < 80) {
    const missing = [];
    if (!metrics.hasSummary) missing.push('professional summary');
    if (!metrics.hasProjects && !metrics.hasExperience) missing.push('projects or experience');
    if (!metrics.hasAchievements) missing.push('achievements');
    
    if (missing.length > 0) {
      recommendations.push({
        category: 'Formatting',
        priority: 'medium',
        message: `Missing recommended sections: ${missing.join(', ')}`,
        improvement: `Add a ${missing.join(' and ')} section to strengthen your resume.`
      });
    }
  }

  // Education
  if (scores.education === 0) {
    recommendations.push({
      category: 'Education',
      priority: 'high',
      message: 'Education section is missing',
      improvement: 'Add your educational background including degree, institution, and graduation year (if applicable).'
    });
  }

  return recommendations;
}

function identifyStrengths(
  metrics: ATSMetrics,
  scores: ATSAnalysisResult['categoryScores']
): string[] {
  const strengths: string[] = [];

  if (scores.contactInfo === 100) {
    strengths.push('Complete contact information');
  }

  if (scores.skills >= 80 && metrics.skillsCount >= 10) {
    strengths.push(`Strong skills section with ${metrics.skillsCount} skills`);
  }

  if (scores.experience >= 80 && metrics.totalResponsibilities >= 10) {
    strengths.push(`Well-detailed experience with comprehensive bullet points`);
  }

  if (scores.actionVerbs >= 70) {
    strengths.push(`Effective use of action verbs (${metrics.actionVerbsCount} found)`);
  }

  if (metrics.hasQuantifiableMetrics) {
    strengths.push('Includes quantifiable achievements and metrics');
  }

  if (scores.formatting >= 90) {
    strengths.push('Well-structured resume with all key sections');
  }

  if (scores.keywords >= 85) {
    strengths.push('Good keyword alignment with job requirements');
  }

  if (metrics.hasProjects && metrics.projectsCount >= 2) {
    strengths.push(`Strong project portfolio (${metrics.projectsCount} projects)`);
  }

  if (metrics.hasAchievements && metrics.achievementsCount >= 3) {
    strengths.push(`Notable achievements highlighted (${metrics.achievementsCount} achievements)`);
  }

  if (strengths.length === 0) {
    strengths.push('Resume structure is in place - continue building content');
  }

  return strengths;
}

function analyzeKeywords(resumeData: ResumeData, jobDescription?: string): {
  matched: string[];
  missing: string[];
} {
  if (!jobDescription) {
    return { matched: [], missing: [] };
  }

  const jdLower = jobDescription.toLowerCase();
  const jdWords = jdLower
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3);

  const keywordFrequency = new Map<string, number>();
  jdWords.forEach(word => {
    keywordFrequency.set(word, (keywordFrequency.get(word) || 0) + 1);
  });

  const importantKeywords = Array.from(keywordFrequency.entries())
    .filter(([_, count]) => count >= 2)
    .map(([word]) => word)
    .slice(0, 30);

  const resumeText = [
    resumeData.summary || '',
    ...(resumeData.skills || []),
    ...(resumeData.experience || []).flatMap(exp => [
      exp.position,
      exp.company,
      ...(exp.responsibilities || [])
    ]),
    ...(resumeData.projects || []).flatMap(p => [
      p.name,
      p.description,
      ...(p.technologies || [])
    ]),
    ...(resumeData.achievements || [])
  ].join(' ').toLowerCase();

  const matched = importantKeywords.filter(keyword =>
    resumeText.includes(keyword.toLowerCase())
  );

  const missing = importantKeywords.filter(keyword =>
    !resumeText.includes(keyword.toLowerCase())
  );

  return { matched, missing };
}

