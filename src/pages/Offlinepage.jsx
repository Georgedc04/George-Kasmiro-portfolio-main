import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WifiSlashIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-40 h-40 mb-6 text-red-500"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    {/* WiFi arcs */}
    <path d="M2.5 8.5a15.9 15.9 0 0 1 19 0" />
    <path d="M5.5 12.5a10.9 10.9 0 0 1 13 0" />
    <path d="M8.5 16.5a5.9 5.9 0 0 1 7 0" />
    {/* Small dot */}
    <circle cx="12" cy="20" r="1.5" fill="currentColor" />
    {/* Slash line */}
    <line x1="3" y1="3" x2="21" y2="21" stroke="red" strokeWidth="2.5" />
  </motion.svg>
);

const OfflinePage = () => {
  const handleRetry = () => {
    window.location.reload(); // 🔄 refresh page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-100 px-4">
      <WifiSlashIcon />
      <h1 className="text-5xl font-bold mb-4 text-red-500">No Connection</h1>
      <p className="text-lg mb-6 text-center max-w-md">
        Oops! It looks like you’re offline.  
        Please reconnect to the internet to continue exploring my portfolio.
      </p>

      <div className="flex gap-4">
        {/* Retry Button */}
        <button
          onClick={handleRetry}
          className="px-6 py-3 border border-designColor/90 text-white font-semibold rounded-xl shadow bg-gradient-to-r from-designColor/60 to-black hover:from-black hover:to-designColor/70 transition"
        >
          🔄 Try Again
        </button>

        {/* Go Home */}
        <Link
          to="/"
          className="px-6 py-3 border border-designColor/90 text-white font-semibold rounded-xl shadow bg-gradient-to-r from-designColor/60 to-black hover:from-black hover:to-designColor/70 transition"
        >
          🏠 Go Home
        </Link>
      </div>
    </div>
  );
};

export default OfflinePage;

