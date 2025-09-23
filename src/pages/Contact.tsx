import { useState } from "react";
import { send } from "@emailjs/browser";

import Title from "../components/Title";
import { FadeIn } from "../components/FadeIn";
import ContactLeft from "../components/ContactLeft";
import { FaCheckCircle, FaExclamationCircle, FaLock } from "react-icons/fa";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = (emailAddress: string): RegExpMatchArray | null => {
    return String(emailAddress)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "") return setErrMsg("Username is required!");
    if (phoneNumber === "") return setErrMsg("Phone number is required!");
    if (email === "") return setErrMsg("Please give your Email!");
    if (!emailValidation(email)) return setErrMsg("Give a valid Email!");
    if (subject === "") return setErrMsg("Please give your Subject!");
    if (message === "") return setErrMsg("Message is required!");

    const templateParams = {
      username,
      phoneNumber,
      email,
      subject,
      message,
    };

    send(
      "service_enfcaj4",
      "template_5920jta",
      templateParams,
      "efilyUTViTF9aMiQ4"
    )
      .then(() => {
        setSuccessMsg("Your message has been sent successfully!");
        setErrMsg("");
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch(() => {
        setErrMsg("Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="w-full pt-24 py-20 border-b border-gray-300 dark:border-gray-700 transition-colors duration-300"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="CONTACT" des="Contact With Me" />
        </div>
        <div className="w-full">
          <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
            {/* Left side (info, social links, etc.) */}
            <ContactLeft />

            {/* Right side (form) */}
            <div
              className="w-full lgl:w-[60%] h-full py-10 
                bg-white dark:bg-gradient-to-r dark:from-[#16181d] dark:to-[#4d4e4e] 
                flex flex-col gap-8 p-4 lgl:p-8 
                rounded-lg shadow-shadowOne transition-colors duration-300"
            >
              <form
                className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
                onSubmit={handleSend}
              >
                {errMsg && (
                    <p className="flex items-center justify-center gap-2 py-3 px-4 bg-red-200 dark:bg-gradient-to-r dark:from-[#1e2024] dark:to-[#23272b] 
                                  text-red-700 dark:text-orange-400 rounded-lg shadow-lg text-center text-base tracking-wide animate-bounce">
                      <FaExclamationCircle className="text-xl" />
                      {errMsg}
                    </p>
                  )}

                  {successMsg && (
                    <p className="flex items-center justify-center gap-2 py-3 px-4 bg-green-200 dark:bg-gradient-to-r dark:from-[#1e2024] dark:to-[#23272b] 
                                  text-green-700 dark:text-green-400 rounded-lg shadow-lg text-center text-base tracking-wide animate-bounce">
                      <FaCheckCircle className="text-xl" />
                      {successMsg}
                    </p>
                  )}

                {/* Name + Phone */}
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                      Your name
                    </p>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      className={`w-full rounded-md px-3 py-2 text-sm 
                        bg-gray-100 dark:bg-[#1e2024] 
                        text-gray-700 dark:text-gray-200 
                        border border-gray-300 dark:border-gray-600 
                        focus:outline-designColor`}
                      type="text"
                    />
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                      Phone Number
                    </p>
                    <input
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      className={`w-full rounded-md px-3 py-2 text-sm 
                        bg-gray-100 dark:bg-[#1e2024] 
                        text-gray-700 dark:text-gray-200 
                        border border-gray-300 dark:border-gray-600 
                        focus:outline-designColor`}
                      type="text"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Email
                  </p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={`w-full rounded-md px-3 py-2 text-sm 
                      bg-gray-100 dark:bg-[#1e2024] 
                      text-gray-700 dark:text-gray-200 
                      border border-gray-300 dark:border-gray-600 
                      focus:outline-designColor`}
                    type="email"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Subject
                  </p>
                  <input
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    className={`w-full rounded-md px-3 py-2 text-sm 
                      bg-gray-100 dark:bg-[#1e2024] 
                      text-gray-700 dark:text-gray-200 
                      border border-gray-300 dark:border-gray-600 
                      focus:outline-designColor`}
                    type="text"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Message
                  </p>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className={`w-full rounded-md px-3 py-2 text-sm 
                      bg-gray-100 dark:bg-[#1e2024] 
                      text-gray-700 dark:text-gray-200 
                      border border-gray-300 dark:border-gray-600 
                      focus:outline-designColor`}
                    cols={30}
                    rows={8}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="w-full flex flex-col items-center">
                  <button
                    type="submit"
                    className="px-6 py-3 border border-designColor/90 text-white font-semibold rounded-xl shadow bg-gradient-to-r from-designColor/60 to-black hover:bg-gradient-to-r hover:from-black hover:to-designColor/70 transition"
                  >
                    Send Message
                  </button>

                  <p className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300 mt-4">
                    Safe, secure, and spam-free! Your message is protected. 
                    <FaLock className="text-designColor/80" />
                  </p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;
