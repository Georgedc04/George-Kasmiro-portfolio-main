import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FadeIn } from "../FadeIn";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  // Quick navigation links
  const renderLinks = (links: { name: string; href: string }[]) =>
    links.map((item, idx) => (
      <li key={idx}>
        <a
          href={item.href}
          className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
        >
          {item.name}
          <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
        </a>
      </li>
    ));

  return (
    <FadeIn className=" w-full py-20 px-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Logo & Social */}
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32 object-contain rounded-full border-2 border-designColor hover:scale-105 transition-transform duration-300" 
        src="/logo.png" 
        alt="logo" />
        <div className="flex gap-4 ">
          <a
            href="https://www.instagram.com/georgedc04"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon border-2 border-designColor/80 bg-gradient-to-r from-designColor to-black text-white p-3 rounded-full hover:text-black transition-transform duration-300">
              <FaInstagram />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/george-kasmiro-2211a42b4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon border-2 border-designColor/80 bg-gradient-to-r from-designColor to-black text-white p-3 rounded-full hover:text-black transition-transform duration-300">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://www.facebook.com/share/19iiRCkttK/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon border-2 border-designColor/80 bg-gradient-to-r from-designColor to-black text-white p-3 rounded-full hover:text-black transition-transform duration-300">
              <FaFacebookF />
            </span>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          QUICK LINKS
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">

          

          <li>
              <Link 
              to="/services" 
              className="hover:text-designColor duration-300">
                Services
            </Link>
          </li>
          <li>
            <Link 
              to="/privacy-policy" 
              className="hover:text-designColor duration-300">
                Privacy Policy
            </Link>
          </li>
          <li>
            <Link 
                to="/faq" 
                className="hover:text-designColor duration-300">
                  FAQ
            </Link>
          </li>
        </ul>
      </div>

      {/* Resources */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Resources
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">

           <li>
          <Link
            to="/cv"  // This should match the route path for your CV page
            className="flex items-center gap-2 hover:text-designColor duration-300 cursor-pointer"
          >
            <FaDownload /> Resume / CV
          </Link>
        </li>

          <li>
              <Link to="/projects" 
                className="hover:text-designColor duration-300">
                My Projects
              </Link>
          </li>

          
          <li>
            <Link 
              to="/Services" 
              className="hover:text-designColor duration-300">
              Services
            </Link>
          </li>
        </ul>
      </div>

    <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Resources
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">

          <li>
            <a href="https://www.linkedin.com/in/george-kasmiro-2211a42b4" className="hover:text-designColor duration-300">
              LinkedIn
            </a>
          </li>

          <li>
            <a href="/https://github.com/Georgedc04/George-Kasmiro-portfolio.git" className="hover:text-designColor duration-300">
              Portfolio Source Code
            </a>
          </li>
          <li>

            <Link to="/terms" className="hover:text-designColor duration-300">
              Terms 
            </Link>
          </li>
          
        </ul>
      </div>
    
    </FadeIn>
  );
};

export default Footer;
