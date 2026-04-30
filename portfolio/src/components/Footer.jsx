const Footer = () => {
  return (
    <footer className="py-6 md:py-8 text-center text-zinc-500 font-mono text-xs md:text-sm border-t border-zinc-900 mt-12 md:mt-20 px-4">
      <div className="flex justify-center gap-4 md:gap-6 mb-3 md:mb-4 flex-wrap">
        <a href="https://github.com/chirag10072004" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/chirag-pardhi-970735258" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">LinkedIn</a>
        <a href="https://x.com/pardhi66988" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Twitter</a>
      </div>
      <p>
        Built by <span className="text-zinc-400 hover:text-purple-500 transition-colors cursor-pointer">Chirag</span>
      </p>
    </footer>
  );
};

export default Footer;
