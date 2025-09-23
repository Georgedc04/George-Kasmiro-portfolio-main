import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { at, ip, mat, project4, projectOne,  pw } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Trading Dashboard"
            des="A real-time trading dashboard providing market insights, trends, and analytics."
            src="images/prjects/projectOne"
          />
          <ProjectsCard
            title="Portfolio Website"
            des="A personal website showcasing projects, skills, and experience in design and development."
            src={pw}
          />
          <ProjectsCard
            title="Cryptocurrency Tracker"
            des="An app to monitor cryptocurrency prices, news, and trading opportunities."
            src={project4}
          />
          <ProjectsCard
            title="Investment Planner"
            des="Tool to help users plan and track investments for better financial decisions."
            src={ip}
          />
          <ProjectsCard
            title="Market Analysis Tool"
            des="An advanced tool offering technical indicators and charts for informed trading."
            src={mat}
          />
          <ProjectsCard
            title="Automated Trading Bot"
            des="A bot that executes trades automatically based on predefined strategies."
            src={at}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
