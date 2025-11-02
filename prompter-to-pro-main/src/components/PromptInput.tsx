import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Loader2, Sparkles, Lightbulb, FileText, Briefcase, GraduationCap, Code } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PromptInputProps {
  onGenerate: (prompt: string) => Promise<void>;
  isLoading: boolean;
}

export default function PromptInput({ onGenerate, isLoading }: PromptInputProps) {
  const [prompt, setPrompt] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      toast({
        title: "Prompt required",
        description: "Please describe your background to generate a resume.",
        variant: "destructive"
      });
      return;
    }

    if (prompt.length < 100) {
      toast({
        title: "More details needed",
        description: "Please provide more details about your experience (at least 100 characters).",
        variant: "destructive"
      });
      return;
    }

    await onGenerate(prompt);
  };

  const placeholderText = `Example: "Hi, my name is Riya Sharma and I'm currently pursuing a B.Tech in Computer Science and Engineering from Manipal Institute of Technology. I'm in my pre-final year and have maintained a CGPA of 8.7 so far. I'm really passionate about software development and I'm looking for a Software Engineering Internship...

Include:
• Your education and CGPA
• Technical skills and tools you know
• Internships or work experience
• Projects you've built
• Achievements and awards
• Target role you're applying for`;

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full mb-4 border border-blue-200 dark:border-blue-800">
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm font-semibold">Step 1: Share Your Story</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white">
            Tell Us About Yourself
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Describe your background, skills, and experience in your own words. Our AI will transform it into a professional resume.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Input Area */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 md:p-10 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <Textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={placeholderText}
                    className="min-h-[450px] text-base resize-none focus:ring-2 focus:ring-blue-500 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-slate-50 dark:bg-slate-900 transition-all duration-300 group-hover:border-blue-300 dark:group-hover:border-blue-700"
                    disabled={isLoading}
                  />
                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <div className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-300 ${
                      prompt.length >= 100 
                        ? 'bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700 text-green-700 dark:text-green-300' 
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-400'
                    }`}>
                      {prompt.length} / 100+ characters
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-7 text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-6 w-6 animate-spin relative z-10" />
                      <span className="relative z-10">Generating Your Resume...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-6 w-6 relative z-10" />
                      <span className="relative z-10">Generate Resume with AI</span>
                      <Sparkles className="ml-2 h-6 w-6 relative z-10" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Helper Cards */}
          <div className="space-y-4">
            <Card className="p-5 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Education</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Mention your degree, institution, CGPA, and graduation year
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-5 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-700 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Skills</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    List technical skills, tools, frameworks, and languages you know
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-5 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Experience</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Describe internships, jobs, and your key responsibilities
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-5 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Projects</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Share projects you've built with technologies used
                  </p>
                </div>
              </div>
            </Card>

            {/* Pro Tip */}
            <Card className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-blue-900 dark:text-blue-300 mb-1">Pro Tip</h3>
                  <p className="text-xs text-blue-700 dark:text-blue-400">
                    The more details you provide, the better your resume will be. Aim for at least 100 characters!
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}