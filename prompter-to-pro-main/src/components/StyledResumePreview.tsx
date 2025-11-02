import { ResumeData } from "@/types/resume";
import { ResumeTemplate } from "./TemplateSelector";

interface StyledResumePreviewProps {
  resumeData: ResumeData;
  template: ResumeTemplate;
}

export default function StyledResumePreview({ resumeData, template }: StyledResumePreviewProps) {
  // Classic Template
  if (template === 'classic') {
    return (
      <div className="bg-white dark:bg-slate-800 p-8 md:p-12 space-y-6">
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

        {/* Summary */}
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
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium"
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
    );
  }

  // Modern Template
  if (template === 'modern') {
    return (
      <div className="bg-white dark:bg-slate-800 p-8 md:p-12 space-y-6">
        {/* Header with accent */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 -m-8 md:-m-12 mb-6">
          <h1 className="text-3xl font-bold">{resumeData.name}</h1>
          <div className="flex flex-wrap gap-3 mt-2 text-sm text-blue-100">
            {resumeData.email && <span>{resumeData.email}</span>}
            {resumeData.phone && <span>•</span>}
            {resumeData.phone && <span>{resumeData.phone}</span>}
            {resumeData.linkedin && <span>•</span>}
            {resumeData.linkedin && <span>{resumeData.linkedin}</span>}
          </div>
        </div>

        {/* Summary */}
        {resumeData.summary && (
          <div>
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
              <div className="w-1 h-6 bg-blue-600 dark:bg-blue-400"></div>
              Professional Summary
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed ml-3">{resumeData.summary}</p>
          </div>
        )}

        {/* Education */}
        {resumeData.education && resumeData.education.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
              <div className="w-1 h-6 bg-blue-600 dark:bg-blue-400"></div>
              Education
            </h2>
            <div className="ml-3 space-y-3">
              {resumeData.education.map((edu, idx) => (
                <div key={idx}>
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
          </div>
        )}

        {/* Skills */}
        {resumeData.skills && resumeData.skills.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
              <div className="w-1 h-6 bg-blue-600 dark:bg-blue-400"></div>
              Skills
            </h2>
            <div className="flex flex-wrap gap-2 ml-3">
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
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
              <div className="w-1 h-6 bg-blue-600 dark:bg-blue-400"></div>
              Experience
            </h2>
            <div className="ml-3 space-y-4">
              {resumeData.experience.map((exp, idx) => (
                <div key={idx}>
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
          </div>
        )}

        {/* Projects */}
        {resumeData.projects && resumeData.projects.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
              <div className="w-1 h-6 bg-blue-600 dark:bg-blue-400"></div>
              Projects
            </h2>
            <div className="ml-3 space-y-4">
              {resumeData.projects.map((project, idx) => (
                <div key={idx}>
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
          </div>
        )}

        {/* Achievements */}
        {resumeData.achievements && resumeData.achievements.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
              <div className="w-1 h-6 bg-blue-600 dark:bg-blue-400"></div>
              Achievements
            </h2>
            <ul className="list-disc list-outside ml-8 space-y-1">
              {resumeData.achievements.map((achievement, idx) => (
                <li key={idx} className="text-slate-700 dark:text-slate-300 text-sm">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  // Minimal Template
  if (template === 'minimal') {
    return (
      <div className="bg-white dark:bg-slate-800 p-8 md:p-12 space-y-8">
        {/* Header - Centered */}
        <div className="text-center pb-6 border-b border-slate-200 dark:border-slate-700">
          <h1 className="text-4xl font-light text-slate-900 dark:text-white mb-2">{resumeData.name}</h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            {resumeData.email && <span>{resumeData.email}</span>}
            {resumeData.phone && <span>{resumeData.phone}</span>}
            {resumeData.linkedin && <span>{resumeData.linkedin}</span>}
          </div>
        </div>

        {/* Summary */}
        {resumeData.summary && (
          <div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-center italic">
              "{resumeData.summary}"
            </p>
          </div>
        )}

        {/* Education */}
        {resumeData.education && resumeData.education.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Education</h2>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="mb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{edu.institution}</p>
                  </div>
                  {edu.year && <span className="text-slate-500 dark:text-slate-500 text-sm">{edu.year}</span>}
                </div>
                {edu.gpa && <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">CGPA: {edu.gpa}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {resumeData.skills && resumeData.skills.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Skills</h2>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              {resumeData.skills.join(" • ")}
            </p>
          </div>
        )}

        {/* Experience */}
        {resumeData.experience && resumeData.experience.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Experience</h2>
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">{exp.position}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{exp.company}</p>
                  </div>
                  {exp.duration && <span className="text-slate-500 dark:text-slate-500 text-sm">{exp.duration}</span>}
                </div>
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="space-y-1">
                    {exp.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx} className="text-slate-700 dark:text-slate-300 text-sm pl-4 border-l-2 border-slate-200 dark:border-slate-700">
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
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Projects</h2>
            {resumeData.projects.map((project, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-medium text-slate-900 dark:text-white">{project.name}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">{project.description}</p>
                {project.technologies && (
                  <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">
                    {project.technologies.join(" • ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Achievements */}
        {resumeData.achievements && resumeData.achievements.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Achievements</h2>
            <ul className="space-y-2">
              {resumeData.achievements.map((achievement, idx) => (
                <li key={idx} className="text-slate-700 dark:text-slate-300 text-sm pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  // Creative Template
  if (template === 'creative') {
    return (
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-800 p-8 md:p-12 space-y-6">
        {/* Header with creative design */}
        <div className="relative">
          <div className="absolute -left-8 md:-left-12 top-0 bottom-0 w-2 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500"></div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {resumeData.name}
          </h1>
          <div className="flex flex-wrap gap-3 mt-2 text-sm text-slate-600 dark:text-slate-300">
            {resumeData.email && <span className="flex items-center gap-1">📧 {resumeData.email}</span>}
            {resumeData.phone && <span className="flex items-center gap-1">📱 {resumeData.phone}</span>}
            {resumeData.linkedin && <span className="flex items-center gap-1">🔗 {resumeData.linkedin}</span>}
          </div>
        </div>

        {/* Summary with creative styling */}
        {resumeData.summary && (
          <div className="bg-white/50 dark:bg-slate-700/50 p-4 rounded-lg border-l-4 border-purple-500">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">{resumeData.summary}</p>
          </div>
        )}

        {/* Education */}
        {resumeData.education && resumeData.education.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-3">🎓 Education</h2>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="mb-3 pl-4 border-l-2 border-pink-300 dark:border-pink-700">
                <h3 className="font-semibold text-slate-900 dark:text-white">{edu.degree}</h3>
                <p className="text-slate-700 dark:text-slate-300">{edu.institution}</p>
                {edu.year && <span className="text-slate-600 dark:text-slate-400 text-sm">{edu.year}</span>}
                {edu.gpa && <p className="text-slate-600 dark:text-slate-400 text-sm">CGPA: {edu.gpa}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Skills with colorful badges */}
        {resumeData.skills && resumeData.skills.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-3">💡 Skills</h2>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700"
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
            <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-3">💼 Experience</h2>
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="mb-4 pl-4 border-l-2 border-pink-300 dark:border-pink-700">
                <h3 className="font-semibold text-slate-900 dark:text-white">{exp.position}</h3>
                <p className="text-slate-700 dark:text-slate-300">{exp.company}</p>
                {exp.duration && <span className="text-slate-600 dark:text-slate-400 text-sm">{exp.duration}</span>}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="list-disc list-outside ml-5 space-y-1 mt-2">
                    {exp.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx} className="text-slate-700 dark:text-slate-300 text-sm">{resp}</li>
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
            <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-3">🚀 Projects</h2>
            {resumeData.projects.map((project, idx) => (
              <div key={idx} className="mb-4 pl-4 border-l-2 border-pink-300 dark:border-pink-700">
                <h3 className="font-semibold text-slate-900 dark:text-white">{project.name}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">{project.description}</p>
                {project.technologies && (
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                    <span className="font-medium">Tech:</span> {project.technologies.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Achievements */}
        {resumeData.achievements && resumeData.achievements.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-3">🏆 Achievements</h2>
            <ul className="space-y-2">
              {resumeData.achievements.map((achievement, idx) => (
                <li key={idx} className="text-slate-700 dark:text-slate-300 text-sm pl-4 border-l-2 border-pink-300 dark:border-pink-700">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  // Executive Template
  if (template === 'executive') {
    return (
      <div className="bg-white dark:bg-slate-800 p-8 md:p-12 space-y-6">
        {/* Premium Header */}
        <div className="border-b-4 border-amber-600 dark:border-amber-500 pb-6">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white tracking-tight">{resumeData.name}</h1>
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-amber-700 dark:text-amber-400 font-medium">
            {resumeData.email && <span>{resumeData.email}</span>}
            {resumeData.phone && <span>•</span>}
            {resumeData.phone && <span>{resumeData.phone}</span>}
            {resumeData.linkedin && <span>•</span>}
            {resumeData.linkedin && <span>{resumeData.linkedin}</span>}
          </div>
        </div>

        {/* Executive Summary */}
        {resumeData.summary && (
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border-l-4 border-amber-600">
            <h2 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-3">EXECUTIVE PROFILE</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">{resumeData.summary}</p>
          </div>
        )}

        {/* Education */}
        {resumeData.education && resumeData.education.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b-2 border-amber-600">EDUCATION</h2>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">{edu.institution}</p>
                  </div>
                  {edu.year && <span className="text-amber-700 dark:text-amber-400 font-bold">{edu.year}</span>}
                </div>
                {edu.gpa && <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">CGPA: {edu.gpa}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Core Competencies */}
        {resumeData.skills && resumeData.skills.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b-2 border-amber-600">CORE COMPETENCIES</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {resumeData.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-slate-800 dark:text-slate-200 rounded font-semibold text-center border border-amber-300 dark:border-amber-700"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Professional Experience */}
        {resumeData.experience && resumeData.experience.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b-2 border-amber-600">PROFESSIONAL EXPERIENCE</h2>
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="mb-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">{exp.position}</h3>
                    <p className="text-slate-700 dark:text-slate-300 font-semibold">{exp.company}</p>
                  </div>
                  {exp.duration && <span className="text-amber-700 dark:text-amber-400 font-bold text-sm">{exp.duration}</span>}
                </div>
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="list-disc list-outside ml-5 space-y-1">
                    {exp.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx} className="text-slate-700 dark:text-slate-300 text-sm">{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Key Projects */}
        {resumeData.projects && resumeData.projects.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b-2 border-amber-600">KEY PROJECTS</h2>
            {resumeData.projects.map((project, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{project.name}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">{project.description}</p>
                {project.technologies && (
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                    <span className="font-semibold">Technologies:</span> {project.technologies.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Achievements */}
        {resumeData.achievements && resumeData.achievements.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b-2 border-amber-600">NOTABLE ACHIEVEMENTS</h2>
            <ul className="list-disc list-outside ml-5 space-y-2">
              {resumeData.achievements.map((achievement, idx) => (
                <li key={idx} className="text-slate-700 dark:text-slate-300 text-sm font-medium">{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  // Technical Template
  if (template === 'technical') {
    return (
      <div className="bg-slate-900 dark:bg-slate-950 text-green-400 p-8 md:p-12 space-y-6 font-mono">
        {/* Terminal-style Header */}
        <div className="border border-green-500 p-4 rounded">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-green-500">$</span>
            <span className="text-white">whoami</span>
          </div>
          <h1 className="text-3xl font-bold text-green-400">{resumeData.name}</h1>
          <div className="flex flex-wrap gap-3 mt-2 text-sm text-green-300">
            {resumeData.email && <span>📧 {resumeData.email}</span>}
            {resumeData.phone && <span>📱 {resumeData.phone}</span>}
            {resumeData.linkedin && <span>🔗 {resumeData.linkedin}</span>}
          </div>
        </div>

        {/* Summary */}
        {resumeData.summary && (
          <div className="border border-green-500 p-4 rounded">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-green-500">$</span>
              <span className="text-white">cat profile.txt</span>
            </div>
            <p className="text-green-300 leading-relaxed">{resumeData.summary}</p>
          </div>
        )}

        {/* Education */}
        {resumeData.education && resumeData.education.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-500">$</span>
              <span className="text-white">ls education/</span>
            </div>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="mb-3 pl-4 border-l-2 border-green-500">
                <h3 className="font-semibold text-green-400">{edu.degree}</h3>
                <p className="text-green-300">{edu.institution}</p>
                {edu.year && <span className="text-green-500 text-sm">{edu.year}</span>}
                {edu.gpa && <p className="text-green-500 text-sm">CGPA: {edu.gpa}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {resumeData.skills && resumeData.skills.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-500">$</span>
              <span className="text-white">cat skills.json</span>
            </div>
            <div className="bg-slate-800 p-4 rounded border border-green-500">
              <code className="text-green-300 text-sm">
                {'{'}
                <br />
                {resumeData.skills.map((skill, idx) => (
                  <span key={idx}>
                    &nbsp;&nbsp;"{skill}": true{idx < resumeData.skills.length - 1 ? ',' : ''}
                    <br />
                  </span>
                ))}
                {'}'}
              </code>
            </div>
          </div>
        )}

        {/* Experience */}
        {resumeData.experience && resumeData.experience.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-500">$</span>
              <span className="text-white">git log --experience</span>
            </div>
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="mb-4 pl-4 border-l-2 border-green-500">
                <h3 className="font-semibold text-green-400">{exp.position}</h3>
                <p className="text-green-300">{exp.company}</p>
                {exp.duration && <span className="text-green-500 text-sm">{exp.duration}</span>}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {exp.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx} className="text-green-300 text-sm">→ {resp}</li>
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
            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-500">$</span>
              <span className="text-white">ls projects/</span>
            </div>
            {resumeData.projects.map((project, idx) => (
              <div key={idx} className="mb-4 pl-4 border-l-2 border-green-500">
                <h3 className="font-semibold text-green-400">{project.name}</h3>
                <p className="text-green-300 text-sm mt-1">{project.description}</p>
                {project.technologies && (
                  <p className="text-green-500 text-sm mt-1">
                    Stack: {project.technologies.join(" | ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Achievements */}
        {resumeData.achievements && resumeData.achievements.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-500">$</span>
              <span className="text-white">cat achievements.md</span>
            </div>
            <ul className="space-y-2">
              {resumeData.achievements.map((achievement, idx) => (
                <li key={idx} className="text-green-300 text-sm">✓ {achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  // Elegant Template
  if (template === 'elegant') {
    return (
      <div className="bg-white dark:bg-slate-800 p-8 md:p-12 space-y-8" style={{ fontFamily: 'Georgia, serif' }}>
        {/* Elegant Header */}
        <div className="text-center pb-8 border-b border-rose-300 dark:border-rose-700">
          <h1 className="text-5xl font-serif text-slate-900 dark:text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            {resumeData.name}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            {resumeData.email && <span>{resumeData.email}</span>}
            {resumeData.phone && <span>•</span>}
            {resumeData.phone && <span>{resumeData.phone}</span>}
            {resumeData.linkedin && <span>•</span>}
            {resumeData.linkedin && <span>{resumeData.linkedin}</span>}
          </div>
        </div>

        {/* Summary */}
        {resumeData.summary && (
          <div className="text-center">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg italic px-8">
              {resumeData.summary}
            </p>
          </div>
        )}

        {/* Education */}
        {resumeData.education && resumeData.education.length > 0 && (
          <div>
            <h2 className="text-2xl font-serif text-center text-rose-700 dark:text-rose-400 mb-6 relative">
              <span className="bg-white dark:bg-slate-800 px-4">Education</span>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-rose-300 dark:bg-rose-700 -z-10"></div>
            </h2>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="mb-4 text-center">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{edu.degree}</h3>
                <p className="text-slate-700 dark:text-slate-300 italic">{edu.institution}</p>
                {edu.year && <span className="text-slate-600 dark:text-slate-400 text-sm">{edu.year}</span>}
                {edu.gpa && <p className="text-slate-600 dark:text-slate-400 text-sm">CGPA: {edu.gpa}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {resumeData.skills && resumeData.skills.length > 0 && (
          <div>
            <h2 className="text-2xl font-serif text-center text-rose-700 dark:text-rose-400 mb-6 relative">
              <span className="bg-white dark:bg-slate-800 px-4">Expertise</span>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-rose-300 dark:bg-rose-700 -z-10"></div>
            </h2>
            <p className="text-center text-slate-700 dark:text-slate-300 text-sm">
              {resumeData.skills.join(" • ")}
            </p>
          </div>
        )}

        {/* Experience */}
        {resumeData.experience && resumeData.experience.length > 0 && (
          <div>
            <h2 className="text-2xl font-serif text-center text-rose-700 dark:text-rose-400 mb-6 relative">
              <span className="bg-white dark:bg-slate-800 px-4">Professional Experience</span>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-rose-300 dark:bg-rose-700 -z-10"></div>
            </h2>
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="mb-6">
                <div className="text-center mb-2">
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{exp.position}</h3>
                  <p className="text-slate-700 dark:text-slate-300 italic">{exp.company}</p>
                  {exp.duration && <span className="text-slate-600 dark:text-slate-400 text-sm">{exp.duration}</span>}
                </div>
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="space-y-2 max-w-2xl mx-auto">
                    {exp.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx} className="text-slate-700 dark:text-slate-300 text-sm text-center">
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
            <h2 className="text-2xl font-serif text-center text-rose-700 dark:text-rose-400 mb-6 relative">
              <span className="bg-white dark:bg-slate-800 px-4">Notable Projects</span>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-rose-300 dark:bg-rose-700 -z-10"></div>
            </h2>
            {resumeData.projects.map((project, idx) => (
              <div key={idx} className="mb-4 text-center">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{project.name}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm mt-1 max-w-2xl mx-auto">{project.description}</p>
                {project.technologies && (
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 italic">
                    {project.technologies.join(" • ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Achievements */}
        {resumeData.achievements && resumeData.achievements.length > 0 && (
          <div>
            <h2 className="text-2xl font-serif text-center text-rose-700 dark:text-rose-400 mb-6 relative">
              <span className="bg-white dark:bg-slate-800 px-4">Achievements</span>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-rose-300 dark:bg-rose-700 -z-10"></div>
            </h2>
            <ul className="space-y-2 max-w-2xl mx-auto">
              {resumeData.achievements.map((achievement, idx) => (
                <li key={idx} className="text-slate-700 dark:text-slate-300 text-sm text-center">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  // Professional Template
  return (
    <div className="bg-white dark:bg-slate-800 p-8 md:p-12 space-y-6">
      {/* Header with sidebar style */}
      <div className="flex gap-6 pb-6 border-b-4 border-slate-800 dark:border-slate-300">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{resumeData.name}</h1>
          <div className="flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
            {resumeData.email && <span>{resumeData.email}</span>}
            {resumeData.phone && <span>|</span>}
            {resumeData.phone && <span>{resumeData.phone}</span>}
            {resumeData.linkedin && <span>|</span>}
            {resumeData.linkedin && <span>{resumeData.linkedin}</span>}
          </div>
        </div>
      </div>

      {/* Summary */}
      {resumeData.summary && (
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide bg-slate-100 dark:bg-slate-700 px-3 py-2">
            Professional Summary
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-3">{resumeData.summary}</p>
        </div>
      )}

      {/* Education */}
      {resumeData.education && resumeData.education.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wide bg-slate-100 dark:bg-slate-700 px-3 py-2">
            Education
          </h2>
          <div className="mt-3 space-y-3">
            {resumeData.education.map((edu, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-slate-700 dark:text-slate-300">{edu.institution}</p>
                  </div>
                  {edu.year && <span className="text-slate-600 dark:text-slate-400 text-sm font-semibold">{edu.year}</span>}
                </div>
                {edu.gpa && <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">CGPA: {edu.gpa}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {resumeData.skills && resumeData.skills.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide bg-slate-100 dark:bg-slate-700 px-3 py-2">
            Core Competencies
          </h2>
          <div className="flex flex-wrap gap-2 mt-3">
            {resumeData.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded text-sm font-semibold"
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
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wide bg-slate-100 dark:bg-slate-700 px-3 py-2">
            Professional Experience
          </h2>
          <div className="mt-3 space-y-4">
            {resumeData.experience.map((exp, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{exp.position}</h3>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">{exp.company}</p>
                  </div>
                  {exp.duration && <span className="text-slate-600 dark:text-slate-400 text-sm font-semibold">{exp.duration}</span>}
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
        </div>
      )}

      {/* Projects */}
      {resumeData.projects && resumeData.projects.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wide bg-slate-100 dark:bg-slate-700 px-3 py-2">
            Key Projects
          </h2>
          <div className="mt-3 space-y-4">
            {resumeData.projects.map((project, idx) => (
              <div key={idx}>
                <h3 className="font-bold text-slate-900 dark:text-white">{project.name}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">{project.description}</p>
                {project.technologies && (
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                    <span className="font-semibold">Technologies:</span> {project.technologies.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Achievements */}
      {resumeData.achievements && resumeData.achievements.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide bg-slate-100 dark:bg-slate-700 px-3 py-2">
            Notable Achievements
          </h2>
          <ul className="list-disc list-outside ml-5 space-y-1 mt-3">
            {resumeData.achievements.map((achievement, idx) => (
              <li key={idx} className="text-slate-700 dark:text-slate-300 text-sm">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
