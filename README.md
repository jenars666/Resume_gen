# 🚀 AI Resume Builder - Prompter to Pro

An intelligent AI-powered resume builder that generates professional, ATS-optimized resumes from simple text prompts. Choose from 8 unique professional templates and download your perfect resume in seconds!

## 🎥 Demo

Watch the full demo video to see all features in action:

https://youtu.be/GetRjcVHWlI
**📹 To display the video above:**





## ✨ Features

### 🤖 AI-Powered Generation
- Generate complete resumes from simple text descriptions
- Intelligent parsing of experience, skills, education, and projects
- Natural language processing for professional content

### 🎨 8 Professional Templates
1. **Classic** - Traditional format for conservative industries
2. **Modern** ⭐ - Contemporary design with blue gradients
3. **Minimal** - Clean and simple layout
4. **Professional** ⭐ - Executive style with bold headers
5. **Creative** ⭐ - Colorful design with purple/pink gradients
6. **Executive** - Premium gold theme for C-level positions
7. **Technical** ⭐ - Dark terminal theme for developers
8. **Elegant** - Sophisticated serif typography

### 📊 ATS Analysis
- Real-time ATS compatibility scoring
- Category-based analysis (Skills, Experience, Education, etc.)
- Actionable recommendations for improvement
- Keyword optimization suggestions

### 📥 Professional PDF Export
- High-quality PDF generation
- Full A4 page layout (210mm × 297mm)
- Template-specific styling preserved
- Single-page optimized format
- Print-ready output

### 🔐 Secure Authentication
- Google OAuth integration
- Protected routes
- User session management



**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd prompter-to-pro

# Install dependencies
npm install

# Start development server
npm run dev
```

### Usage

1. **Sign In** - Authenticate with Google
2. **Enter Prompt** - Describe your background and experience
3. **Generate Resume** - AI creates your professional resume
4. **Choose Template** - Select from 8 unique designs
5. **Review & Edit** - Check ATS score and recommendations
6. **Download PDF** - Get your professional resume

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Component library

### Libraries & Tools
- **Lucide React** - Icon library
- **React Router** - Navigation
- **jsPDF** - PDF generation
- **html2canvas** - HTML to canvas conversion
- **Supabase** - Authentication & backend
- **Tanstack Query** - Data fetching

### AI & Integration
- AI-powered resume generation
- ATS scoring algorithm
- Natural language processing

## 📁 Project Structure

```
prompter-to-pro/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── ATSAnalyzer.tsx # ATS scoring component
│   │   ├── TemplateSelector.tsx
│   │   ├── StyledResumePreview.tsx
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── Landing.tsx     # Landing page
│   │   ├── AppPage.tsx     # Main app page
│   │   └── ReviewPage.tsx  # Resume review page
│   ├── types/              # TypeScript types
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── integrations/       # External integrations
├── public/                 # Static assets
└── ...
```

## 🎨 Template Showcase

### Popular Templates (⭐)
- **Modern** - Perfect for tech and startups
- **Professional** - Ideal for senior positions
- **Creative** - Great for creative roles
- **Technical** - Developer-focused design

### All Templates
Each template includes:
- ✅ Full dark mode support
- ✅ Responsive design
- ✅ ATS-friendly formatting
- ✅ Professional typography
- ✅ Print-ready output

## 📊 Features in Detail

### ATS Analysis
The ATS Analyzer provides:
- **Overall Score** - Percentage-based compatibility
- **Category Scores** - Skills, Experience, Education, Format, Keywords
- **Recommendations** - Specific improvement suggestions
- **Strengths** - What's working well
- **Job Description Match** - Optional job-specific analysis

### PDF Generation
Advanced PDF features:
- **High Resolution** - 2x scale for crisp text
- **Full A4 Layout** - 210mm × 297mm
- **Template Preservation** - Exact styling match
- **Single Page** - Optimized for one page
- **Smart Scaling** - Automatic fit to page

## What technologies are used for this project?

This project is built with:

- **Vite** - Fast build tool
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - Component system
- **Tailwind CSS** - Utility-first CSS
- **Supabase** - Backend & Auth
- **jsPDF** - PDF generation
- **html2canvas** - Canvas rendering





### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain component modularity
- Write clear commit messages
- Test your changes thoroughly



## 🙏 Acknowledgments

- **shadcn/ui** - Beautiful component library
- **Lucide** - Icon system
- **Tailwind CSS** - Styling framework
- **Supabase** - Backend infrastructure






---

