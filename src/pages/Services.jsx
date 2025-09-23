import { useState } from "react";
import Slider from "react-slick";
import { FadeIn } from "../components/FadeIn";
import Title from "../components/Title";
import { FaLaptopCode, FaPaintBrush, FaServer } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa6";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

// Slick CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// --- Services Data ---
const services = [
  { icon: <FaLaptopCode />, title: "Web Development", description: "Build responsive and modern websites using React, TailwindCSS, and Node.js." },
  { icon: <FaUserSecret />, title: "Penetration Testing", description: "Identify vulnerabilities in web and mobile applications, networks, and systems using ethical hacking techniques." },
  { icon: <FaPaintBrush />, title: "Graphic Design", description: "Create visually appealing graphics, logos, and designs for web, print, and digital media." },
  { icon: <FaServer />, title: "Backend & API", description: "Create scalable server-side applications and APIs for web and mobile apps." },
];

// --- Testimonials Data ---
const testimonials = [
  {
    img: "/images/testmonial/testimonialOne.png",
    name: "Ahmed Ali",
    role: "Investor",
    title: "Trading Strategy Guidance",
    details: "George’s Smart Money Concept strategies helped me double my portfolio. His analysis is sharp and easy to follow.",
    location: "Remote • 2025",
  },
  {
    img: "/images/testmonial/testimonialTwo.png",
    name: "Sarah Ibrahim",
    role: "Freelancer",
    title: "Cybersecurity Project Support",
    details: "George guided me in securing my website against vulnerabilities. His knowledge in ethical hacking is outstanding.",
    location: "Online • 2025",
  },
  {
    img: "/images/testmonial/testimonialThree.png",
    name: "Ravi Kumar",
    role: "Startup Founder",
    title: "Graphic Design & Branding",
    details: "George created professional designs and branding for my startup. His creativity and detail made my business stand out.",
    location: "Egypt • 2024",
  },
];

// --- Custom Arrows ---
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -translate-y-1/2 right-2 z-10 cursor-pointer text-3xl text-gray-400 hover:text-white transition-colors"
    onClick={onClick}
  >
    <HiArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -translate-y-1/2 left-2 z-10 cursor-pointer text-3xl text-gray-400 hover:text-white transition-colors"
    onClick={onClick}
  >
    <HiArrowLeft />
  </div>
);

// --- Main Component ---
const ServicesAndTestimonials = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, next) => setDotActive(next),
    fade: true, // <-- Add fade effect
    cssEase: "ease-in-out",
    appendDots: (dots) => (
      <div className="mt-6">
        <ul className="flex justify-center gap-3">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full cursor-pointer ${
          i === dotActive ? "bg-designColor" : "bg-gray-400"
        }`}
      />
    ),
  };

  return (
    <>
      {/* --- Services --- */}
      <section id="services" className="w-full py-20 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
        <FadeIn>
          <div className="text-center mb-12">
            <Title title="SERVICES" des="What I Can Do For You" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-20">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white/10 dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                           rounded-xl p-6 flex flex-col items-center text-center
                           backdrop-blur-md shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <div className="text-5xl text-designColor mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{s.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* --- Testimonials --- */}
      <section id="testimonial" className="w-full py-20 bg-gray-100  dark:bg-[#0a0a0a] transition-colors duration-300">
        <FadeIn>
          <div className="flex justify-center items-center text-center mb-12">
            <Title title="WHAT CLIENTS SAY" des="Testimonials" />
          </div>
          <div className="max-w-6xl mx-auto px-4 relative ">
            <Slider 
            {...settings}>
              {testimonials.map((t, i) => (
                <div key={i} className=" flex justify-center px-2">
                  <div className="w-full lg:w-4/5 flex flex-col lg:flex-row items-center gap-8 animate-slideIn">
                    {/* Image */}
                    <div className="w-full lg:w-1/3 flex flex-col items-center bg-gradient-to-tr from-gray-800 to-gray-700 dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl shadow-lg">
                      <img className="h-64 w-full object-cover rounded-xl mb-4" src={t.img} alt={t.name} />
                      <div className="text-center">
                        <p className="text-xs uppercase text-designColor mb-1">Client</p>
                        <h3 className="text-xl font-bold text-white">{t.name}</h3>
                        <p className="text-gray-300">{t.role}</p>
                      </div>
                    </div>
                    {/* Testimonial */}
                    <div className="w-full lg:w-2/3 bg-gradient-to-tr from-gray-700 to-gray-600 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg flex flex-col gap-4">
                      <img className="w-16 mx-auto" src="/images/testmonial/quote.png" alt="quote" />
                      <h3 className="text-xl font-semibold text-center text-white">{t.title}</h3>
                      <p className="text-gray-300 text-center">{t.location}</p>
                      <div className="flex justify-center gap-1 text-yellow-400">
                        {Array(5).fill(0).map((_, idx) => <RiStarFill key={idx} />)}
                      </div>
                      <p className="text-gray-300 text-center leading-6">{t.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </FadeIn>
      </section>

      {/* --- Optional Animation --- */}
      <style>
        {`
          @keyframes slideIn {
            0% { transform: translateX(-50px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          .animate-slideIn {
            animation: slideIn 0.8s ease-in-out;
          }
        `}
      </style>
    </>
  );
};

export default ServicesAndTestimonials;
