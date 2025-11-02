import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import ResumePreview from "@/components/ResumePreview";
import TemplateSelector, { ResumeTemplate } from "@/components/TemplateSelector";
import StyledResumePreview from "@/components/StyledResumePreview";
import { ResumeData } from "@/types/resume";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function ReviewPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [showDownloadCard, setShowDownloadCard] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState<ResumeTemplate>('modern');
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Get resume data from navigation state
    const stateData = location.state?.resumeData;
    if (stateData) {
      setResumeData(stateData);
    } else {
      // If no data, redirect back to app
      toast({
        title: "No Resume Data",
        description: "Please generate a resume first.",
        variant: "destructive"
      });
      navigate("/app");
    }
  }, [location.state, navigate, toast]);

  // Handle scroll to show/hide download card
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show card when at top (within 100px), hide when scrolled down
      setShowDownloadCard(scrollPosition < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = async () => {
    if (!resumeData || !resumeRef.current) return;

    try {
      toast({
        title: "Generating PDF...",
        description: "Please wait while we create your resume.",
      });

      // Clone the element for PDF generation to avoid affecting the display
      const element = resumeRef.current;
      const clone = element.cloneNode(true) as HTMLElement;
      
      // Apply PDF-specific styles for full A4 layout
      clone.style.width = '210mm';
      clone.style.height = '297mm';
      clone.style.maxWidth = '210mm';
      clone.style.maxHeight = '297mm';
      clone.style.minHeight = '297mm';
      clone.style.padding = '0';
      clone.style.margin = '0';
      clone.style.boxSizing = 'border-box';
      clone.style.position = 'absolute';
      clone.style.left = '-9999px';
      clone.style.top = '0';
      clone.style.overflow = 'hidden';
      
      // Add to document temporarily
      document.body.appendChild(clone);

      // Wait for fonts and styles to load
      await new Promise(resolve => setTimeout(resolve, 150));

      // Capture the cloned element as canvas with exact A4 dimensions
      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: selectedTemplate === 'technical' ? '#0f172a' : '#ffffff',
        width: clone.offsetWidth,
        height: clone.offsetHeight,
        windowWidth: clone.offsetWidth,
        windowHeight: clone.offsetHeight,
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.body.querySelector('[style*="left: -9999px"]') as HTMLElement;
          if (clonedElement) {
            clonedElement.style.left = '0';
          }
        }
      });

      // Remove the clone
      document.body.removeChild(clone);

      // A4 dimensions in mm
      const pdfWidth = 210;
      const pdfHeight = 297;
      
      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });

      // Convert canvas to image with high quality
      const imgData = canvas.toDataURL('image/png', 1.0);

      // Add image to PDF - fill entire page (no margins, no centering)
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

      // Save the PDF with template name
      const templateName = selectedTemplate.charAt(0).toUpperCase() + selectedTemplate.slice(1);
      const fileName = `${resumeData.name.replace(/\s+/g, '_')}_Resume_${templateName}.pdf`;
      pdf.save(fileName);

      toast({
        title: "Download Complete!",
        description: `Your ${templateName} template resume has been downloaded successfully.`,
      });
    } catch (error) {
      console.error('PDF generation error:', error);
      toast({
        title: "Download Failed",
        description: "There was an error generating your PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!resumeData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/app")}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Editor
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Prompt2CV
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Area with Download Card */}
      <div className="relative py-16 px-4">
        {/* Download Card - Top Right (Shows/Hides on Scroll) */}
        <div className={`fixed top-24 right-6 z-40 hidden lg:block transition-all duration-500 ${
          showDownloadCard ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'
        }`}>
          <Card className="w-80 bg-white dark:bg-slate-800 border-2 border-blue-200 dark:border-blue-700 shadow-2xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Ready to Download</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Your resume is ready in professional PDF format
                </p>
              </div>
            </div>

            <Button
              onClick={handleDownload}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download as PDF
            </Button>
          </Card>
        </div>

        {/* Main Content */}
        <div className="container mx-auto max-w-6xl space-y-8">
          {/* Template Selector */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border-2 border-slate-200 dark:border-slate-700">
            <TemplateSelector 
              selectedTemplate={selectedTemplate}
              onSelectTemplate={setSelectedTemplate}
            />
          </div>

          {/* Resume Preview with Selected Template */}
          <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-8 rounded-xl">
            <div className="max-w-4xl mx-auto">
              <div 
                ref={resumeRef}
                className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden"
              >
                <StyledResumePreview resumeData={resumeData} template={selectedTemplate} />
              </div>
            </div>
          </div>

          {/* ATS Analyzer Section */}
          <ResumePreview resumeData={resumeData} onDownload={handleDownload} />
        </div>
      </div>
    </div>
  );
}

