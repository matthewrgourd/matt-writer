
import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  FileText,
  Laptop,
  LayoutTemplate,
  PenTool,
  Search,
  Users
} from 'lucide-react';

const skillsCategories = [
  {
    title: "Documentation practice",
    icon: <FileText className="h-8 w-8 text-blue-600" />,
    skills: [
      "Docs-as-Code",
      "Documentation strategy",
      "Information architecture",
      "Documentation analytics",
      "Onboarding journeys"
    ]
  },
  {
    title: "Developer documentation",
    icon: <Code className="h-8 w-8 text-blue-600" />,
    skills: [
      "Developer portals",
      "API documentation",
      "SDK documentation",
      "OpenAPI and Swagger",
      "CLI testing"
    ]
  },
  {
    title: "Formats and specs",
    icon: <LayoutTemplate className="h-8 w-8 text-blue-600" />,
    skills: [
      "Markdown",
      "AsciiDoc",
      "MDX",
      "JSON",
      "YAML"
    ]
  },
  {
    title: "Static website generators",
    icon: <Laptop className="h-8 w-8 text-blue-600" />,
    skills: [
      "Docusaurus",
      "Hugo",
      "Antora",
      "Mintlify",
      "Scalar"
    ]
  },
  {
    title: "Version control and workflow",
    icon: <PenTool className="h-8 w-8 text-blue-600" />,
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Branching and pull request workflows",
      "Code review collaboration"
    ]
  },
  {
    title: "AI and productivity tooling",
    icon: <Users className="h-8 w-8 text-blue-600" />,
    skills: [
      "VS Code",
      "Cursor",
      "Copilot",
      "Agentic workflows",
      "MCP servers"
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
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            My skills include docs-as-code, API/SDK documentation, information architecture, documentation strategy, and AI-assisted workflows.
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
                  An AI-augmented workflow that pairs engineering context with iterative validation, built to serve both the people reading the docs and the people who have to maintain them.
                </p>
              </div>
              <div className="flex-shrink-0 animate-pulse-subtle">
                <Search className="h-12 w-12 text-blue-600" />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { num: 1, title: "Research", desc: "Collaborate with engineers to understand the system, then use AI to accelerate codebase discovery, terminology mapping, and gap analysis. Validate findings against real user pain points." },
                { num: 2, title: "Plan", desc: "Design the information architecture around real user tasks, then use AI to generate structured outlines, topic hierarchies, and draft content plans for stakeholder review." },
                { num: 3, title: "Write", desc: "Draft clear, user-focused documentation with AI support for first-pass content, examples, and variations, while applying human review for technical accuracy, tone, and clarity." },
                { num: 4, title: "Iterate", desc: "Continuously improve documentation using feedback, analytics, and AI-assisted refinement. Re-test critical flows and keep content aligned with product and API changes." }
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
