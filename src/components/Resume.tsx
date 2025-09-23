import { useState } from "react";
import Title from "./Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievement from "./Achievement";
import { FadeIn } from "./FadeIn";

const Resume = () => {
  const [educationData, setEducationData] = useState<Boolean>(true);
  const [skillData, setSkillData] = useState<Boolean>(false);
  const [experienceData, setExperienceData] = useState<Boolean>(false);
  const [achievementData, setAchievementData] = useState<Boolean>(false);

  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-gray-700 dark:border-b-gray-300"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="7+ YEARS OF EXPERIENCE" des="My Resume" />
        </div>

        {/* Tabs */}
        <div>
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              { label: "Education", active: educationData, setter: () => { setEducationData(true); setSkillData(false); setExperienceData(false); setAchievementData(false); } },
              { label: "Professional Skills", active: skillData, setter: () => { setEducationData(false); setSkillData(true); setExperienceData(false); setAchievementData(false); } },
              { label: "Experience", active: experienceData, setter: () => { setEducationData(false); setSkillData(false); setExperienceData(true); setAchievementData(false); } },
              { label: "Achievements", active: achievementData, setter: () => { setEducationData(false); setSkillData(false); setExperienceData(false); setAchievementData(true); } },
            ].map((tab, index) => (
              <li
                key={index}
                onClick={tab.setter}
                className={`cursor-pointer text-black dark:text-white font-medium py-2 px-4 border-2  rounded-lg ${
                  tab.active
                    ? "border-designColor bg-white/30 dark:bg-white/10 bg-gradient-to-b from-[#00000052] to-[#ffffff23] dark:from-[#023b5588] dark:to-[#00000046] rounded-lg shadow-shadowOne dark:shadow-shadowTwo"
                    : "border-transparent"
                } transition-all duration-300 bg-blue-700/10 hover:bg-gray-100 dark:hover:bg-blue-500/10 shadow-md `}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="mt-8">
          {educationData && <Education />}
          {skillData && <Skills />}
          {achievementData && <Achievement />}
          {experienceData && <Experience />}
        </div>
      </FadeIn>
    </section>
  );
};

export default Resume;
