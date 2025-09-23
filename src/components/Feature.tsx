import {  SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";
import { FaCode, FaDumbbell,  FaNetworkWired, FaUserSecret } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
              title="Business Strategy"
              des="Helping businesses grow with smart strategies, market analysis, and innovative solutions to achieve success."
              icon={<MdBusinessCenter />}
            />
          <Card
            title="Ethical Hacking"
            des="Learning and applying security techniques to protect systems, identify vulnerabilities, and prevent cyber threats."
            icon={<FaUserSecret />}
          />
          <Card
              title="Full Stack"
              des="Building complete web applications by handling both front-end and back-end development tasks."
              icon={<FaCode />}
            />
          <Card
            title="Fitness"
            des="Dedicated to promoting a healthy lifestyle with strength training, endurance exercises, and overall wellness. Helping you achieve your fitness goals."
            icon={<FaDumbbell />}
          />
          <Card
            title="Graphic Design"
            des="Creative and detail-oriented graphic designer with experience in movies, clips, photos, and sound editing. Passionate about visual storytelling and design aesthetics."
            icon={<SiAntdesign />}
          />

          <Card
            title="Networking"
            des="Designing and managing networks to ensure secure and efficient data communication."
            icon={<FaNetworkWired />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
