import { useParams, useNavigate } from "react-router-dom";
import { X } from "lucide-react"; // nice cross icon

interface ProjectData {
  id: string;
  title: string;
  src: string;
}

const projects: ProjectData[] = [
  {
    id: "trading-dashboard",
    title: "Trading Dashboard",
    src: "/images/projects/projectOne.jpg",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    src: "/images/projects/pw.jpg",
  },
  {
    id: "cryptocurrency-tracker",
    title: "Cryptocurrency Tracker",
    src: "/images/projects/project4.jpg",
  },
  {
    id: "investment-planner",
    title: "Investment Planner",
    src: "/images/projects/ip.jpg",
  },
  {
    id: "market-analysis-tool",
    title: "Market Analysis Tool",
    src: "/images/projects/mat.jpg",
  },
  {
    id: "automated-trading-bot",
    title: "Automated Trading Bot",
    src: "/images/projects/at.jpg",
  },
];


export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Project not found
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50">
      {/* Title + Close */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
          {project.title}
        </h1>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Image fullscreen */}
      <img
        src={project.src}
        alt={project.title}
        className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
      />
    </div>
  );
}
