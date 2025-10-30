
import React from 'react';
import { motion } from 'framer-motion';
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
    title: "Technical writing",
    icon: <FileText className="h-8 w-8 text-blue-600" />,
    skills: [
      "API documentation",
      "Developer guides",
      "Release notes",
      "Knowledge base articles",
      "Technical blog posts"
    ]
  },
  {
    title: "Development knowledge",
    icon: <Code className="h-8 w-8 text-blue-600" />,
    skills: [
      "HTML/CSS/JavaScript",
      "REST APIs",
      "GraphQL",
      "Git and version control",
      "CI/CD pipelines"
    ]
  },
  {
    title: "Content strategy",
    icon: <LayoutTemplate className="h-8 w-8 text-blue-600" />,
    skills: [
      "Information architecture",
      "User personas",
      "Content audits",
      "Style guides",
      "SEO optimisation"
    ]
  },
  {
    title: "Tools and platforms",
    icon: <Laptop className="h-8 w-8 text-blue-600" />,
    skills: [
      "Docs-as-Code: Markdown/AsciiDoc",
      "DITA/XML; Diátaxis",
      "AI/LLMs: Copilot, custom GPTs, RAGs",
      "Swagger/OpenAPI",
      "GitHub/GitLab"
    ]
  },
  {
    title: "UX writing",
    icon: <PenTool className="h-8 w-8 text-blue-600" />,
    skills: [
      "Interface copy",
      "Error messages",
      "Tooltips and help text",
      "Onboarding flows",
      "Microcopy"
    ]
  },
  {
    title: "Collaboration",
    icon: <Users className="h-8 w-8 text-blue-600" />,
    skills: [
      "Cross-functional teams",
      "Developer relations",
      "Subject matter experts",
      "Stakeholder management",
      "User testing"
    ]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Skills and expertise</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Combining technical knowledge with writing expertise and AI to create exceptional docs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300">{category.icon}</div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05, duration: 0.3 }}
                  >
                    <span className="bg-blue-100 text-blue-800 rounded-full p-1 mt-0.5 transition-colors group-hover:bg-blue-600 group-hover:text-white">
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
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold mb-3">The documentation process</h3>
                <p className="text-slate-600 max-w-2xl">
                  My methodical approach to documentation ensures complete, accurate, and user-friendly content at every stage of the product lifecycle.
                </p>
              </div>
              <div className="flex-shrink-0 animate-pulse-subtle">
                <Search className="h-12 w-12 text-blue-600" />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { num: 1, title: "Research", desc: "Understand the product, audience, and technical requirements" },
                { num: 2, title: "Plan", desc: "Structure content and create information architecture" },
                { num: 3, title: "Create", desc: "Write clear, concise, and technically accurate content" },
                { num: 4, title: "Review and refine", desc: "Test, gather feedback, and iterate for continuous improvement" }
              ].map((step, index) => (
                <motion.div
                  key={step.num}
                  className="bg-white p-4 rounded-lg border border-slate-100 hover:shadow-md transition-shadow cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 text-blue-600 rounded-full h-8 w-8 flex items-center justify-center mr-3 font-bold">
                      {step.num}
                    </div>
                    <h4 className="font-semibold">{step.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
