import AboutDetail from "../components/AboutDetail";
import Resume from "../components/Resume";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-transparent pt-24 px-4 lg:px-28">
      <div className="w-full flex justify-center">
        <AboutDetail />
        
      </div>
      <div className="max-w-screen-xl mx-auto">
      <Resume />
      </div>
    </div>
  );
}
