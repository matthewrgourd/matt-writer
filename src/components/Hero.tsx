
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full opacity-10 blur-3xl animate-pulse-subtle"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full opacity-10 blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 md:pr-8 mb-10 md:mb-0">
            <motion.div
              className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Documentation Manager
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Expert <span className="text-blue-600">Technical Writer</span> & <span className="text-blue-600">Documentation Manager</span>
            </motion.h1>
            <motion.p
              className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
            Transform complex APIs into developer-friendly documentation that drives adoption. With 20+ years of technical writing experience, I specialize in API documentation, developer guides, and content strategy for fintech and enterprise platforms. Your docs become your competitive advantage.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="gap-2">
                  <a href="#portfolio">
                    View my work
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href="#about">
                    <FileText className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <div className="md:w-2/5 animate-fade-in animate-delay-400">
            <div className="relative animate-float">
              <div className="bg-slate-100 rounded-lg overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="bg-slate-800 text-white p-3 text-sm font-mono flex items-center">
                  <div className="flex gap-1.5 mr-3">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:scale-110 transition-transform cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:scale-110 transition-transform cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:scale-110 transition-transform cursor-pointer"></div>
                  </div>
                  <span>matt-writer.js</span>
                </div>
                <div className="p-6">
                <div className="code-block">
                  <p className="text-blue-400 mt-2">// What I do best</p>
                  <p className="text-green-400 mt-2">const <span className="text-yellow-300">skills</span> = {'{'}</p>
                  <p className="ml-4 text-purple-300">documentation: <span className="text-orange-300">['APIs', 'SDKs', 'developer guides']</span>,</p>
                  <p className="ml-4 text-purple-300">strategy: <span className="text-orange-300">['content architecture', 'user research']</span>,</p>
                  <p className="ml-4 text-purple-300">tools: <span className="text-orange-300">['docs-as-code', 'CI/CD workflows']</span></p>
                  <p className="text-green-400">{'};'}</p>
                  <p className="text-blue-400 mt-4">// Ready to collaborate?</p>
                  <p className="text-green-400 mt-2">function <span className="text-yellow-300">startProject</span>() {'{'}</p>
                  <p className="ml-4 text-slate-200">return "Let's make your docs actually useful";</p>
                  <p className="text-green-400">{'}'}</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
