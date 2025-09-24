

interface BlogProps {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
  onClick: () => void;
}

const BlogCard = ({  title, date, content, image, onClick }: BlogProps) => {
  return (
    <div
      onClick={onClick}
      className=" w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne dark:shadow-shadowTwo flex flex-col bg-white/20 dark:bg-black/20 bg-gradient-to-b from-gray-400 to-[#ffffff23] dark:from-[#023b5588] dark:to-[#00000046] group:hover:bg-gradient-to-b hover:from-gray-400 hover:to-gray-100 dark:group:hover:bg-gradient-to-b dark:hover:from-gray-[#023b5588] dark:hover:to-[#023b5588] transition-colors duration-1000 cursor-pointer"
    >
      {/* Image */}
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300"
          src={image}
          alt={title}
        />
      </div>

      {/* Content */}
      <div className="w-full mt-5 flex flex-col gap-4">
        <h3 className="text-sm uppercase dark:text-white/90 font-semibold text-black dark:font-norma line-clamp-2">
          {title}
        </h3>
        <p className="text-xs dark:text-yellow-400/80 text-designColor ">{date}</p>
        <p className="text-sm text-black dark:text-white/80 tracking-wide dark:hover:text-white  duration-300 line-clamp-3">
          {content}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
