import { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const CV = () => {
  const cvRef = useRef(null);

  const handleDownload = async () => {
    if (!cvRef.current) return;

    const element = cvRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("George_Kasmiro_CV.pdf");
  };

  return (
    <section className="w-full py-20 pt-24 bg-gray-200 dark:bg-[#0e0e0e] flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">My CV</h2>

      <button
        onClick={handleDownload}
        className="flex items-center gap-2 mb-8 px-6 py-3 bg-gradient-to-r from-designColor/60 to-black hover:from-black hover:to-designColor/70 text-white font-semibold rounded-xl shadow-lgl transition"
      >
        <FaDownload /> Download PDF
      </button>

      <div
        ref={cvRef}
        className="w-[900px] max-w-full bg-white dark:bg-gradient-to-b dark:from-[#2f2f30] dark:to-[#000000] rounded-xl shadow-2xl p-8 flex flex-col lg:flex-row gap-8"
      >
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/3 bg-gradient-to-b from-designColor/20 to-transparent rounded-xl p-6 flex flex-col items-center text-center">
          <img
            src="/logo.png"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-designColor"
          />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            George Kasmiro
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Cybersecurity Engineer</p>
          <div className="text-left w-full mt-4">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Contact</h4>
            <p className="text-gray-600 dark:text-gray-300">Email: gkasmiro@gmail.com</p>
            <p className="text-gray-600 dark:text-gray-300">Phone: +91-9258885837</p>
            <p className="text-gray-600 dark:text-gray-300">Location: Dehradun, Uttarakhand, India</p>
            <p className="text-gray-600 dark:text-gray-300">LinkedIn: linkedin.com/in/GeorgeKasmiro</p>
            <p className="text-gray-600 dark:text-gray-300">GitHub: github.com/georgedc04</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white text-xl mb-2">Profile</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Third-year B.Tech Cybersecurity student skilled in web development, secure coding, and algorithm design. Experienced with network security, authentication systems, and optimization algorithms.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white text-xl mb-2">Experience</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
              <li><strong>SQL Injection Demo Project</strong> – Graphic Era Hill University, Feb 2024. Built secure/insecure PHP login system; implemented prepared statements; created a PPT on vulnerabilities and solutions.</li>
              <li><strong>ZTNA Simulation with MFA</strong> – Graphic Era Hill University, Apr 2024. Python-based multi-factor authentication system; simulated secure network access.</li>
              <li><strong>Traveling Salesman Problem Solver</strong> – College Project, May 2024. Implemented Brute Force, Lexicographic, Genetic, Ant Colony algorithms; developed GUI; optimized performance.</li>
              <li><strong>Web Development Projects</strong> – 2024–2025. Built secure, SEO-optimized WordPress/PHP sites; integrated payment gateways; designed responsive UI.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white text-xl mb-2">Education</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm"><strong>B.Tech in Computer Science (Cybersecurity)</strong> – Graphic Era Hill University, Expected 2027</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Higher Secondary: Mahad Secondary School, 2021 | Primary: St Daniel Comboni, 2018</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
