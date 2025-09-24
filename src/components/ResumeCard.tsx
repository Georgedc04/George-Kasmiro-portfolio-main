const ResumeCard = ({ title, subTitle, result, des }: any) => {
  return (
    <div className="w-full h-1/3 group flex">
      {/* Timeline dot */}
      <div className="w-10 h-[6px] mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black/60 dark:bg-white/60">
          <span className="w-3 h-3 rounded-full bg-bodyColor dark:bg-bodyColorDark inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div> 

      {/* Card */}
      <div className="w-full bg-white/20 dark:bg-black/20 bg-gradient-to-b from-[#0a0a0a1f] to-[#ffffff23] dark:from-[#023b5588] dark:to-[#00000046] duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne dark:shadow-shadowTwo">
        {/* Header */}
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-black/70  dark:text-white/95 group-hover:text-black dark:group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100  duration-300">
              {subTitle}
            </p>
          </div>
          <div  className="flex justify-center items-center shadow-md p-2 bg-white dark:bg-white/85 rounded-lg border-designColor/70 hover:border-designColor border-2 w-20 h-12">
            <p className="px-4 py-2 text-designColor flex justify-center items-center  text-sm font-medium">
              {result}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-950 dark:group-hover:text-gray-100 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
