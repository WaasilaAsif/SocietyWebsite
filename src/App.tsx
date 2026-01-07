import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Events from './sections/Events';
import Projects from './sections/Projects';
import Team from './sections/Team';
import CTA from './sections/CTA';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Projects />
      <Team />
      <CTA />
      <Footer />
    </motion.div>
  );
}

export default App;
