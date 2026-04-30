import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { slideUp, hoverGlow } from '../animations/variants';
import { client } from '../lib/sanityClient';
import { aboutQuery } from '../lib/queries';

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    client.fetch(aboutQuery).then((data) => {
      if (!data) {
        setAboutData({
          role: "Computer Science Student",
          focus: ["Data Structures & Algorithms", "Web Development", "Machine Learning"],
          status: "Actively preparing for placements",
          passion: "Building clean, scalable systems and solving complex problems."
        });
      } else {
        setAboutData(data);
      }
    }).catch(console.error);
  }, []);

  if (!aboutData) return null;

  return (
    <section id="about" className="py-12 md:py-24 px-4 md:px-6 max-w-5xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideUp}
      >
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-zinc-100 mb-6 md:mb-8 border-b border-zinc-800 pb-4 inline-flex items-center gap-3 md:gap-4">
          About
        </h2>
        
        <motion.div 
          variants={hoverGlow}
          initial="rest"
          whileHover="hover"
          className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-4 md:p-8 terminal-shadow relative overflow-hidden group transition-all"
        >
          {/* Decorative subtle background gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative text-zinc-300 space-y-4 md:space-y-8 text-sm md:text-base leading-relaxed">
            <div className="group/item">
              <h3 className="text-purple-400/80 group-hover/item:text-purple-400 font-mono text-xs uppercase tracking-wider mb-2 transition-colors">Role</h3>
              <p className="text-zinc-200 text-lg md:text-xl font-semibold tracking-wide">{aboutData.role}</p>
            </div>
            
            <div className="group/item">
              <h3 className="text-purple-400/80 group-hover/item:text-purple-400 font-mono text-xs uppercase tracking-wider mb-3 transition-colors">Focus Areas</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {aboutData.focus?.map((f, i) => (
                  <span key={i} className="bg-zinc-800/80 hover:bg-purple-500/20 text-zinc-300 hover:text-purple-300 px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm border border-zinc-700 hover:border-purple-500/50 transition-all cursor-default">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="group/item">
              <h3 className="text-purple-400/80 group-hover/item:text-purple-400 font-mono text-xs uppercase tracking-wider mb-2 transition-colors">Current Status</h3>
              <p className="text-zinc-300 border-l-2 border-zinc-700 group-hover/item:border-purple-500 pl-4 py-1 transition-all text-sm md:text-base">{aboutData.status}</p>
            </div>

            <div className="group/item">
              <h3 className="text-purple-400/80 group-hover/item:text-purple-400 font-mono text-xs uppercase tracking-wider mb-2 transition-colors">Passion</h3>
              <p className="text-zinc-300 italic text-sm md:text-base">"{aboutData.passion}"</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
