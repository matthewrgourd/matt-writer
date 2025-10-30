
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, ExternalLink, FileText, Github } from 'lucide-react';

const portfolioItems = [
  {
    title: "Launched a developer portal",
    description: "Created a comprehensive developer portal for Viva Wallet clients to get help with environment setup, plugin integration, payment tools, card issuing, and POS terminals.",
    tags: ["Onboarding", "Developer experience", "Help guides"],
    link: "https://developer.viva.com",
    type: "Developer portal"
  },
  {
    title: "Overhauled API documentation",
    description: "Led a complete revamp of the company's API documentation, re-writing OpenAPI specs, and using Redoc to display them consistently and in a user-friendly manner.",
    tags: ["API", "OpenAPI", "Technical writing"],
    link: "https://developer.viva.com/apis-for-payments/payment-api",
    type: "Documentation"
  },
  {
    title: "Contributed to a knowledge base",
    description: "Designed and wrote multiple knowledge base articles for BT Business products and services, creating a searchable database of troubleshooting guides and feature documentation.",
    tags: ["Knowledge base", "Product documentation", "FAQs"],
    link: "https://business.bt.com/help/home",
    type: "FAQs"
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
        ease: "easeOut"
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
            A selection of my technical writing projects and documentation work.
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
            <Card className="card-hover h-full group">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <div className="transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
                    {item.type === "Documentation" && <FileText className="h-5 w-5 text-blue-600" />}
                    {item.type === "Guide" && <Book className="h-5 w-5 text-blue-600" />}
                    {item.type === "Content" && <FileText className="h-5 w-5 text-blue-600" />}
                    {item.type === "Process" && <Github className="h-5 w-5 text-blue-600" />}
                    {item.type === "Developer portal" && <FileText className="h-5 w-5 text-blue-600" />}
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
              <CardFooter>
                <a
                  href={item.link}
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors group/link" target="_blank"
                >
                  View project
                  <ExternalLink className="ml-1 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                </a>
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
