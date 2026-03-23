import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaDatabase,
  FaGit,
  FaGithub,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiFirebase, SiVite } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', Icon: FaReact, color: '#61dafb' },
    { name: 'JavaScript', Icon: FaJsSquare, color: '#f7df1e' },
    { name: 'HTML5', Icon: FaHtml5, color: '#e34c26' },
    { name: 'CSS3', Icon: FaCss3Alt, color: '#1572b6' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06b6d4' },
    { name: 'Node.js', Icon: FaNode, color: '#339933' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#13aa52' },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
    { name: 'Git', Icon: FaGit, color: '#f1502f' },
    { name: 'GitHub', Icon: FaGithub, color: '#ffffff' },
    { name: 'Firebase', Icon: SiFirebase, color: '#ffa612' },
    { name: 'Vite', Icon: SiVite, color: '#646cff' },
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I have expertise in various technologies and tools that help me build scalable and efficient applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={skillVariants}
              whileHover={{ scale: 1.15, rotateZ: 5 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl bg-lighter/50 border border-primary/20 hover:border-primary/50 transition-all cursor-pointer card-hover h-full flex flex-col items-center justify-center space-y-4">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 rounded-2xl transition-all"></div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  <skill.Icon
                    size={48}
                    color={skill.color}
                    className="drop-shadow-lg"
                  />
                </motion.div>

                {/* Name */}
                <h3 className="font-semibold text-white text-center relative z-10">
                  {skill.name}
                </h3>

                {/* Background Blur */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Frontend',
              skills: 'React, JavaScript, Tailwind CSS, HTML5, CSS3, Vite',
            },
            {
              title: 'Backend',
              skills: 'Node.js, MongoDB, PostgreSQL, Firebase, REST APIs',
            },
            {
              title: 'Tools & Others',
              skills: 'Git, GitHub, VS Code, Figma, Postman, DevTools',
            },
          ].map((category, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-primary/10 border border-primary/30 hover:border-primary/60 transition-all"
            >
              <h3 className="text-xl font-semibold text-gradient mb-4">
                {category.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {category.skills}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
