import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Part One: Education Quality */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
            Education Quality
          </h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 dark:border-l-neutral-600 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Computer Science (Cybersecurity)"
            subTitle="Graphic Era Hill University (2023 - 2027)"
            result="../10"
            des="Focused on cybersecurity principles and practices, learning to design secure systems and solve complex problems in computing."
          />
          <ResumeCard
            title="Information Technology"
            subTitle="Cyber Academy (2022 - 2023)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic foundation. Higher education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="St Daniel Comboni Secondary School (2018 - 2021)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>

      {/* Part Two: Job Experience */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
            Job Experience
          </h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 dark:border-l-neutral-600 flex flex-col gap-10">
          <ResumeCard
            title="Intern – Cybersecurity Analyst"
            subTitle="Tech Solutions - (2024 - Present)"
            result="India"
            des="Assisting in identifying and resolving security vulnerabilities, while learning industry-standard tools and best practices."
          />
          <ResumeCard
            title="Junior Developer"
            subTitle="Software - (2023 - 2024)"
            result="India"
            des="Contributed to building web applications with clean code and optimized performance, while collaborating with cross-functional teams."
          />
          <ResumeCard
            title="Graphic Designer"
            subTitle="Movies, Clips / Studio - (2018 - 2023)"
            result="Sudan / India"
            des="Designed visual content for films and media projects, bringing creative ideas to life and enhancing storytelling through impactful graphics."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
