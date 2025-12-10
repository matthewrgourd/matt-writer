
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
    title: "Technical documentation",
    icon: <FileText className="h-8 w-8 text-blue-600" />,
    skills: [
      "API documentation and reference guides",
      "Developer tutorials and getting started guides",
      "Release notes and changelog management",
      "Technical blog posts and articles",
      "SDK and library documentation"
    ]
  },
  {
    title: "Technical understanding",
    icon: <Code className="h-8 w-8 text-blue-600" />,
    skills: [
      "Reading and understanding code",
      "REST and GraphQL API concepts",
      "Version control with Git",
      "CI/CD pipelines and deployment processes",
      "Software architecture patterns"
    ]
  },
  {
    title: "Information architecture",
    icon: <LayoutTemplate className="h-8 w-8 text-blue-600" />,
    skills: [
      "Content organization and navigation design",
      "User research and persona development",
      "Content audits and gap analysis",
      "Style guide creation and maintenance",
      "Search optimization for technical content"
    ]
  },
  {
    title: "Documentation tools",
    icon: <Laptop className="h-8 w-8 text-blue-600" />,
    skills: [
      "Docs-as-code with Markdown and Git",
      "Static site generators (Docusaurus, MkDocs)",
      "OpenAPI/Swagger for API documentation",
      "DITA and structured authoring",
      "AI tools for content assistance"
    ]
  },
  {
    title: "UX writing",
    icon: <PenTool className="h-8 w-8 text-blue-600" />,
    skills: [
      "Clear, actionable error messages",
      "Informative tooltips and help text",
      "Intuitive button and menu labels",
      "User onboarding flows",
      "Microcopy for UI elements"
    ]
  },
  {
    title: "Collaboration",
    icon: <Users className="h-8 w-8 text-blue-600" />,
    skills: [
      "Working with engineering teams",
      "Cross-functional stakeholder management",
      "Technical interviews and knowledge transfer",
      "Building documentation culture",
      "User testing and feedback integration"
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
            For 20+ years, I've developed a diverse skill set spanning technical writing, information architecture, and cross-functional collaboration. Here's what I bring to documentation projects.
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
                <h3 className="text-2xl font-bold mb-3">My documentation approach</h3>
                <p className="text-slate-600 max-w-2xl">
                  A collaborative process for creating technical documentation that serves both users and the teams who maintain it.
                </p>
              </div>
              <div className="flex-shrink-0 animate-pulse-subtle">
                <Search className="h-12 w-12 text-blue-600" />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { num: 1, title: "Research", desc: "Collaborate with engineers to understand the system. Review code, architecture, and existing documentation. Identify user needs and pain points." },
                { num: 2, title: "Plan", desc: "Design documentation structure based on user journeys. Create content outlines. Establish review cycles with stakeholders." },
                { num: 3, title: "Write", desc: "Create clear, user-focused content. Include practical examples. Explain concepts progressively from simple to complex." },
                { num: 4, title: "Iterate", desc: "Gather feedback from technical reviewers and users. Refine based on testing. Keep docs updated as products evolve." }
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
