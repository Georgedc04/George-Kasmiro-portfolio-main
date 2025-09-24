import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div
      className="w-full lgl:w-[32%] h-full bg-white/20 dark:bg-black/20 bg-gradient-to-b from-gray-400 to-[#ffffff23] dark:from-[#023b5588] dark:to-[#00000046] rounded-md shadow-shadowOne dark:shadow-shadowTwo backdrop-blur-md p-4 lgl:p-6 flex flex-col gap-4  transition-colors duration-300"
    >
      {/* Profile Image */}
      <img
        className="w-full h-48 object-cover rounded-xl border border-neutral-300 dark:border-neutral-700"
        src="/images/contact.jpg" // <-- replace with your actual image path
        alt="contactImg"
      />

      {/* Info */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
          George Kasmiro
        </h3>
        <p className="text-sm font-medium text-neutral-600 dark:text-gray-400">
          Computer Science & Cybersecurity Enthusiast
        </p>
        <p className="text-xs text-neutral-600 dark:text-gray-400 tracking-wide">
          Passionate about technology, ethical hacking, and network security. Working on projects that improve system protection and digital infrastructure.
        </p>

        <div className="flex flex-col gap-1 mt-1">
          <p className="text-xs text-neutral-700 dark:text-gray-300 flex items-center gap-1">
            Phone: <span className="font-medium text-designColor">+91 92588 85387</span>
          </p>
          <p className="text-xs text-neutral-700 dark:text-gray-300 flex items-center gap-1">
            Email: <span className="font-medium text-designColor">gkamsiro@gmail.com</span>
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-col gap-2 mt-3">
        <h2 className="text-xs uppercase font-semibold text-neutral-700 dark:text-gray-300 mb-1">
          Find me on
        </h2>
        <div className="flex gap-3">
          <a
            href="https://www.instagram.com/georgedc04"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon border-2 border-designColor/80 bg-gradient-to-r from-designColor to-black text-white p-2 rounded-full hover:text-black transition-transform duration-300 text-lg"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/george-kasmiro-2211a42b4"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon border-2 border-designColor/80 bg-gradient-to-r from-designColor to-black text-white p-2 rounded-full hover:text-black transition-transform duration-300 text-lg"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/share/19iiRCkttK/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon border-2 border-designColor/80 bg-gradient-to-r from-designColor to-black text-white p-2 rounded-full hover:text-black transition-transform duration-300 text-lg"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
