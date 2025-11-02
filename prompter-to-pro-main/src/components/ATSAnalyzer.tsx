import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  FileText,
  Target,
  Sparkles,
  AlertTriangle
} from "lucide-react";
import { ResumeData } from "@/types/resume";
import { analyzeATS, ATSAnalysisResult } from "@/lib/atsAnalyzer";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

interface ATSAnalyzerProps {
  resumeData: ResumeData;
}

export default function ATSAnalyzer({ resumeData }: ATSAnalyzerProps) {
  const [jobDescription, setJobDescription] = useState("");
  const [analysis, setAnalysis] = useState<ATSAnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Auto-analyze on mount and when resume data changes
  useEffect(() => {
    if (resumeData) {
      const result = analyzeATS(resumeData, jobDescription || undefined);
      setAnalysis(result);
    }
  }, [resumeData, jobDescription]);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Small delay to show loading state
    setTimeout(() => {
      const result = analyzeATS(resumeData, jobDescription || undefined);
      setAnalysis(result);
      setIsAnalyzing(false);
    }, 300);
  };

  if (!analysis) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            ATS Score Analyzer
          </CardTitle>
          <CardDescription>
            Analyzing your resume for ATS compatibility...
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getPriorityColor = (priority: string) => {
    if (priority === 'high') return 'destructive';
    if (priority === 'medium') return 'default';
    return 'secondary';
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5" />
          ATS Score Analyzer
        </CardTitle>
        <CardDescription>
          Get detailed insights on your resume's ATS compatibility
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Score */}
        <div className="text-center space-y-4 p-6 bg-muted/50 rounded-lg">
          <div className="flex items-center justify-center gap-3">
            <div className={`text-6xl font-bold ${getScoreColor(analysis.overallScore)}`}>
              {analysis.overallScore}
            </div>
            <div className="text-3xl text-muted-foreground">/100</div>
          </div>
          <Progress 
            value={analysis.overallScore} 
            className="h-3"
          />
          <div className="flex items-center justify-center gap-2">
            {analysis.overallScore >= 80 ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-600">Excellent ATS Score</span>
              </>
            ) : analysis.overallScore >= 60 ? (
              <>
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                <span className="font-semibold text-yellow-600">Good - Room for Improvement</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-red-600" />
                <span className="font-semibold text-red-600">Needs Significant Improvement</span>
              </>
            )}
          </div>
        </div>

        {/* Job Description Input */}
        <div className="space-y-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-2">
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div className="flex-1">
              <label className="text-sm font-semibold text-blue-900 dark:text-blue-300">
                Job Description (Optional)
              </label>
              <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">
                Paste the job posting here to analyze keyword matches and get tailored recommendations
              </p>
            </div>
          </div>
          <Textarea
            placeholder="Example: We are looking for a Full Stack Developer with experience in React, Node.js, TypeScript, MongoDB, and AWS. The ideal candidate should have 3+ years of experience building scalable web applications..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="min-h-[120px] bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700 focus:border-blue-500 dark:focus:border-blue-500"
          />
          <Button 
            onClick={handleAnalyze} 
            disabled={isAnalyzing}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            {isAnalyzing ? (
              <>
                <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                Analyzing Keywords...
              </>
            ) : (
              <>
                <Target className="w-4 h-4 mr-2" />
                {jobDescription ? 'Re-analyze with Job Description' : 'Analyze with Job Description'}
              </>
            )}
          </Button>
          {jobDescription && (
            <p className="text-xs text-blue-600 dark:text-blue-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Job description added - keyword analysis active
            </p>
          )}
        </div>

        <Tabs defaultValue="scores" className="w-full">
          <TabsList className="grid w-full grid-cols-3 gap-2 p-2 h-auto">
            <TabsTrigger value="scores" className="text-sm px-4 py-3 whitespace-normal min-h-[44px]">Category Score</TabsTrigger>
            <TabsTrigger value="recommendations" className="text-sm px-4 py-3 whitespace-normal min-h-[44px]">Recommendations</TabsTrigger>
            <TabsTrigger value="strengths" className="text-sm px-4 py-3 whitespace-normal min-h-[44px]">Strengths</TabsTrigger>
          </TabsList>

          {/* Category Scores */}
          <TabsContent value="scores" className="space-y-4">
            <div className="grid gap-4">
              {Object.entries(analysis.categoryScores).map(([category, score]) => (
                <div key={category} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium capitalize">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className={`font-semibold ${getScoreColor(score)}`}>
                      {score}/100
                    </span>
                  </div>
                  <Progress 
                    value={score} 
                    className="h-2"
                  />
                </div>
              ))}
            </div>

            {/* Keyword Analysis (if job description provided) */}
            {jobDescription && analysis.matchedKeywords && analysis.missingKeywords && (
              <div className="mt-6 space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Keyword Analysis
                </h4>
                
                {analysis.matchedKeywords.length > 0 && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Matched Keywords ({analysis.matchedKeywords.length}):
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {analysis.matchedKeywords.slice(0, 15).map((keyword, idx) => (
                        <Badge key={idx} variant="default" className="bg-green-100 text-green-800">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {analysis.missingKeywords.length > 0 && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Missing Keywords ({analysis.missingKeywords.length}):
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {analysis.missingKeywords.slice(0, 15).map((keyword, idx) => (
                        <Badge key={idx} variant="outline" className="border-red-300 text-red-700">
                          <XCircle className="w-3 h-3 mr-1" />
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                    {analysis.missingKeywords.length > 15 && (
                      <p className="text-xs text-muted-foreground mt-2">
                        +{analysis.missingKeywords.length - 15} more...
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </TabsContent>

          {/* Recommendations */}
          <TabsContent value="recommendations" className="space-y-4">
            {analysis.recommendations.length === 0 ? (
              <Alert>
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Great Job!</AlertTitle>
                <AlertDescription>
                  Your resume looks good! No major improvements needed at this time.
                </AlertDescription>
              </Alert>
            ) : (
              analysis.recommendations.map((rec, idx) => (
                <Alert 
                  key={idx} 
                  variant={rec.priority === 'high' ? 'destructive' : 'default'}
                >
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle className="flex items-center gap-2">
                    {rec.category}
                    <Badge variant={getPriorityColor(rec.priority)}>
                      {rec.priority}
                    </Badge>
                  </AlertTitle>
                  <AlertDescription className="space-y-2 mt-2">
                    <p className="font-medium">{rec.message}</p>
                    <p className="text-sm">{rec.improvement}</p>
                  </AlertDescription>
                </Alert>
              ))
            )}
          </TabsContent>

          {/* Strengths */}
          <TabsContent value="strengths" className="space-y-4">
            {analysis.strengths.length > 0 ? (
              <div className="space-y-3">
                {analysis.strengths.map((strength, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{strength}</span>
                  </div>
                ))}
              </div>
            ) : (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Building Your Resume</AlertTitle>
                <AlertDescription>
                  Continue adding content to build up your resume strengths.
                </AlertDescription>
              </Alert>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

