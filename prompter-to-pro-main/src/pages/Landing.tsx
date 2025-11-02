import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Sparkles, ArrowRight, Zap, Target, FileCheck, TrendingUp, CheckCircle2, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/app");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Prompt2CV
              </span>
            </div>
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                <Zap className="w-4 h-4" />
                AI-Powered Resume Builder
              </Badge>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight">
                  <span className="block text-slate-900 dark:text-white leading-tight">
                    Build Your
                  </span>
                   <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent py-2 leading-[1.3] pb-3">
                     Winning Resume
                   </span>
                  <span className="block text-slate-900 dark:text-white leading-tight">
                    in Minutes
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0">
                  Transform your career story into a professional, ATS-optimized resume with AI. 
                  No design skills needed—just describe yourself and let AI do the magic.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group whitespace-nowrap"
                >
                  Create Resume Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">10K+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Resumes Created</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">95%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">ATS Pass Rate</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">4.9/5</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">User Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="relative">
              <div className="grid gap-4">
                <Card className="p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">AI-Powered Generation</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Describe your experience in plain English. Our AI transforms it into a polished, professional resume.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">ATS Score Analyzer</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Get real-time ATS compatibility scores with actionable recommendations to beat applicant tracking systems.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">Instant PDF Export</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Download your professionally formatted resume as a PDF, ready to send to recruiters immediately.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Everything You Need to Land Your Dream Job
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Our AI-powered platform provides all the tools you need to create a winning resume
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "ATS-Optimized",
                description: "Resumes formatted to pass through Applicant Tracking Systems with high scores",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Generate a complete professional resume in under 60 seconds",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: CheckCircle2,
                title: "Professional Templates",
                description: "Clean, modern designs that recruiters love and ATS systems understand",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Target,
                title: "Keyword Matching",
                description: "Automatically match keywords from job descriptions to boost your chances",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Star,
                title: "Expert Guidance",
                description: "AI-powered recommendations to improve every section of your resume",
                color: "from-red-500 to-rose-500"
              },
              {
                icon: FileCheck,
                title: "Multiple Formats",
                description: "Export in PDF format, perfectly formatted for any application",
                color: "from-indigo-500 to-blue-500"
              }
            ].map((feature, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Build Your Winning Resume?
            </h2>
            <p className="text-xl text-blue-100">
              Join thousands of job seekers who have successfully landed their dream jobs with our AI-powered resume builder
            </p>
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Start Building Now - It's Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-blue-100">
              No credit card required • No sign-up needed • Instant results
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 dark:bg-slate-950 text-slate-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Prompt2CV</span>
          </div>
          <p className="text-sm">
            Built with AI • ATS-Optimized • Recruiter-Ready
          </p>
          <p className="text-xs mt-4 text-slate-400">
            © 2025 Prompt2CV by JenIQ. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
