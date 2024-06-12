import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="bg-blue-900 h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-white pixel-font">
          MI PORTAFOLIO
        </h1>
        <p className="text-xl text-white mt-4">
          SOY INGENIERO EN SISTEMAS, DESARROLLADOR FULLSTACK JUNIOR, ENTUSIASTA DE GraphQL Y FAN DE IA.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
