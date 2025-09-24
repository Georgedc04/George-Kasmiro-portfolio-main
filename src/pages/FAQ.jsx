import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We specialize in web development, cybersecurity solutions, UI/UX design, backend & API development, and penetration testing.",
  },
  {
    question: "How can I request a project or service?",
    answer:
      "You can use the Contact page to send us your project details. Our team will review it and respond within 24–48 hours.",
  },
  {
    question: "Do you offer technical support after project delivery?",
    answer:
      "Yes, we provide ongoing technical support and maintenance packages to ensure your project runs smoothly.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with React, Next.js, TailwindCSS, Node.js, Express, MongoDB, and specialize in secure coding practices.",
  },
  {
    question: "How do you ensure cybersecurity?",
    answer:
      "We follow industry best practices like Zero Trust architecture, multi-factor authentication, secure code audits, and penetration testing.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-24 min-h-screen  text-gray-800 dark:text-gray-100 px-6 py-16 ">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
        <p className="mb-10 text-lg text-center text-gray-600 dark:text-gray-400">
          Here are some of the most common questions and answers about our services.
        </p>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" overflow-hidden bg-white/20 dark:bg-black/20 bg-gradient-to-b from-gray-400 to-[#ffffff23] dark:from-[#023b5588] dark:to-[#00000046] rounded-md shadow-shadowOne dark:shadow-shadowTwo"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 border-t border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
