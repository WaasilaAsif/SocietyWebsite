import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { team } from '../data/team';

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  return (
    <SectionWrapper id="team" className="bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            MEET THE TEAM
          </h2>
          <p className="text-white/60 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            The passionate humans behind the magic. We're students, hackers, and builders
            just like you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-1">
                      {member.role}
                    </p>
                    <p className="text-white/60 text-sm">
                      {member.major}
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white/5">
                  <p className="text-white/70 mb-4 leading-relaxed text-sm">
                    {member.bio}
                  </p>

                  <div className="flex gap-4">
                    <motion.a
                      href={`https://github.com/${member.links.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                      whileHover={{ scale: 1.2, y: -2 }}
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={`https://linkedin.com/in/${member.links.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                      whileHover={{ scale: 1.2, y: -2 }}
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a
                      href={`https://${member.links.portfolio}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                      whileHover={{ scale: 1.2, y: -2 }}
                      aria-label="Portfolio"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 text-center bg-white/5 border border-white/10 p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Want to Join the Team?
          </h3>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate organizers, workshop leaders, and community builders.
            Apply to become part of the leadership team.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-4 font-semibold tracking-wide hover:bg-white/90 transition-all"
          >
            APPLY NOW
          </motion.button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Team;
