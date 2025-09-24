interface Props {
  title: string;
  des: string;
}

const Title = ({ title, des }: Props) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      {/* Small Upper Title */}
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
        {title}
      </h3>

      {/* Main Title with Dark/Light Mode */}
      <h1 className="text-4xl md:text-5xl font-bold capitalize text-neutral-800 dark:text-neutral-300">
        {des}
      </h1>
    </div>
  );
};

export default Title;
