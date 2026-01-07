import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = '' }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`py-20 md:py-32 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
