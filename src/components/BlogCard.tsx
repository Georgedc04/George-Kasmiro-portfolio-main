

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
      className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 cursor-pointer"
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
        <h3 className="text-base uppercase dark:text-white font-semibold  text-black dark:font-normal">
          {title}
        </h3>
        <p className="text-xs text-gray-400">{date}</p>
        <p className="text-sm tracking-wide hover:text-gray-100 duration-300 line-clamp-3">
          {content}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
