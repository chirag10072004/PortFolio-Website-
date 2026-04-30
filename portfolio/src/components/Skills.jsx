import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { slideUp, staggerContainer } from '../animations/variants';
import { client } from '../lib/sanityClient';
import { skillsQuery } from '../lib/queries';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    client.fetch(skillsQuery).then((data) => {
      if (!data || data.length === 0) {
        setSkills([
          { name: 'C++', category: 'Programming' },
          { name: 'Python', category: 'Programming' },
          { name: 'JavaScript / TypeScript', category: 'Programming' },
          { name: 'React.js', category: 'Web' },
          { name: 'Node.js', category: 'Web' },
          { name: 'Tailwind CSS', category: 'Web' },
          { name: 'TensorFlow', category: 'ML' },
          { name: 'Pandas / NumPy', category: 'ML' },
          { name: 'Git & GitHub', category: 'Tools' },
          { name: 'Docker', category: 'Tools' },
          { name: 'VS Code', category: 'Tools' },
        ]);
      } else {
        setSkills(data);
      }
    }).catch(console.error);
  }, []);

  const categories = [...new Set(skills.map(s => s.category))];

  return (
    <section id="skills" className="py-12 md:py-24 px-4 md:px-6 max-w-5xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideUp}
      >
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-zinc-100 mb-8 md:mb-12 border-b border-zinc-800 pb-4 inline-flex items-center gap-3 md:gap-4">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {categories.map((category) => (
            <div key={category} className="border border-zinc-800 rounded bg-zinc-900/30 p-4 md:p-6">
              <h3 className="font-mono text-purple-400 mb-3 md:mb-4 border-b border-zinc-800/50 pb-2 flex items-center text-sm md:text-base">
                <span className="mr-2">&gt;</span> {category}
              </h3>
              <ul className="space-y-2">
                {skills.filter(s => s.category === category).map(skill => (
                  <li key={skill.name} className="text-zinc-300 font-mono text-xs md:text-sm flex items-center before:content-[''] before:w-1 before:h-1 before:bg-zinc-500 before:mr-3 before:inline-block">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
