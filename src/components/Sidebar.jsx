
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaHome, FaCode, FaCog, FaBriefcase, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    { icon: FaHome, text: "Home", to: "home" },
    { icon: FaCode, text: "Projects", to: "projects" },
    { icon: FaCog, text: "Skills", to: "skills" },
    { icon: FaBriefcase, text: "Experience", to: "experience" },
    { icon: FaEnvelope, text: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-64 bg-white shadow-lg fixed h-full overflow-y-auto"
    >
      <div className="p-6">
        <motion.div
          className="mb-8 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src="/pfp.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
          />
          <h1 className="text-2xl font-bold text-gray-800">Eren Sümer</h1>
          <p className="text-blue-500">Software Engineer</p>
        </motion.div>
        <ul>
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="mb-4"
            >
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-all duration-300"
              >
                <item.icon className="mr-4" />
                {item.text}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Sidebar;
