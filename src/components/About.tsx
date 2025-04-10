
import React from 'react';
import { Check, Clock, FileText, Gift, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Experienced technical writer with a passion for making complex technology accessible.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-24"></div>
              <div className="px-6 pt-0 pb-6 relative">
                <div className="h-24 w-24 rounded-full border-4 border-white overflow-hidden -mt-12 mb-4 bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY4MzM5MDUxMA&ixlib=rb-4.0.3&q=80&w=300" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-slate-600 mb-4">Senior Technical Writer</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                    San Francisco, CA (Remote)
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Mail className="h-4 w-4 mr-2 text-blue-600" />
                    sarah@techwriter.com
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="h-4 w-4 mr-2 text-blue-600" />
                    8+ Years Experience
                  </div>
                </div>
                
                <Button className="w-full">Download Resume</Button>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold mb-4">My Story</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              With over 8 years of experience as a technical writer in the software industry, I've specialized in creating documentation that bridges the gap between complex technical concepts and user understanding. My background in computer science combined with strong writing skills allows me to translate technical information into clear, accessible content.
            </p>
            <p className="text-slate-700 mb-6 leading-relaxed">
              I've worked with startups, enterprise companies, and open-source projects to develop documentation strategies, create developer resources, and build knowledge bases that improve user experience and reduce support costs.
            </p>
            
            <h4 className="text-xl font-bold mt-8 mb-4">Work Experience</h4>
            
            <div className="space-y-6">
              <div className="border-l-2 border-blue-600 pl-4">
                <h5 className="font-bold text-lg">Senior Technical Writer</h5>
                <p className="text-blue-600 mb-1">TechCorp Inc. (2020 - Present)</p>
                <p className="text-slate-600 mb-3">
                  Lead technical writer responsible for API documentation, developer guides, and technical content strategy.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Reduced support tickets by 40% through improved documentation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Implemented docs-as-code approach with automated testing and deployment</span>
                  </li>
                </ul>
              </div>
              
              <div className="border-l-2 border-blue-600 pl-4">
                <h5 className="font-bold text-lg">Documentation Specialist</h5>
                <p className="text-blue-600 mb-1">DevSoft Solutions (2018 - 2020)</p>
                <p className="text-slate-600 mb-3">
                  Created user guides, API documentation, and release notes for cloud-based SaaS platform.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Built comprehensive knowledge base with 200+ articles</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Developed style guide and documentation templates</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <h4 className="text-xl font-bold mt-8 mb-4">Education & Certifications</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <FileText className="h-5 w-5 text-blue-600 mb-2" />
                <h5 className="font-bold mb-1">B.S. Computer Science</h5>
                <p className="text-sm text-slate-600">University of California, Berkeley</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <Gift className="h-5 w-5 text-blue-600 mb-2" />
                <h5 className="font-bold mb-1">Technical Writing Certification</h5>
                <p className="text-sm text-slate-600">Society for Technical Communication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
