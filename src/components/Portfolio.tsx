
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, ExternalLink, FileText, Github } from 'lucide-react';

const portfolioItems = [
  {
    title: "API documentation platform",
    description: "Built a product-focused API documentation platform using Docusaurus and Scalar, with a Diataxis-based docs structure, docset/version-aware information architecture, and explanatory API playground guidance for each product area.",
    tags: ["Docusaurus", "Scalar", "Vercel"],
    image: "/api-docs.png",
    imageAlt: "Screenshot of API documentation platform",
    link: "",
    websiteLink: "https://www.devdocify.com/tfl/api-playground",
    githubLink: "https://github.com/matthewrgourd/doc-platform",
    type: "Documentation platform"
  },
  {
    title: "Enterprise documentation site",
    description: "Lead technical writer for a fintech integration platform, overseeing conceptual overviews, quickstart guides, and implementation guidance to help banking teams understand Grand Central's architecture, connectors, and APIs.",
    tags: ["Developer experience", "Documentation site", "Documentation management"],
    image: "/grand-central-docs.png",
    imageAlt: "Screenshot of enterprise documentation site",
    link: "https://grandcentral.backbase.io",
    primaryLinkLabel: "View website",
    type: "Developer documentation"
  },
  {
    title: "Developer portal",
    description: "Built a modern, searchable developer portal for a payments platform, replacing outdated documentation. Partnered with engineering teams to deliver clear getting-started guides, API references, and integration tutorials that cut onboarding time and reduced support requests.",
    tags: ["Developer experience", "Portal design", "API documentation"],
    image: "/viva-developer-portal.png",
    imageAlt: "Screenshot of payments developer portal",
    link: "https://developer.viva.com",
    primaryLinkLabel: "View website",
    type: "Developer portal"
  }
];

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Recent projects include a multi-product API documentation platform, an enterprise integration docs site, and a payments developer portal. Each built to make onboarding and integration faster and clearer for technical teams.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
            <Card className="card-hover h-full group overflow-hidden">
              <div className="aspect-[16/9] bg-slate-100 border-b border-slate-200">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <div className="transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
                    {item.type === "Documentation" && <FileText className="h-5 w-5 text-blue-600" />}
                    {item.type === "Guide" && <Book className="h-5 w-5 text-blue-600" />}
                    {item.type === "Content" && <FileText className="h-5 w-5 text-blue-600" />}
                    {item.type === "Process" && <Github className="h-5 w-5 text-blue-600" />}
                    {item.type === "Developer portal" && <FileText className="h-5 w-5 text-blue-600" />}
                    {item.type === "Documentation platform" && <FileText className="h-5 w-5 text-blue-600" />}
                    {item.type === "FAQs" && <Book className="h-5 w-5 text-blue-600" />}
                  </div>
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
              <CardFooter className="flex-col items-start gap-1">
                {item.link && (
                  <a
                    href={item.link}
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors group/link" target="_blank"
                  >
                    {item.primaryLinkLabel || "View project"}
                    <ExternalLink className="ml-1 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
                {item.websiteLink && (
                  <a
                    href={item.websiteLink}
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors group/link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View website
                    <ExternalLink className="ml-1 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
                {item.githubLink && (
                  <a
                    href={item.githubLink}
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors group/link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View source
                    <Github className="ml-1 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </CardFooter>
            </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
