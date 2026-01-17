
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, FileText, Gift, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">About me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
          I work alongside developers to understand complex systems and create resources that help users succeed. I believe great documentation is a team effort, and I thrive on the collaborative problem-solving that comes with it.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-24 animate-gradient"></div>
              <div className="px-6 pt-0 pb-6 relative">
                <div className="h-24 w-24 rounded-full border-4 border-white overflow-hidden -mt-12 mb-4 bg-white">
                  <img
                    src="matt-profile-photo.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Matt Gourd</h3>
                <p className="text-slate-600 mb-4">Senior Technical Writer</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                    London, UK
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="h-4 w-4 mr-2 text-blue-600" />
                    20+ years experience
                  </div>
                </div>

                <a href="Matthew-Gourd.pdf"><Button className="w-full">Download CV</Button></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Background</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              I've worked with engineering teams across startups and enterprises, from fintech platforms to banking systems. I've learned to navigate complex technical environments, adapt to different team cultures, and find the best ways to document everything from well-established APIs to rapidly evolving products. Each project has taught me something new about making technical information accessible and useful.
            </p>
            <p className="text-slate-700 mb-6 leading-relaxed">
            Beyond my professional endeavors, I immerse myself in web development and delve into experimental art. My passions extend to performing as a DJ, creating electronic music, and running half-marathons in support of charitable causes. These pursuits drive and inspire me.
            </p>

            <h4 className="text-xl font-bold mt-8 mb-4">Education and certifications</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: FileText, title: "Using Generative AI in Technical Writing", org: "Cherryleaf (accredited by ISTC)" },
                { icon: Gift, title: "People Manager Programme", org: "Lepaya" },
                { icon: Gift, title: "ICL Technical Writer Training", org: "Fujitsu Ltd." },
                { icon: FileText, title: "BSc (Hons) Technology Management", org: "University of Wales, Cardiff (1 year completed at 2:1 level)" }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <cert.icon className="h-5 w-5 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                  <h5 className="font-bold mb-1">{cert.title}</h5>
                  <p className="text-sm text-slate-600">{cert.org}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
