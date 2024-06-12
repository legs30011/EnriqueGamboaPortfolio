// src/components/Projects.tsx
import React from 'react';
import { motion } from 'framer-motion';
import reactLogo from '../assets/react.svg';
import mongodbLogo from '../assets/mongodb.svg';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción del Proyecto 1, una aplicación innovadora que resuelve problemas específicos utilizando tecnología moderna.',
    technologies: [reactLogo, mongodbLogo],
    github: 'https://github.com/usuario/proyecto1'
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del Proyecto 2, una plataforma interactiva que facilita la comunicación y colaboración entre equipos.',
    technologies: [reactLogo],
    github: 'https://github.com/usuario/proyecto2'
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects-pattern h-screen flex flex-col items-center justify-center text-center p-4 bg-secondary">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white mb-6">Mis Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-lg text-white">{project.description}</p>
              <div className="flex justify-center mt-4">
                {project.technologies.map((tech, i) => (
                  <img key={i} src={tech} alt="technology" className="h-8 w-8 mx-2" />
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 block">
                Ver en GitHub
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
