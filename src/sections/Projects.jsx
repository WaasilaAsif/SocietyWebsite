import { motion } from 'framer-motion';
import { ExternalLink, Users } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data/projects';

const Projects = () => {
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
    hidden: { opacity: 0, y: 40 },
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
    <SectionWrapper id="projects" className="bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight">
            PROJECTS
          </h2>
          <p className="text-black/60 text-xl md:text-2xl max-w-3xl leading-relaxed">
            Our members don't just learn—they ship. Here are some of the incredible
            projects built by our community.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white border border-black/10 overflow-hidden group hover:border-black/30 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-black">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="text-white"
                  >
                    <ExternalLink size={32} />
                  </motion.div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-black/60 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-black/5 px-3 py-1 text-sm text-black/70 border border-black/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-black/50">
                  <Users size={16} />
                  <span>{project.team}</span>
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
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 font-semibold tracking-wide hover:bg-black/90 transition-all"
          >
            VIEW ALL PROJECTS
          </motion.button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
