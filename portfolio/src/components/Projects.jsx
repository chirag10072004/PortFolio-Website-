import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { slideUp, hoverGlow } from '../animations/variants';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { client } from '../lib/sanityClient';
import { projectsQuery } from '../lib/queries';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    client.fetch(projectsQuery).then((data) => {
      // If user hasn't added projects in Sanity yet, use fallback data so site doesn't look empty
      if (!data || data.length === 0) {
        setProjects([
          {
            _id: '1',
            title: 'Scalable E-Commerce Backend',
            description: 'A microservices-based backend for high-traffic e-commerce built using Node.js, RabbitMQ, and PostgreSQL.',
            tags: ['Node.js', 'PostgreSQL', 'Docker'],
            link: '#'
          },
          {
            _id: '2',
            title: 'ML Traffic Prediction',
            description: 'Used TensorFlow to predict city traffic patterns based on historical sensor data, achieving 90% accuracy.',
            tags: ['Python', 'TensorFlow', 'Pandas'],
            link: '#'
          },
          {
            _id: '3',
            title: 'Developer Portfolio',
            description: 'A modern, responsive personal portfolio built with React, Tailwind CSS, and Framer Motion. Content managed via Sanity CMS!',
            tags: ['React', 'Tailwind CSS', 'Sanity'],
            link: '#'
          }
        ]);
      } else {
        // Use live Sanity data
        setProjects(data);
      }
    }).catch(console.error);
  }, []);

  return (
    <section id="projects" className="py-12 md:py-24 px-4 md:px-6 max-w-5xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideUp}
      >
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-zinc-100 mb-8 md:mb-12 border-b border-zinc-800 pb-4 inline-flex items-center gap-3 md:gap-4">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project) => (
            <motion.a 
              href={project.link} 
              key={project._id}
              target="_blank"
              rel="noopener noreferrer"
              variants={hoverGlow}
              initial="rest"
              whileHover="hover"
              className="group block h-full bg-zinc-900/40 border border-zinc-800 rounded-lg p-4 md:p-6 flex flex-col justify-between transition-colors"
            >
              <div>
                {project.imageUrl ? (
                  <div className="w-full h-40 md:h-48 rounded bg-zinc-800 mb-4 md:mb-6 overflow-hidden relative border border-zinc-700/50">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                    />
                    <div className="absolute top-2 right-2 p-1.5 bg-zinc-900/80 rounded backdrop-blur">
                      <ExternalLink size={16} className="text-zinc-300 group-hover:text-purple-400 transition-colors" />
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-center mb-4 md:mb-6 text-zinc-400 group-hover:text-purple-400 transition-colors">
                    <FolderGit2 size={24} className="md:w-8 md:h-8" />
                    <ExternalLink size={18} />
                  </div>
                )}
                <h3 className="text-lg md:text-xl font-bold text-zinc-200 mb-2 md:mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <ul className="flex flex-wrap gap-2 md:gap-3 mt-auto font-mono text-xs text-zinc-500">
                {project.tags?.map(tag => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
