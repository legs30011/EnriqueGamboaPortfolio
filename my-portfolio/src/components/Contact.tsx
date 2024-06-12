// src/components/Contact.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section className="contact-pattern h-screen flex flex-col items-center justify-center text-center p-4 bg-primary">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
        <p className="text-lg text-white">
          ¿Quieres trabajar conmigo o tienes alguna pregunta? ¡No dudes en ponerte en contacto!
        </p>
        <form className="mt-6">
          <input
            type="text"
            placeholder="Nombre"
            className="block w-full p-2 mb-4 bg-gray-800 text-white rounded-lg"
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="block w-full p-2 mb-4 bg-gray-800 text-white rounded-lg"
          />
          <textarea
            placeholder="Mensaje"
            className="block w-full p-2 mb-4 bg-gray-800 text-white rounded-lg"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
