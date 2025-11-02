import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ArrowRight, Sparkles, Zap, CheckCircle2, Target, FileText, TrendingUp, Clock } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-white/20 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-white/25 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-white/30 rounded-full animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Top Badge with Animation */}
          <div className="text-center mb-8 animate-fade-in">
            <Badge className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-md text-white border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="font-semibold">AI-Powered Resume Builder</span>
              <Sparkles className="w-4 h-4 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </Badge>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight animate-fade-in">
              Turn Your Words into a{" "}
              <span className="block mt-3 bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Winning Resume
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Just describe yourself in natural language. Our AI creates an ATS-compliant, 
              recruiter-ready resume in seconds.
            </p>
            
            {/* CTA Button with Enhanced Effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                onClick={onGetStarted}
                className="relative bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg px-10 py-7 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Zap className="mr-2 w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span className="relative">Generate Your Resume</span>
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center gap-2">
                  <Clock className="w-6 h-6 text-yellow-300" />
                  <div className="text-2xl font-bold text-white">60s</div>
                  <div className="text-xs text-blue-100">Generation Time</div>
                </div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-300" />
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-xs text-blue-100">ATS Pass Rate</div>
                </div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center gap-2">
                  <Target className="w-6 h-6 text-orange-300" />
                  <div className="text-2xl font-bold text-white">10K+</div>
                  <div className="text-xs text-blue-100">Resumes Created</div>
                </div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center gap-2">
                  <FileText className="w-6 h-6 text-purple-300" />
                  <div className="text-2xl font-bold text-white">4.9/5</div>
                  <div className="text-xs text-blue-100">User Rating</div>
                </div>
              </Card>
            </div>
            
            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span className="text-sm sm:text-base text-white font-medium">ATS-Optimized</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span className="text-sm sm:text-base text-white font-medium">One-Page Format</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span className="text-sm sm:text-base text-white font-medium">Instant Download</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}