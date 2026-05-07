'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Attendance System",
    category: "Web Development",
    description: "An attendance system built with Flask, designed for classrooms and offices.",
    color: "from-blue-500/20 to-purple-500/20",
    link: "#"
  },
  {
    title: "AI-powered Crop Disease Detection System",
    category: "Machine Learning",
    description: "A data-driven mobile app that detects crop diseases using machine learning models",
    color: "from-emerald-500/20 to-teal-500/20",
    link: "https://github.com/4Sandarv/Crop_Disease_Detection_Android_App"
  },
  {
    title: "Cinematic Portfolio",
    category: "Web Engineering",
    description: "A high-end scrollytelling portfolio built with Next.js and Framer Motion, featuring high-performance canvas animations.",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://your-portfolio-link.com"
  },
  {
    title: "Personal Portfolio",
    category: "Web Engineering",
    description: "My another digital home hosted at www.sandarvlamichhane.com.np, showcasing my professional journey and comprehensive project history.",
    color: "from-pink-500/20 to-rose-500/20",
    link: "http://www.sandarvlamichhane.com.np"
  }
];

const Projects: React.FC = () => {
  return (
    <section className="bg-[#121212] py-24 px-10 md:px-24">
      <div className="mb-16">
        <h2 className="text-4xl font-bold md:text-6xl tracking-tight">Selected Works</h2>
        <div className="mt-4 h-1 w-24 bg-white"></div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-white/20`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition-opacity group-hover:opacity-100`}></div>

            <div className="relative z-10">
              <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">{project.category}</span>
              <h3 className="mt-2 text-3xl font-bold">{project.title}</h3>
              <p className="mt-4 text-gray-400 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-8">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:underline pointer-events-auto"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mt-32">
        <h2 className="text-4xl font-bold md:text-6xl tracking-tight mb-16">Technical Toolbox</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-400">Languages</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Python</li>
              <li>JavaScript</li>
              <li>C / C++</li>
              <li>SQL</li>
              <li>PHP</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-purple-400">Frameworks</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Flask / SQLAlchemy</li>
              <li>React / Next.js</li>
              <li>Tailwind CSS</li>
              <li>HTML / CSS / JS</li>
              <li>Scikit-learn / TensorFlow</li>
              <li>OpenCV</li>
              <li>Pandas / NumPy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-emerald-400">Tools</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Git / GitHub</li>
              <li>MySQL</li>
              <li>Docker / Postman</li>
              <li>VS Code / Jupyter</li>
              <li>Antigravity (AI Assistant)</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="mt-32 border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <p className="text-gray-500">© 2024 Sandarv Lamichhane</p>
          <p className="text-gray-600 text-sm mt-1">sandarvlamichhane1@gmail.com</p>
        </div>
        <div className="flex gap-8">
          <a
            href="https://x.com/Sandarv799"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 transition-opacity"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            <span className="hidden md:inline">Twitter</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sandarv-lamichhane-40038534a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 transition-opacity"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            <span className="hidden md:inline">LinkedIn</span>
          </a>
          <a
            href="https://github.com/4Sandarv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 transition-opacity"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <span className="hidden md:inline">GitHub</span>
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Projects;
