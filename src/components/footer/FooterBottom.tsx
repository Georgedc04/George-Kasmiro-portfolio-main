const FooterBottom = () => {
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <div className="w-full py-4">
      <p className="text-center text-gray-500 text-base">
        © {currentYear}. All rights reserved by {" "} 
        <span
        className="text-designColor"
        > George Kasmiro</span>
      </p>
    </div>
  );
};

export default FooterBottom;
