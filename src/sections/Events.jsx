import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { events } from '../data/events';

const Events = () => {
  const getCategoryColor = (category) => {
    const colors = {
      Weekly: 'bg-blue-500',
      Workshop: 'bg-green-500',
      Hackathon: 'bg-purple-500',
      Sprint: 'bg-orange-500',
      Talk: 'bg-pink-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <SectionWrapper id="events" className="bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            EVENTS
          </h2>
          <p className="text-white/60 text-xl md:text-2xl max-w-3xl leading-relaxed">
            From weekly hack nights to major hackathons, there's always something happening.
            Join us and make memories while making things.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -8 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`${getCategoryColor(event.category)} px-3 py-1 text-xs font-semibold text-white tracking-wide`}>
                  {event.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {event.title}
              </h3>

              <p className="text-white/70 mb-6 leading-relaxed">
                {event.description}
              </p>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-white/50">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-white/50">
                  <Clock size={16} />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-white/50">
                  <MapPin size={16} />
                  <span>{event.location}</span>
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
            className="bg-white text-black px-8 py-4 font-semibold tracking-wide hover:bg-white/90 transition-all"
          >
            VIEW FULL CALENDAR
          </motion.button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Events;
