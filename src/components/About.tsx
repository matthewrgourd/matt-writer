
import React from 'react';
import { Check, Clock, FileText, Gift, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Experienced technical writer with a knack for making complex technology accessible.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-24"></div>
              <div className="px-6 pt-0 pb-6 relative">
                <div className="h-24 w-24 rounded-full border-4 border-white overflow-hidden -mt-12 mb-4 bg-white">
                  <img
                    src="matt-profile-photo.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Matt Gourd</h3>
                <p className="text-slate-600 mb-4">Documentation Manager</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                    London, UK (Remote)
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="h-4 w-4 mr-2 text-blue-600" />
                    20+ Years Experience
                  </div>
                </div>

                <a href="Matthew-Gourd.pdf"><Button className="w-full">Download CV</Button></a>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold mb-4">My story</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              With over two decades of experience as a technical writer, I've had the privilege of helping some remarkable companies, ranging from small startups to FTSE 100s. Creating documentation for software developers is where I excel, and my approachable and amiable nature makes working with me a breeze.
            </p>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Beyond my professional endeavors, I immerse myself in web development and delve into experimental art. My passions extend to DJ-ing, creating electronic music, and runnning half-marathons in support of charitable causes. These pursuits drive and inspire me.
            </p>

            <h4 className="text-xl font-bold mt-8 mb-4">Work experience</h4>

            <div className="space-y-6">
              <div className="border-l-2 border-blue-600 pl-4">
                <h5 className="font-bold text-lg">Technical Documentation Manager</h5>
                <p className="text-blue-600 mb-1">Backbase (2023 - present)</p>

              <p className="text-slate-600 mb-3">
                    Manage and mentor a team of technical writers, encouraging performance, cohesion, and professional growth.
                  </p>

                  <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Champion documentation quality through consistent standards, rationalised processes, and adherence to internal style guides</span>
                  </li>

                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Partner with backend and frontend engineers to capture and translate complex technical concepts into clear, user-focused documentation</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-blue-600 pl-4">
                <h5 className="font-bold text-lg">Senior Technical Writer</h5>
                <p className="text-blue-600 mb-1">Backbase (2021 - 2023)</p>
                <p className="text-slate-600 mb-3">
                  Steered the development of loan origination software documentation for global banking clients, ensuring clarity and usability.
                </p>
                <ul className="space-y-2">

                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Standardised documentation structure and consistency using the Google developer documentation style guide</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Liaised with product, QA, and design teams to formulate content strategy and adopt best practices in documentation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Introduced internal process improvements in documentation planning, peer review, and stakeholder engagement</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Joined forces with frontend engineers to refine in-product UX copy, maximising alignment with user needs and design principles</span>
                  </li>
                </ul>
              </div>
            </div>

            <h4 className="text-xl font-bold mt-8 mb-4">Education and certifications</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <FileText className="h-5 w-5 text-blue-600 mb-2" />
              <h5 className="font-bold mb-1">Using Generative AI in Technical Writing</h5>
              <p className="text-sm text-slate-600">Cherryleaf (accredited by ISTC)</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <Gift className="h-5 w-5 text-blue-600 mb-2" />
              <h5 className="font-bold mb-1">People Manager Programme</h5>
              <p className="text-sm text-slate-600">Lepaya</p>
            </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <Gift className="h-5 w-5 text-blue-600 mb-2" />
                <h5 className="font-bold mb-1">ICL Technical Writer Training</h5>
                <p className="text-sm text-slate-600">Fujitsu Ltd.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <FileText className="h-5 w-5 text-blue-600 mb-2" />
                <h5 className="font-bold mb-1">BSc (Hons) Technology Management</h5>
                <p className="text-sm text-slate-600">University of Wales, Cardiff (1 year completed at 2:1 level)</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
