
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center space-x-6 mb-4"
        >
          {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-600 hover:text-gray-900"
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
        <p className="text-gray-600">
          © {new Date().getFullYear()} Eren Sümer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
