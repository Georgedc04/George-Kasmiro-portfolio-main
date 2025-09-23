import { FaRegHandPaper } from "react-icons/fa";

// src/pages/About.jsx
export default function About() {
  return (
    <div className="flex flex-col items-center justify-center px-6  bg-gradient-to-b from-neutral-50 via-neutral-200 p-6 pt-24 to-neutral-100 dark:from-neutral-950 dark:via-neutral-800 dark:to-neutral-950">
      <div className="max-w-4xl text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-800 dark:text-neutral-100 mb-6">
          About <span className="text-designColor/70">Me</span>
        </h1>

        {/* Profile image */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/faicon.png"
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-designColor/70 shadow-lg hover:scale-105 transition-transform duration-300"
            />

        </div>

        {/* Short intro */}
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
            Hi <span className="inline-block animate-wave"><FaRegHandPaper className="text-xl" /></span>,
            I’m <span className="text-designColor/80">George</span>, 
            a passionate <span className="font-semibold">Computer Science Engineer</span> 
            specializing in <span className="font-semibold">Cybersecurity</span>.  
            I enjoy building secure web applications, solving algorithmic problems, 
            and exploring ethical hacking for good purposes.
          </p>
       

        {/* Call to action */}
        <div className="mt-10">
          <a
            href="/contact"
            className="px-6  py-3 border border-designColor/90  text-white font-semibold rounded-xl shadow bg-gradient-to-r from-designColor/60 to-black hover:bg-gradient-to-r hover:from-black hover:to-designColor/70 transition"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </div>
  );
}
