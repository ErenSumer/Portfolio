
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-xl text-gray-600 mb-8">
          I&apos;m a passionate software engineer with expertise in web development,
          machine learning, and cloud technologies. I love creating elegant
          solutions to complex problems.
        </p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center space-x-4"
        >
          {['React', 'Node.js', 'Python', 'Ruby', 'Scala', 'PHP', 'Django', 'Django Rest Framework', 'framer-motion', 'tailwindcss'].map((skill) => (
            <span
              key={skill}
              className="bg-gray-200 px-4 py-2 rounded-full text-sm font-semibold"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
