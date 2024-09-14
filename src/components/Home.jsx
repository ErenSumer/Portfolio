
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1
          className="text-6xl font-extrabold mb-4 text-transparent rounded-full bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Eren Sümer
        </motion.h1>
        <motion.h2
          className="text-3xl text-gray-700 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Crafting Digital Experiences
        </motion.h2>
        <motion.p
          className="text-xl mb-12 max-w-2xl mx-auto text-gray-600"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I&apos;m a passionate software engineer specializing in creating beautiful,
          functional, and user-centered digital experiences.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-x-4"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgb(59,130,246)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgb(156,163,175)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition duration-300"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
