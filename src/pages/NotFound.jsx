import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ZombieSVG from "../assets/zombie.png"; // Use your zombie SVG here

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-100 px-4">
      
      {/* Animated 404 */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="text-9xl font-extrabold text-designColor/60 mb-6"
      >
        404
      </motion.h1>

      {/* Zombie Sticker */}
      <motion.img
        src={ZombieSVG}
        alt="Zombie Sticker"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 120 }}
        className="w-64 h-64 mb-6 animate-wave"
      />

      {/* Text */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-3xl font-semibold mb-4 text-center"
      >
        Ooops! Page Not Found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="text-center mb-6 text-gray-600 dark:text-gray-400 max-w-md"
      >
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Link
          to="/"
          className="px-6  py-3 border border-designColor/90  text-white font-semibold rounded-xl shadow bg-gradient-to-r from-designColor/60 to-black hover:bg-gradient-to-r hover:from-black hover:to-designColor/70 transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
