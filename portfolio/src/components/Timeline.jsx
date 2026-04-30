import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '../animations/variants';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { client } from '../lib/sanityClient';
import { educationQuery } from '../lib/queries';

const Timeline = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    client.fetch(educationQuery).then((data) => {
      if (!data || data.length === 0) {
        setExperiences([
          {
            title: 'Current Focus - Placement Prep',
            institution: 'Self Taught',
            year: 'Present',
            desc: 'Actively solving Data Structures & Algorithm problems and building full-stack projects for upcoming campus placements.'
          },
          {
            title: 'B.Tech in Computer Science',
            institution: 'University Name',
            year: '2021 - 2025',
            desc: 'Relevant Coursework: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks.'
          },
          {
            title: 'High School',
            institution: 'High School Name',
            year: '2021',
            desc: 'Completed secondary education with a strong foundation in Mathematics and Computer Science.'
          }
        ]);
      } else {
        // Map sanity schema fields to the component props
        setExperiences(data.map(item => ({
          title: item.degree,
          institution: item.institution,
          year: item.year,
          desc: item.score ? `Score: ${item.score}` : ''
        })));
      }
    }).catch(console.error);
  }, []);

  return (
    <section id="education-details" className="py-12 md:py-24 px-4 md:px-6 max-w-5xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideUp}
      >
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-zinc-100 mb-8 md:mb-12 border-b border-zinc-800 pb-4 inline-flex items-center gap-3 md:gap-4">
          Education Details
        </h2>

        <div className="space-y-6 md:space-y-8 relative before:absolute before:inset-0 before:ml-[1.25rem] md:before:ml-[1.5rem] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start gap-4 md:gap-6 group">
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-zinc-700 bg-zinc-900 text-purple-500 group-hover:border-purple-400 group-hover:text-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 shrink-0 shadow-lg z-10 mt-1">
                <GraduationCap size={20} className="md:w-6 md:h-6" />
              </div>
              
              <div className="flex-1 p-5 md:p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm group-hover:bg-zinc-900/60 group-hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-zinc-100 group-hover:text-purple-300 transition-colors duration-300">{exp.title}</h3>
                    {exp.institution && (
                      <div className="text-zinc-400 text-sm md:text-base mt-1 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-purple-500/50"></span>
                        {exp.institution}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-xs md:text-sm shrink-0 w-fit">
                    <Calendar size={14} />
                    <span>{exp.year}</span>
                  </div>
                </div>
                {exp.desc && (
                  <div className="text-zinc-400 text-sm md:text-base leading-relaxed mt-4 pt-4 border-t border-zinc-800/50 flex items-start gap-2">
                    {exp.desc.includes('Score') ? <Award size={18} className="text-purple-500/70 mt-1 shrink-0" /> : null}
                    <div className="w-full flex flex-col gap-1.5">
                      {exp.desc.split('\n').map((line, i) => {
                        if (!line.trim()) return null;
                        const isBullet = line.trim().startsWith('-') || line.trim().startsWith('*');
                        const text = isBullet ? line.trim().substring(1).trim() : line;
                        return (
                          <div key={i} className={`flex items-start gap-2.5 ${isBullet ? 'mt-1' : ''}`}>
                            {isBullet && <span className="w-1.5 h-1.5 rounded-full bg-purple-500/70 mt-2 shrink-0"></span>}
                            <span className={isBullet ? "flex-1" : "flex-1 whitespace-pre-line"}>{text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;
