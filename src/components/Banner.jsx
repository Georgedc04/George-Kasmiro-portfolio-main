import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 lg:px-28 py-20 bg-neutral-50 dark:bg-neutral-950">
  <div className="w-full lg:w-1/2 flex items-center justify-center mb-10 lg:mb-0">
    <LeftBanner />
  </div>

  <div className="w-full lg:w-1/2 flex items-center justify-center">
    <RightBanner />
  </div>
</section>

  );
};

export default Banner;
