import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import { FaBars, FaPhone } from "react-icons/fa6";
import Theme from "../theme/Theme";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation(); // To get current path

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ];

  const handleClick = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  // ✅ Removed TypeScript type annotation
const getLinkClasses = (path) => {
  const isActive = location.pathname === path;
  return `relative transition-colors duration-200 ${
    isActive
      ? " text-designColor after:w-full/50" // Active link underline
      : "text-black dark:text-white/90 hover:text-designColor dark:hover:text-designColor/70"
  } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-designColor/90 after:w-0 hover:after:w-full after:transition-all after:duration-300`;
};


  return (
    <div className="w-full h-[8ch] bg-neutral-100/50 dark:bg-black/20 backdrop-blur-md  flex items-center md:flex-row lg:px-28 md:px-16 sm:px-7 px-4 fixed top-0 z-50">
      
      {/* Logo */}
      <Link to="/" className="mr-16 ">
        <img
          src="/logo.png"
          alt="logo"
          className="w-12 h-auto object-contain rounded-full border-2 border-designColor hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Hamburger for mobile */}
      <button
        onClick={handleClick}
        className="flex-1 lg:hidden text-neutral-950 dark:text-neutral-300 flex items-center justify-end"
      >
        {open ? <LiaTimesSolid className="text-xl" /> : <FaBars className="text-xl" />}
      </button>

      {/* Mobile Menu */}
      <div
          className={`fixed top-0 left-0 h-screen w-64 shadow-md transform ${
            open ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 flex flex-col justify-between p-6 md:hidden z-50 border-r-2 border-designColor/90
            bg-gradient-to-b from-white to-gray-400 dark:from-black dark:to-gray-900`}
        >

        <ul className="flex flex-col gap-4">
          {navLinks.map((link, i) => (
            <li 
            key={i}>
              <Link to={link.href} onClick={handleClose} className={getLinkClasses(link.href) }>
                {link.label}
              </Link>

            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-4">
          <Link
            to="/contact"
            onClick={handleClose}
            className="relative bg-designColor/75 rounded-md px-6 py-2 w-fit cursor-pointer hover:bg-designColor/90 transition-colors "
          >
            <div className="absolute top-[50%] -left-6 translate-y-[-50%] w-9 h-9 rounded-full bg-designColor/75 border-4 border-neutral-100 dark:border-neutral-900 flex items-center justify-center">
              <FaPhone className="text-neutral-50 text-sm animate-shakeSide" />
            </div>
            <div className="space-y-0.5 ">
              <p className="text-xs text-neutral-200 font-light">Lets Connnect</p>
              <p className="text-xs font-normal text-neutral-50 tracking-wide ">
                +91 9258885837
              </p> 
            </div>
          </Link>
          <Theme  />
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:flex-row md:items-center md:gap-x-5 flex-1 justify-between">
        <ul className="flex flex-row gap-x-5">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link to={link.href} className={getLinkClasses(link.href)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="relative bg-designColor/75 rounded-md px-6 py-2 w-fit cursor-pointer hover:bg-designColor/90 transition-colors"
          >
            <div className="absolute top-[50%] -left-6 translate-y-[-50%] w-9 h-9 rounded-full bg-designColor/75 border-4 border-neutral-100 dark:border-neutral-900 flex items-center justify-center">
              <FaPhone className="text-neutral-50 text-sm animate-shakeSide" />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs text-neutral-200 font-light">Lets Connnect</p>
              <p className="text-xs font-normal text-neutral-50 tracking-wide">
                +91 9258885837
              </p>
            </div>
          </Link>

          <Theme />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
