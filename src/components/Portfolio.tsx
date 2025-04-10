
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, ExternalLink, FileText, Github } from 'lucide-react';

const portfolioItems = [
  {
    title: "API Documentation Overhaul",
    description: "Led a complete revamp of the company's API documentation, implementing OpenAPI specs and interactive documentation that reduced support tickets by 45%.",
    tags: ["API", "OpenAPI", "Technical Writing"],
    link: "#",
    type: "Documentation"
  },
  {
    title: "Developer Onboarding Guide",
    description: "Created a comprehensive onboarding guide for new developers, including environment setup, coding standards, and workflow processes.",
    tags: ["Onboarding", "Developer Experience", "Guides"],
    link: "#",
    type: "Guide"
  },
  {
    title: "Product Knowledge Base",
    description: "Designed and wrote over 200 knowledge base articles for a SaaS platform, creating a searchable database of troubleshooting guides and feature documentation.",
    tags: ["Knowledge Base", "Product Documentation", "UX Writing"],
    link: "#",
    type: "Documentation"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            A selection of my technical writing projects and documentation work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  {item.type === "Documentation" && <FileText className="h-5 w-5 text-blue-600" />}
                  {item.type === "Guide" && <Book className="h-5 w-5 text-blue-600" />}
                  {item.type === "Content" && <FileText className="h-5 w-5 text-blue-600" />}
                  {item.type === "Process" && <Github className="h-5 w-5 text-blue-600" />}
                  <Badge variant="outline" className="font-mono text-xs">
                    {item.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-4">
                  {item.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <a
                  href={item.link}
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Project
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
