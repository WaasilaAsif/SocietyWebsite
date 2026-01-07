import { motion } from 'framer-motion';
import { Code, Users, Zap, Rocket } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Learn by Building',
      description: 'Hands-on workshops and real-world projects. No boring lectures, just pure creation.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Connect with fellow hackers, find teammates, and build lasting friendships.'
    },
    {
      icon: Zap,
      title: 'Ship Fast',
      description: 'From idea to deployment in days, not months. We value iteration over perfection.'
    },
    {
      icon: Rocket,
      title: 'Open to All',
      description: 'Beginner or expert, all skill levels welcome. We grow together.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  return (
    <SectionWrapper id="about" className="bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight"
          >
            WHAT WE DO
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-black/60 text-xl md:text-2xl max-w-3xl leading-relaxed"
          >
            Hack Club is where curious minds come to explore technology, build impossible things,
            and create a better future. We're not just a club—we're a movement.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white p-8 md:p-12 border border-black/10 hover:border-black/30 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <feature.icon size={48} className="text-black" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-black/60 text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 bg-black text-white p-12 md:p-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Members' },
              { number: '150+', label: 'Projects' },
              { number: '50+', label: 'Events' },
              { number: '24/7', label: 'Community' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/60 tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
