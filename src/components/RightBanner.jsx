import { FadeIn } from "./FadeIn";

const RightBanner = () => {
  return (
    <FadeIn className="w-full  flex justify-center items-center relative">
      <img
        className="w-[300px] h-[470px] md:w-[400px] md:h-[600px] lgl:w-[500px] lgl:h-[755px] flex-shrink-0 z-10 object-contain
"
        src="/images/bannerImg.png"
        alt="BannerImg"
      />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] 
                      bg-gradient-to-r from-[#f3f4f600] dark:from-[#0000000e] 
                      to-[#000000] dark:to-[#ffffffe8] 
                      shadow-sm flex justify-center items-center">
      </div>
    </FadeIn>
  );
};

export default RightBanner;
