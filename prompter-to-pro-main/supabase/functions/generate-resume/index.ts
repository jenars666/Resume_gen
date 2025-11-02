import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('Generating resume from prompt...');

    const systemPrompt = `You are an expert resume writer and career consultant. Your task is to parse the candidate's description and create a structured, professional, ATS-compliant resume.

IMPORTANT INSTRUCTIONS:
1. Extract ALL relevant information from the prompt
2. Use action verbs (led, developed, implemented, achieved, etc.)
3. Quantify achievements wherever possible
4. Keep bullet points concise but impactful
5. Ensure professional tone throughout
6. Generate a 2-line professional summary that captures the candidate's value proposition
7. Order everything in reverse chronological order
8. Focus on skills, achievements, and impact

You MUST respond with ONLY valid JSON in this exact structure (no other text):
{
  "name": "Full Name",
  "email": "email@example.com",
  "phone": "phone number",
  "linkedin": "LinkedIn URL",
  "summary": "2-line professional summary highlighting key strengths and career goals",
  "education": [
    {
      "degree": "B.Tech in Computer Science",
      "institution": "University Name",
      "year": "2020-2024",
      "gpa": "8.7"
    }
  ],
  "skills": ["Skill1", "Skill2", "Skill3"],
  "experience": [
    {
      "position": "Job Title",
      "company": "Company Name",
      "duration": "May 2024 - July 2024",
      "responsibilities": [
        "Action verb + quantifiable achievement",
        "Action verb + quantifiable achievement"
      ]
    }
  ],
  "projects": [
    {
      "name": "Project Name",
      "description": "Brief description with impact",
      "technologies": ["Tech1", "Tech2"]
    }
  ],
  "achievements": [
    "Achievement with quantifiable impact",
    "Achievement with quantifiable impact"
  ]
}`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'Payment required. Please add credits to continue.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error('No content in AI response');
    }

    console.log('Raw AI response:', content);

    // Parse the JSON response
    let resumeData;
    try {
      // Try to extract JSON if there's any surrounding text
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        resumeData = JSON.parse(jsonMatch[0]);
      } else {
        resumeData = JSON.parse(content);
      }
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      console.error('Content:', content);
      throw new Error('Failed to parse AI response as JSON');
    }

    console.log('Successfully generated resume data');

    return new Response(
      JSON.stringify({ resumeData }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error in generate-resume function:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});