export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const hoverGlow = {
  rest: { scale: 1, boxShadow: "0px 0px 0px rgba(168, 85, 247, 0)" },
  hover: { 
    scale: 1.02, 
    boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.4)",
    borderColor: "rgba(168, 85, 247, 0.5)",
    transition: { duration: 0.3 }
  }
};
