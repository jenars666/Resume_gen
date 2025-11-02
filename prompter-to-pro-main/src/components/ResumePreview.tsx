import { Badge } from "./ui/badge";
import { CheckCircle2 } from "lucide-react";
import { ResumeData } from "@/types/resume";
import ATSAnalyzer from "./ATSAnalyzer";

interface ResumePreviewProps {
  resumeData: ResumeData | null;
  onDownload?: () => void; // Made optional since it's not used in this component anymore
}

export default function ResumePreview({ resumeData, onDownload }: ResumePreviewProps) {
  if (!resumeData) return null;

  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full mb-4 border border-green-200 dark:border-green-800">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-semibold">Step 2: Review & Download</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white">
            Your Professional Resume
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Review your AI-generated resume and download when ready
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resume Preview */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl shadow-xl p-8 md:p-12 space-y-6 overflow-auto max-h-[800px]">
            {/* Header */}
            <div className="border-b-2 border-slate-300 dark:border-slate-600 pb-4">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{resumeData.name}</h1>
              <div className="flex flex-wrap gap-3 mt-2 text-sm text-slate-600 dark:text-slate-300">
                {resumeData.email && <span>{resumeData.email}</span>}
                {resumeData.phone && <span>•</span>}
                {resumeData.phone && <span>{resumeData.phone}</span>}
                {resumeData.linkedin && <span>•</span>}
                {resumeData.linkedin && <span>{resumeData.linkedin}</span>}
              </div>
            </div>

            {/* Professional Summary */}
            {resumeData.summary && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Professional Summary</h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{resumeData.summary}</p>
              </div>
            )}

            {/* Education */}
            {resumeData.education && resumeData.education.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Education</h2>
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="mb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">{edu.degree}</h3>
                        <p className="text-slate-700 dark:text-slate-300">{edu.institution}</p>
                      </div>
                      {edu.year && <span className="text-slate-600 dark:text-slate-400 text-sm">{edu.year}</span>}
                    </div>
                    {edu.gpa && <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">CGPA: {edu.gpa}</p>}
                  </div>
                ))}
              </div>
            )}

            {/* Skills */}
            {resumeData.skills && resumeData.skills.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Experience */}
            {resumeData.experience && resumeData.experience.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Experience</h2>
                {resumeData.experience.map((exp, idx) => (
                  <div key={idx} className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">{exp.position}</h3>
                        <p className="text-slate-700 dark:text-slate-300">{exp.company}</p>
                      </div>
                      {exp.duration && <span className="text-slate-600 dark:text-slate-400 text-sm">{exp.duration}</span>}
                    </div>
                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                      <ul className="list-disc list-outside ml-5 space-y-1">
                        {exp.responsibilities.map((resp, respIdx) => (
                          <li key={respIdx} className="text-slate-700 dark:text-slate-300 text-sm">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Projects */}
            {resumeData.projects && resumeData.projects.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Projects</h2>
                {resumeData.projects.map((project, idx) => (
                  <div key={idx} className="mb-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">{project.name}</h3>
                    <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">{project.description}</p>
                    {project.technologies && (
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                        <span className="font-medium">Technologies:</span> {project.technologies.join(", ")}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Achievements */}
            {resumeData.achievements && resumeData.achievements.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Achievements</h2>
                <ul className="list-disc list-outside ml-5 space-y-1">
                  {resumeData.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-slate-700 dark:text-slate-300 text-sm">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* ATS Analyzer */}
            <ATSAnalyzer resumeData={resumeData} />

            {/* Resume Checklist */}
            <div className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold mb-3 text-slate-900 dark:text-white">Resume Checklist</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 dark:text-slate-300">One-page layout</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 dark:text-slate-300">ATS-compliant format</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 dark:text-slate-300">Action-oriented bullets</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 dark:text-slate-300">Quantifiable achievements</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 dark:text-slate-300">Professional formatting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}