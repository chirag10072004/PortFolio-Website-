import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { client } from '../lib/sanityClient';
import { experienceQuery } from '../lib/queries';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasExperience, setHasExperience] = useState(false);

  useEffect(() => {
    client.fetch(experienceQuery).then((data) => {
      if (data && data.length > 0) {
        setHasExperience(true);
      }
    }).catch(console.error);
  }, []);

  const baseNavItems = ['About', 'Skills', 'Projects'];
  const navItems = hasExperience 
    ? [...baseNavItems, 'Experience', 'Education Details', 'Contact']
    : [...baseNavItems, 'Education Details', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-zinc-800"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-zinc-100 font-mono font-bold text-lg hover:text-purple-400 transition-colors">
          <Terminal size={24} className="text-purple-500" />
          <span>~/chirag</span>
          <span className="animate-pulse bg-purple-500 w-2 h-5 inline-block ml-1"></span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-mono text-zinc-400">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="hover:text-purple-400 transition-colors"
            >
              <span className="text-purple-500 mr-1">./</span>{item.toLowerCase()}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-zinc-400 hover:text-purple-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-zinc-800 bg-[#27272a]/95 backdrop-blur-xl"
          >
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block px-4 py-3 rounded-lg hover:bg-zinc-900 active:bg-zinc-900 border border-transparent hover:border-zinc-800 active:border-zinc-800 transition-all font-mono text-zinc-400 hover:text-purple-400 active:text-purple-400"
                  onClick={(e) => {
                    // Adding a small delay ensures the browser processes the anchor link navigation 
                    // before Framer Motion unmounts the element.
                    setTimeout(() => setIsOpen(false), 150);
                  }}
                >
                  <span className="text-purple-500 mr-2">./</span>
                  {item.toLowerCase()}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
