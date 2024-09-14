
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaEnvelope className="mr-4 text-blue-500" />
                <a
                  href="mailto:ernsmr63@gmail.com"
                  className="hover:text-blue-500"
                >
                  ernsmr63@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-4 text-blue-500" />
                <a href="tel:+905064187363" className="hover:text-blue-500">
                  +90 (536) 581 02 54
                </a>
              </li>

              <li className="flex items-center">
                <FaGithub className="mr-4 text-blue-500" />
                <a
                  href="https://github.com/ErenSümer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  github.com/ErenSümer
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-2 border rounded"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
