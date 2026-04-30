import { motion } from 'framer-motion';
import { useTyping } from '../hooks/useTyping';
import { slideUp } from '../animations/variants';

const Hero = () => {
  const tagline = useTyping(" Building scalable solutions | • Web • ML", 50);

  return (
    <section id="hero" className="min-h-[calc(100dvh-5rem)] md:min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between pt-10 md:pt-20 px-4 md:px-6 max-w-6xl mx-auto bg-grid-pattern gap-6 md:gap-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUp}
        className="max-w-2xl flex-1 w-full"
      >
        <p className="font-mono text-purple-500 mb-2 md:mb-4 text-sm md:text-lg">
          $ whoami
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-zinc-100 mb-3 md:mb-6 tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Chirag</span>.
        </h1>
        <div className="h-6 md:h-8 mb-4 md:mb-8 font-mono text-zinc-400 text-sm md:text-xl flex items-center break-words">
          <span className="text-zinc-500 mr-2 shrink-0">{'>'}</span>
          <span className="truncate">{tagline}</span>
          <span className="animate-pulse bg-purple-500/80 w-2 md:w-3 h-4 md:h-6 ml-1 inline-block shrink-0"></span>
        </div>
        
        <p className="text-zinc-400 text-sm md:text-lg lg:text-xl mb-6 md:mb-10 leading-relaxed">
          Aspiring Software Engineer focused on Machine Learning and Web Technologies, passionate about creating impactful solutions and continuously improving skills.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 font-mono text-sm">
          <a href="#projects" className="w-full sm:w-auto text-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded font-medium transition-colors border border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            ./view_projects.sh
          </a>
          <a href="#contact" className="w-full sm:w-auto text-center px-6 py-3 bg-zinc-900 border border-zinc-700 hover:border-purple-500 text-zinc-300 rounded font-medium transition-colors hover:text-purple-400">
            ./contact.sh
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative flex items-center justify-center w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 shrink-0 mt-8 lg:mt-0"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
        <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-tr from-purple-500/50 to-blue-500/50 hover:from-purple-500 hover:to-blue-500 transition-colors duration-500 terminal-shadow">
          <img 
            src="/file_00000000525c7208a0aa2df5df840a9d.png" 
            alt="Chirag Profile" 
            className="w-full h-full object-cover rounded-full bg-zinc-900"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
