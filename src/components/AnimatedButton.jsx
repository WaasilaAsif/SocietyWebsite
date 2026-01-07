import { motion } from 'framer-motion';

const AnimatedButton = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = 'px-8 py-4 font-semibold tracking-wide transition-all duration-300';

  const variants = {
    primary: 'bg-white text-black hover:bg-white/90',
    secondary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black',
    ghost: 'bg-white/10 text-white hover:bg-white/20'
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
