import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { slideUp, hoverGlow } from '../animations/variants';
import { client } from '../lib/sanityClient';
import { certificationsQuery } from '../lib/queries';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    client.fetch(certificationsQuery).then((data) => {
      // If user hasn't added projects in Sanity yet, use fallback data
      if (!data || data.length === 0) {
        setCerts([
          {
            _id: '1',
            title: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            link: '#'
          },
          {
            _id: '2',
            title: 'Google Data Analytics Professional',
            issuer: 'Google',
            link: '#'
          }
        ]);
      } else {
        setCerts(data);
      }
    }).catch(console.error);
  }, []);

  if (certs.length === 0) return null;

  return (
    <section id="certifications" className="py-12 md:py-24 px-4 md:px-6 max-w-5xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideUp}
      >
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-zinc-100 mb-8 md:mb-12 border-b border-zinc-800 pb-4 inline-flex items-center gap-3 md:gap-4">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {certs.map((cert) => (
            <motion.a 
              href={cert.link} 
              key={cert._id}
              target="_blank"
              rel="noopener noreferrer"
              variants={hoverGlow}
              initial="rest"
              whileHover="hover"
              className="group flex flex-col justify-between bg-zinc-900/40 border border-zinc-800 rounded-lg p-4 md:p-6 transition-colors"
            >
              {cert.imageUrl ? (
                <div className="w-full h-40 md:h-48 rounded bg-zinc-800 mb-4 overflow-hidden relative border border-zinc-700/50">
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                  />
                  <div className="absolute top-2 right-2 p-1.5 bg-zinc-900/80 rounded backdrop-blur">
                    <ExternalLink size={16} className="text-zinc-300 group-hover:text-purple-400 transition-colors" />
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div className="p-2 md:p-3 bg-purple-500/10 rounded-full text-purple-500">
                    <Award size={20} className="md:w-6 md:h-6" />
                  </div>
                  <ExternalLink size={16} className="text-zinc-600 group-hover:text-purple-400 transition-colors md:w-[18px] md:h-[18px]" />
                </div>
              )}
              <div>
                <h3 className="text-base md:text-lg font-bold text-zinc-200 mb-1 md:mb-2 group-hover:text-purple-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-zinc-500 text-xs md:text-sm font-mono">
                  Issuer: <span className="text-zinc-400">{cert.issuer}</span>
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
