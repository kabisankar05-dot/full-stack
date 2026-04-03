import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark/95 backdrop-blur-md border-t border-primary/20 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-gradient"
          >
            {'KABISANKAR /'}
          </motion.div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Kabisankar. All rights reserved. | Built with React, Vite & Tailwind CSS
          </p>

          {/* Scroll to Top */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-semibold transition-all"
          >
            Back to Top ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
