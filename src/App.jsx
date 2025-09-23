import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import FooterBottom from "./components/footer/FooterBottom";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";
import OfflinePage from "./pages/Offlinepage";
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";


function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if offline on initial load
    if (!navigator.onLine) navigate("/offline");

    // Listen for online/offline events
    const handleOnline = () => navigate("/");
    const handleOffline = () => navigate("/offline");

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [navigate]);

  return (
    <div className="w-full h-auto bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300">
      <Navbar />
      <div className="px-4">
        <div className="max-w-screen-xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/offline" element={<OfflinePage />} /> {/* ✅ offline route */}
            <Route path="*" element={<NotFound />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
      </div>
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default App;
