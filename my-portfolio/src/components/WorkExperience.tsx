// src/components/WorkExperience.tsx
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Empresa 1',
    position: 'Desarrollador Fullstack',
    duration: 'Enero 2021 - Presente',
    description: 'Desarrollé aplicaciones web utilizando React, Node.js, y GraphQL.',
  },
  {
    company: 'Empresa 2',
    position: 'Desarrollador Frontend',
    duration: 'Mayo 2019 - Diciembre 2020',
    description: 'Me enfoqué en crear interfaces de usuario responsivas y accesibles con React y Tailwind CSS.',
  },
];

const WorkExperience: React.FC = () => {
  return (
    <section className="experience-pattern h-screen flex flex-col items-center justify-center text-center p-4 bg-primary">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white mb-6">Experiencia Laboral</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
              <p className="text-lg text-white">{exp.position}</p>
              <p className="text-sm text-gray-400">{exp.duration}</p>
              <p className="text-lg text-white mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
