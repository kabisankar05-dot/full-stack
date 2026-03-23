import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully functional e-commerce platform with product filtering, shopping cart, and payment integration using Stripe.',
      image: '🛒',
      category: 'fullstack',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality, real-time updates, and collaborative features.',
      image: '✓',
      category: 'frontend',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: 'Weather Application',
      description: 'A weather app that displays current weather and forecast using OpenWeather API with beautiful animations.',
      image: '⛅',
      category: 'frontend',
      tech: ['React', 'API', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      live: '#',
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, user authentication, comments, and admin dashboard.',
      image: '📝',
      category: 'fullstack',
      tech: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
      github: '#',
      live: '#',
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'A dashboard for managing multiple social media accounts with analytics and scheduling features.',
      image: '📊',
      category: 'fullstack',
      tech: ['React', 'Node.js', 'MongoDB', 'Charts.js'],
      github: '#',
      live: '#',
    },
    {
      id: 6,
      title: 'Music Streaming App',
      description: 'A music streaming application with playlist management, search functionality, and user preferences.',
      image: '🎵',
      category: 'frontend',
      tech: ['React', 'Spotify API', 'Tailwind CSS'],
      github: '#',
      live: '#',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Full Stack', value: 'fullstack' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-lighter/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <motion.button
              key={category.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.value)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                filter === category.value
                  ? 'bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/50'
                  : 'bg-lighter/50 border border-primary/20 hover:border-primary/50 text-gray-300'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="group"
              >
                <div className="relative h-full rounded-2xl overflow-hidden bg-lighter/50 border border-primary/20 hover:border-primary/50 transition-all card-hover flex flex-col">
                  {/* Image/Emoji Section */}
                  <div className="relative w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden group-hover:to-secondary/30 transition-all">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-primary/20">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-semibold transition-all"
                      >
                        <FiGithub size={18} />
                        <span className="hidden sm:inline">Code</span>
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
                      >
                        <FiExternalLink size={18} />
                        <span className="hidden sm:inline">Live</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
