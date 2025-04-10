
import React from 'react';
import { 
  Book, 
  Code, 
  FileText, 
  GitBranch, 
  Laptop, 
  LayoutTemplate, 
  MessageSquare, 
  PenTool, 
  Search, 
  Users 
} from 'lucide-react';

const skillsCategories = [
  {
    title: "Technical Writing",
    icon: <FileText className="h-8 w-8 text-blue-600" />,
    skills: [
      "API Documentation",
      "Developer Guides",
      "Release Notes",
      "Knowledge Base Articles",
      "Technical Blogs"
    ]
  },
  {
    title: "Development Knowledge",
    icon: <Code className="h-8 w-8 text-blue-600" />,
    skills: [
      "HTML/CSS/JavaScript",
      "REST APIs",
      "GraphQL",
      "Git & Version Control",
      "CI/CD Pipelines"
    ]
  },
  {
    title: "Content Strategy",
    icon: <LayoutTemplate className="h-8 w-8 text-blue-600" />,
    skills: [
      "Information Architecture",
      "User Personas",
      "Content Audits",
      "Style Guides",
      "SEO Optimization"
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <Laptop className="h-8 w-8 text-blue-600" />,
    skills: [
      "Markdown/AsciiDoc",
      "DITA/XML",
      "Confluence/Notion",
      "Swagger/OpenAPI",
      "GitHub/GitLab"
    ]
  },
  {
    title: "UX Writing",
    icon: <PenTool className="h-8 w-8 text-blue-600" />,
    skills: [
      "Interface Copy",
      "Error Messages",
      "Tooltips & Help Text",
      "Onboarding Flows",
      "Microcopy"
    ]
  },
  {
    title: "Collaboration",
    icon: <Users className="h-8 w-8 text-blue-600" />,
    skills: [
      "Cross-functional Teams",
      "Developer Relations",
      "Subject Matter Experts",
      "Community Management",
      "User Testing"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Combining technical knowledge with writing expertise to create exceptional documentation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start gap-2">
                    <span className="bg-blue-100 text-blue-800 rounded-full p-1 mt-0.5">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="10" 
                        height="10" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="4" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </span>
                    <span className="text-slate-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold mb-3">The Documentation Process</h3>
                <p className="text-slate-600 max-w-2xl">
                  My methodical approach to documentation ensures complete, accurate, and user-friendly content at every stage of the product lifecycle.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Search className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-slate-100">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full h-8 w-8 flex items-center justify-center mr-3">1</div>
                  <h4 className="font-semibold">Research</h4>
                </div>
                <p className="text-sm text-slate-600">Understand the product, audience, and technical requirements</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-slate-100">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full h-8 w-8 flex items-center justify-center mr-3">2</div>
                  <h4 className="font-semibold">Plan</h4>
                </div>
                <p className="text-sm text-slate-600">Structure content and create information architecture</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-slate-100">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full h-8 w-8 flex items-center justify-center mr-3">3</div>
                  <h4 className="font-semibold">Create</h4>
                </div>
                <p className="text-sm text-slate-600">Write clear, concise, and technically accurate content</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-slate-100">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full h-8 w-8 flex items-center justify-center mr-3">4</div>
                  <h4 className="font-semibold">Review & Refine</h4>
                </div>
                <p className="text-sm text-slate-600">Test, gather feedback, and iterate for continuous improvement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
