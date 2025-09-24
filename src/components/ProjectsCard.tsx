import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";

interface Props {
  id: string;
  title: string;
  des: string;
  src: string;
}

const ProjectsCard = ({ id, title, des, src }: Props) => {
  const [showDes, setShowDes] = useState(false);

  return (
    <div
      onClick={() => setShowDes(!showDes)}
      className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne dark:shadow-shadowTwo flex flex-col bg-white/20 dark:bg-black/20 bg-gradient-to-b from-[#0a0a0a1f] to-[#023b5588] dark:from-[#ffffff23] dark:to-[#00000046] hover:bg-gradient-to-b hover:from-gray-300 hover:to-gray-500  dark:hover:bg-gradient-to-b dark:hover:from-[#ffffff23] dark:hover:to-blue-600/10 transition-colors duration-700 cursor-pointer "
    >
      {/* Image */}
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 rounded-md"
          src={src}
          alt={title}
        />
      </div>

      {/* Title + Icons */}
      <div className="w-full mt-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base uppercase text-black dark:text-white font-semibold">
            {title}
          </h3>
          <div className="flex gap-2">
            <a
              href="https://github.com/Georgedc04"
              target="_blank"
              onClick={(e) => e.stopPropagation()} // ✅ stops toggle when clicking icon
            >
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center 
                              text-gray-200 hover:text-designColor duration-300 cursor-pointer">
                <BsGithub />
              </span>
            </a>
            <a
              href="https://www.youtube.com/@Dc_trade_fx"
              target="_blank"
              onClick={(e) => e.stopPropagation()} // ✅ stops toggle when clicking icon
            >
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center 
                              text-gray-200 hover:text-designColor duration-300 cursor-pointer">
                <FaYoutube />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Description Toggle */}
      {showDes && (
        <p className="text-sm tracking-wide mt-3 text-white dark:text-white/90 leading-6">
          {des}
        </p>
      )}

      {/* Link to project details */}
      <div className="flex justify-center">
        <Link
          to={`/projects/${id}`}
          onClick={(e) => e.stopPropagation()}
          className="mt-3 inline-flex items-center justify-center 
                    px-6 py-1.5 border border-designColor/80 
                    text-xs text-white font-medium rounded-md 
                    shadow bg-gradient-to-r from-designColor/60 to-black 
                    hover:from-black hover:to-designColor/60 
                    transition"
        >
          View
        </Link>
      </div>




    </div>
  );
};

export default ProjectsCard;
