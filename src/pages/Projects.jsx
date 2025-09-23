import { FadeIn } from "../components/FadeIn";
import ProjectsCard from "../components/ProjectsCard";
import Title from "../components/Title";

export default function Projects() {
  return (
    <section
      id="project"
      className="w-full py-20 pt-24 border-b-[1px] border-b-gray-700 p-5"
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
            id="trading-dashboard"
            title="Trading Dashboard"
            des="A real-time trading dashboard providing market insights, trends, and analytics."
            src="/images/projects/projectOne.jpg"
          />
          <ProjectsCard
            id="portfolio-website"
            title="Portfolio Website"
            des="A personal website showcasing projects, skills, and experience in design and development."
            src="/images/projects/pw.jpg"
          />
          <ProjectsCard
            id="cryptocurrency-tracker"
            title="Cryptocurrency Tracker"
            des="An app to monitor cryptocurrency prices, news, and trading opportunities."
            src="/images/projects/project4.jpg"
          />
          <ProjectsCard
            id="investment-planner"
            title="Investment Planner"
            des="Tool to help users plan and track investments for better financial decisions."
            src="/images/projects/ip.jpg"
          />
          <ProjectsCard
            id="market-analysis-tool"
            title="Market Analysis Tool"
            des="An advanced tool offering technical indicators and charts for informed trading."
            src="/images/projects/mat.jpg"
          />
          <ProjectsCard
            id="automated-trading-bot"
            title="Automated Trading Bot"
            des="A bot that executes trades automatically based on predefined strategies."
            src="/images/projects/at.jpg"
          />
        </div>
      </FadeIn>
    </section>
  );
}
