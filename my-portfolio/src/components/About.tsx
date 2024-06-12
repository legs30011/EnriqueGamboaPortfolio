// src/components/About.tsx
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="about-pattern h-screen flex flex-col items-center justify-center text-center p-4 bg-secondary">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white mb-6">Sobre Mí</h2>
        <p className="text-lg text-white">
          Soy un apasionado desarrollador fullstack con experiencia en diversas tecnologías. Disfruto crear aplicaciones web modernas y funcionales. Mi interés en GraphQL y la inteligencia artificial me impulsa a aprender y crecer continuamente en el campo de la tecnología.
        </p>
        <p className="text-lg text-white mt-4">
          Además de programar, me encanta experimentar con gráficos 3D y animaciones interactivas, siempre buscando nuevas formas de hacer que las interfaces de usuario sean más atractivas y dinámicas.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
