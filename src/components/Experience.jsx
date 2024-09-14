
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'FreeLancer',
    position: 'FreeLancer',
    period: 'Jan 2020 - Present',
    description: 'Built Full stack web applications...',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-4xl font-bold mb-12">Work Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-2">{exp.position}</h3>
            <p className="text-gray-600 mb-2">{exp.company}</p>
            <p className="text-gray-500 mb-4">{exp.period}</p>
            <p className="text-gray-700">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
