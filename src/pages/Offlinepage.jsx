import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Singnal from "../assets/signal.png";

const OfflinePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-100 px-4">
      <motion.img
        src={Singnal}// ✅ put offline.svg inside public folder
        alt="Offline"
        className="w-64 h-64 mb-6"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <h1 className="text-6xl font-bold mb-4 animate-bounce">Oops!</h1>
      <p className="text-xl mb-6 text-center">
        It seems your internet connection is lost.
        <br />
        Please check your network and try again.
      </p>
      <Link
        to="/"
        className="px-6  py-3 border border-designColor/90  text-white font-semibold rounded-xl shadow bg-gradient-to-r from-designColor/60 to-black hover:bg-gradient-to-r hover:from-black hover:to-designColor/70 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default OfflinePage;
