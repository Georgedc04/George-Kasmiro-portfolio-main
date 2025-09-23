import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
          <ResumeCard
            title="Trader"
            subTitle="Personal Trading - (2023 - present)"
            result="intertional"
            des="Analyzed market trends, executed trades, and managed investments using Smart Money concepts and technical strategies."
          />

          <ResumeCard
            title="Freelance Designer"
            subTitle="Various Clients - (2021 - 2023)"
            result="Remote"
            des="Worked with multiple clients on branding, posters, and marketing materials to enhance their visual presence."
          />
          <ResumeCard
            title="Graphic Designer"
            subTitle="Movies, Clips / Studio - (2018 - 2023)"
            result="Sudan / India"
            des="Created visual concepts for movies and media clips, ensuring creative storytelling and design impact."
          />
          
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2018</p>
          <h2 className="text-3xl md:text-4xl font-bold">Training Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Graphic Design Mentor"
            subTitle="Design Academy - (2021 - 2023)"
            result="India"
            des="Guided students in mastering graphic design tools and techniques, providing practical assignments and feedback."
          />
          <ResumeCard
            title="Design Assistant"
            subTitle="Startup Incubator - (2020 - 2021)"
            result="Remote"
            des="Supported design teams with project briefs, concept sketches, and brand identity development."
          />
          <ResumeCard
            title="Art Workshop Trainer"
            subTitle="Community Center - (2019 - 2020)"
            result="Sudan"
            des="Conducted workshops on creative design, helping participants explore digital art and visual storytelling."
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
