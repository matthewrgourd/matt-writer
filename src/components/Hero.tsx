
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 md:pr-8 mb-10 md:mb-0">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6 animate-fade-in">
              Documentation Manager
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in animate-delay-100">
              Bridging the gap between <span className="text-blue-600">code</span> and <span className="text-blue-600">communication</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl animate-fade-in animate-delay-200">
            Your documentation shouldn't make developers cry. I write clear, friendly docs that actually help people build things with your APIs. Whether you're a fintech startup trying to get developers onboard, or an enterprise platform drowning in support tickets, good documentation isn't just nice to have - it's your secret weapon for user adoption.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
              <Button asChild size="lg" className="gap-2">
                <a href="#portfolio">
                  View my work
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="#about">
                  <FileText className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-2/5 animate-fade-in animate-delay-400">
            <div className="relative">
              <div className="bg-slate-100 rounded-lg overflow-hidden border border-slate-200 shadow-md">
                <div className="bg-slate-800 text-white p-3 text-sm font-mono flex items-center">
                  <div className="flex gap-1.5 mr-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span>matt-writer.js</span>
                </div>
                <div className="p-6">
                <div className="code-block">
                  <p className="text-blue-400">// matt-writer.js</p>
                  <p className="text-blue-400 mt-2">// What I do best</p>
                  <p className="text-green-400 mt-2">const <span className="text-yellow-300">skills</span> = {'{'}</p>
                  <p className="ml-4 text-purple-300">documentation: <span className="text-orange-300">['APIs', 'SDKs', 'developer guides']</span>,</p>
                  <p className="ml-4 text-purple-300">strategy: <span className="text-orange-300">['content architecture', 'user research']</span>,</p>
                  <p className="ml-4 text-purple-300">tools: <span className="text-orange-300">['docs-as-code', 'CI/CD workflows']</span></p>
                  <p className="text-green-400">{'};'}</p>
                  <p className="text-blue-400 mt-4">// Ready to help?</p>
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
      </div>
    </section>
  );
};

export default Hero;
