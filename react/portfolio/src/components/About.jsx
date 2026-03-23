import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-lighter/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          {/* About Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full max-w-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-50"></div>
                <div className="relative rounded-2xl overflow-hidden border border-primary/30">
                  <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl">
                    👨‍💻
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Bio Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for creating beautiful and functional web applications. With over 3 years of experience in front-end development and 2 years in back-end technologies, I've worked on diverse projects ranging from e-commerce platforms to SaaS applications.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                My journey into web development started with a curiosity about how websites work. Over time, it evolved into a passionate career where I constantly learn and adapt to new technologies. I believe in writing clean, maintainable code and creating intuitive user experiences.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20"
                >
                  <p className="text-3xl font-bold text-gradient">5+</p>
                  <p className="text-gray-400 text-sm mt-2">Years Experience</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20"
                >
                  <p className="text-3xl font-bold text-gradient">30+</p>
                  <p className="text-gray-400 text-sm mt-2">Projects Done</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20"
                >
                  <p className="text-3xl font-bold text-gradient">20+</p>
                  <p className="text-gray-400 text-sm mt-2">Happy Clients</p>
                </motion.div>
              </div>

              {/* Download CV Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-secondary px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all mt-6"
              >
                Download Resume
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
