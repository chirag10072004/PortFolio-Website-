import { motion } from 'framer-motion';
import { slideUp } from '../animations/variants';

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-24 px-4 md:px-6 max-w-3xl mx-auto text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideUp}
      >
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-zinc-100 mb-4 md:mb-6">
          What's Next?
        </h2>
        
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-zinc-200 mb-4 md:mb-6">
          Get In Touch
        </h3>
        
        <p className="text-zinc-400 text-sm md:text-base mb-8 md:mb-12 leading-relaxed">
          I'm currently looking for new opportunities as a Software Engineer. Whether you have a question, a potential opportunity, or just want to say hi, my inbox is always open.
        </p>
        
        <form 
          action="https://formsubmit.co/chiragpardhi01@gmail.com" 
          method="POST" 
          className="max-w-md mx-auto mt-4 md:mt-8 flex flex-col gap-3 md:gap-4 text-left font-mono"
        >
          {/* Prevent captcha and redirect to same page on success for smoother experience */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={window.location.href} />

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-purple-400 text-xs md:text-sm">~/name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              required 
              placeholder="Guest" 
              className="bg-zinc-900/50 border border-zinc-800 rounded p-2.5 md:p-3 text-sm md:text-base text-zinc-200 outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-purple-400 text-xs md:text-sm">~/email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
              placeholder="guest@example.com" 
              className="bg-zinc-900/50 border border-zinc-800 rounded p-2.5 md:p-3 text-sm md:text-base text-zinc-200 outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-purple-400 text-xs md:text-sm">~/message</label>
            <textarea 
              name="message" 
              id="message" 
              required 
              rows="4"
              placeholder="Write your message here..." 
              className="bg-zinc-900/50 border border-zinc-800 rounded p-2.5 md:p-3 text-sm md:text-base text-zinc-200 outline-none focus:border-purple-500 transition-colors resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="mt-3 md:mt-4 font-mono px-6 md:px-8 py-3 md:py-4 bg-transparent border border-purple-500 text-purple-400 rounded hover:bg-purple-500/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all cursor-pointer text-sm md:text-base w-full sm:w-auto"
          >
            ./send_message.sh
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
