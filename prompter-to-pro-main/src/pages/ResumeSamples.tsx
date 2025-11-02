import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Eye } from "lucide-react";
import Masonry from "@/components/Masonry";

export default function ResumeSamples() {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);



  // Sample resume templates with different styles using actual resume images
  const resumeSamples = [
    {
      id: "1",
      img: "/images/resume-samples/modern-professional.jpg",
      height: 900,
      title: "Modern Professional",
      description: "Clean, minimalist design perfect for tech and creative industries"
    },
    {
      id: "2",
      img: "/images/resume-samples/classic-corporate.jpg",
      height: 900,
      title: "Classic Corporate",
      description: "Traditional format ideal for finance, consulting, and business roles"
    },
    {
      id: "3",
      img: "/images/resume-samples/executive-summary.jpg",
      height: 900,
      title: "Executive Summary",
      description: "Premium layout for senior-level positions and executive roles"
    },
    {
      id: "4",
      img: "/images/resume-samples/creative-portfolio.jpg",
      height: 900,
      title: "Creative Portfolio",
      description: "Eye-catching design for designers, marketers, and creative professionals"
    },
    {
      id: "5",
      img: "/images/resume-samples/ats-optimized.jpg",
      height: 900,
      title: "ATS Optimized",
      description: "Maximum compatibility with applicant tracking systems"
    },
    {
      id: "6",
      img: "/images/resume-samples/two-column.jpg",
      height: 900,
      title: "Two-Column Layout",
      description: "Efficient use of space with sidebar for skills and contact"
    },
    {
      id: "7",
      img: "/images/resume-samples/entry-level.jpg",
      height: 900,
      title: "Entry Level",
      description: "Perfect format for fresh graduates and entry-level positions"
    },
    {
      id: "8",
      img: "/images/resume-samples/chronological.jpg",
      height: 900,
      title: "Chronological",
      description: "Timeline-based format highlighting career progression"
    },
    {
      id: "9",
      img: "/images/resume-samples/functional.jpg",
      height: 900,
      title: "Functional Style",
      description: "Skills-focused layout emphasizing abilities over timeline"
    },
    {
      id: "10",
      img: "/images/resume-samples/hybrid.jpg",
      height: 900,
      title: "Hybrid Format",
      description: "Combines chronological and functional elements"
    },
    {
      id: "11",
      img: "/images/resume-samples/international.jpg",
      height: 900,
      title: "International Style",
      description: "CV format suitable for global job markets"
    },
    {
      id: "12",
      img: "/images/resume-samples/infographic.jpg",
      height: 900,
      title: "Infographic Resume",
      description: "Visual elements to stand out in competitive fields"
    }
  ];

  const handleTemplateClick = (item: any) => {
    setSelectedTemplate(item.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Resume Samples
                </span>
              </div>
            </div>
            <Button 
              onClick={() => navigate("/app")}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            >
              Create Your Resume
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white">
            ATS-Friendly Resume Templates
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Browse our collection of professionally designed resume templates. All templates are optimized 
            for Applicant Tracking Systems (ATS) and designed to help you land your dream job.
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-lg text-blue-900 dark:text-blue-100 mb-2">
                Why ATS-Friendly Templates Matter
              </h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                Most companies use Applicant Tracking Systems (ATS) to screen resumes. Our templates are 
                specifically designed to pass through these systems while maintaining a professional, 
                eye-catching appearance. Each template uses standard fonts, proper formatting, and clean 
                layouts that both ATS software and human recruiters love.
              </p>
            </div>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="mb-12">
          <Masonry
            items={resumeSamples}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.98}
            blurToFocus={true}
            colorShiftOnHover={false}
            onItemClick={handleTemplateClick}
          />
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-center text-white mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Create Your Resume?
          </h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Use our AI-powered resume builder to create a professional resume based on these templates. 
            Just describe your experience and let AI do the rest.
          </p>
          <Button
            onClick={() => navigate("/app")}
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Building Now
            <Download className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

