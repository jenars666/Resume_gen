import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

export type ResumeTemplate = 'classic' | 'modern' | 'minimal' | 'professional' | 'creative' | 'executive' | 'technical' | 'elegant';

interface TemplateSelectorProps {
  selectedTemplate: ResumeTemplate;
  onSelectTemplate: (template: ResumeTemplate) => void;
}

const templates = [
  {
    id: 'classic' as ResumeTemplate,
    name: 'Classic',
    description: 'Traditional format with clear sections',
    preview: 'bg-gradient-to-br from-slate-100 to-slate-200',
    popular: false,
  },
  {
    id: 'modern' as ResumeTemplate,
    name: 'Modern',
    description: 'Contemporary design with accent colors',
    preview: 'bg-gradient-to-br from-blue-100 to-indigo-200',
    popular: true,
  },
  {
    id: 'minimal' as ResumeTemplate,
    name: 'Minimal',
    description: 'Clean and simple layout',
    preview: 'bg-gradient-to-br from-gray-50 to-gray-100',
    popular: false,
  },
  {
    id: 'professional' as ResumeTemplate,
    name: 'Professional',
    description: 'Executive style with bold headers',
    preview: 'bg-gradient-to-br from-slate-200 to-blue-200',
    popular: true,
  },
  {
    id: 'creative' as ResumeTemplate,
    name: 'Creative',
    description: 'Colorful design for creative roles',
    preview: 'bg-gradient-to-br from-purple-100 to-pink-200',
    popular: true,
  },
  {
    id: 'executive' as ResumeTemplate,
    name: 'Executive',
    description: 'Premium design for senior positions',
    preview: 'bg-gradient-to-br from-amber-100 to-orange-200',
    popular: false,
  },
  {
    id: 'technical' as ResumeTemplate,
    name: 'Technical',
    description: 'Developer-focused with code aesthetics',
    preview: 'bg-gradient-to-br from-green-100 to-teal-200',
    popular: true,
  },
  {
    id: 'elegant' as ResumeTemplate,
    name: 'Elegant',
    description: 'Sophisticated serif typography',
    preview: 'bg-gradient-to-br from-rose-100 to-red-200',
    popular: false,
  },
];

export default function TemplateSelector({ selectedTemplate, onSelectTemplate }: TemplateSelectorProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          Choose Resume Template
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Select a design that best represents your professional style
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {templates.map((template) => (
          <Card
            key={template.id}
            onClick={() => onSelectTemplate(template.id)}
            className={`relative cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedTemplate === template.id
                ? 'ring-2 ring-blue-500 shadow-lg'
                : 'hover:shadow-md'
            }`}
          >
            {/* Selected Indicator */}
            {selectedTemplate === template.id && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center z-10">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}

            {/* Popular Badge */}
            {template.popular && (
              <Badge className="absolute top-2 left-2 bg-orange-500 text-white text-xs">
                Popular
              </Badge>
            )}

            {/* Template Preview */}
            <div className={`h-32 rounded-t-lg ${template.preview} p-4 flex flex-col gap-2`}>
              <div className="w-full h-2 bg-white/50 rounded"></div>
              <div className="w-3/4 h-2 bg-white/40 rounded"></div>
              <div className="w-full h-1 bg-white/30 rounded mt-2"></div>
              <div className="w-full h-1 bg-white/30 rounded"></div>
              <div className="w-2/3 h-1 bg-white/30 rounded"></div>
            </div>

            {/* Template Info */}
            <div className="p-3">
              <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">
                {template.name}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {template.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
