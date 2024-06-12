// src/components/Header.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="header-pattern h-screen flex flex-col items-center justify-center text-center p-4">
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
          SOY INGENIERO EN SISTEMAS, DESARROLLADOR FULLSTACK JUNIOR, ENTUSIASTA DE GRAPHQL Y FAN DE IA.
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
