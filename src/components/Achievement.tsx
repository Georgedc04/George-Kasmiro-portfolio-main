import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Company Experience Section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Graphic Designer"
            subTitle="Videos, Pics & Sound Editing - (2018 - 2024)"
            result="SD/IND"
            des="Designed visual and audio content for film and media projects, improving storytelling with creative graphics, clips, and sound editing."
          />
          <ResumeCard
            title="Freelance Video Editor"
            subTitle="Independent Projects - (2019 - 2022)"
            result="Remote"
            des="Collaborated with content creators to produce engaging video content, managing editing, effects, and final production."
          />
          <ResumeCard
            title="Media Assistant"
            subTitle="Creative Studios - (2020 - 2023)"
            result="Sudan"
            des="Supported media teams by editing, formatting, and enhancing audio-visual content while ensuring high-quality output and fast delivery."
          />
        </div>
      </div>

      {/* Job Experience Section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Computer Science & Cybersecurity Student"
            subTitle="Graphic Era Hill University - (2023 - Present)"
            result="India"
            des="Studying advanced topics in cybersecurity and computer science while working on projects related to ethical hacking, secure networking, and software development."
          />
          <ResumeCard
            title="Cybersecurity Intern"
            subTitle="Online Platforms - (2023 - Present)"
            result="Remote"
            des="Handled network security tasks, vulnerability assessments, and system protection strategies as part of various internships and freelance roles."
          />
          <ResumeCard
            title="Network Assistant"
            subTitle="Cisco Projects - (2024 - 2025)"
            result="Remote"
            des="Configured and supported network systems using Cisco technologies, assisting in troubleshooting, optimizing, and securing communication infrastructures."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
