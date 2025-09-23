import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaReact, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["n Ethical Hacker.", " CS Engineer", " Full Stack Developer.", " Graphic Designer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <FadeIn className="flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-md font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
          Hi, I'm <span className="text-designColor capitalize">George Kasmiro</span>
        </h1>
        <div className="min-w-[280px] h-20">
          <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">
          a<span >{text}</span> <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        </div>
        <p className="text-base font-bodyFont leading-6 tracking-wider text-neutral-800 dark:text-neutral-300">
          I'm a Computer Science engineer specializing in cybersecurity, passionate about building secure and efficient solutions. I enjoy solving problems, learning new tech, and creating projects that make a real impact.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap- lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-">Find me in</h2>
          <div className="flex gap-4 ">
            <a href="https://www.instagram.com/georgedc04?igsh=MWJtNTJ1YWd3cHoyZg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
              <span className="bannerIcon border-2 border-designColor/80 bg-gradient-to-r from-designColor to-black text-white p-3 rounded-full hover:text-black transition-transform duration-300"><FaInstagram /></span>
            </a>
            <a href="https://www.linkedin.com/in/george-kasmiro-2211a42b4" target="_blank" rel="noreferrer">
              <span className="bannerIcon border-2 border-designColor/80 bg-gradient-to-r from-designColor to-black text-white p-3 rounded-full hover:text-black transition-transform duration-300"><FaLinkedinIn /></span>
            </a>
            <a href="https://www.facebook.com/share/19iiRCkttK/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
              <span className="bannerIcon border-2 border-designColor/80 bg-gradient-to-r from-designColor to-black text-white p-3 rounded-full hover:text-black transition-transform duration-300"><FaFacebookF /></span>
            </a>
          </div>
        </div>

       <div>
        <h2 className="text-base uppercase font-titleFont mb-4">BEST SKILL ON</h2>
        <div className="flex gap-4">
          <span className="bannerIcon border-2 border-designColor/80 bg-gradient-to-r from-designColor to-black text-white p-2 rounded-full hover:text-black transition-transform duration-300 text-lg">
            <FaReact />
          </span>
          <span className="bannerIcon border-2 border-designColor/80 bg-gradient-to-r from-designColor to-black text-white p-2 rounded-full hover:text-black transition-transform duration-300 text-lg">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon border-2 border-designColor/80 bg-gradient-to-r from-designColor to-black text-white p-2 rounded-full hover:text-black transition-transform duration-300 text-lg">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon border-2 border-designColor/80 bg-gradient-to-r from-designColor to-black text-white p-2 rounded-full hover:text-black transition-transform duration-300 text-lg">
            <SiFigma />
          </span>
        </div>
      </div>

      </div>
    </FadeIn>
  );
};

export default LeftBanner;
