import { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (next: any) => {
      setDocActive(next);
    },
    appendDots: (dots: any) => (
      <div style={{ borderRadius: "10px", padding: "10px" }}>
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="WHAT CLIENTS SAY" des="Testimonial" />
        </div>
        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            {/* Testimonial One */}
            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                  <img
                    className="h-72 rounded-lg object-cover"
                    src="/images/testmonial/testimonialOne.png"
                    alt="testimonialOne"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Client
                    </p>
                    <h3 className="text-2xl font-bold">Ahmed Ali</h3>
                    <p className="text-base tracking-wide text-gray-500">
                      Investor
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <img className="w-20" src="/images/testmonial/quote.png" alt="quote" />
                  <div className="w-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-6 flex flex-col gap-6">
                    <div className="flex flex-col lgl:items-center border-b-2 border-b-gray-900 pb-4">
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Trading Strategy Guidance
                      </h3>
                      <p className="text-base text-gray-400 mt-2">
                        Remote • 2025
                      </p>
                      <div className="text-yellow-500 flex gap-1 mt-2">
                        <RiStarFill /> <RiStarFill /> <RiStarFill />{" "}
                        <RiStarFill /> <RiStarFill />
                      </div>
                    </div>
                    <p className="text-base text-gray-400 leading-6">
                      “George’s Smart Money Concept strategies helped me double
                      my portfolio. His analysis is sharp and easy to follow.”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Two */}
            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                  <img
                    className="h-72 rounded-lg object-cover"
                    src="../../public/images/testmonial/testimonialTwo.png"
                    alt="testimonialTwo"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Client
                    </p>
                    <h3 className="text-2xl font-bold">Sarah Ibrahim</h3>
                    <p className="text-base tracking-wide text-gray-500">
                      Freelancer
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <img className="w-20" src="/images/testmonial/quote.png" alt="quote" />
                  <div className="w-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-6 flex flex-col gap-6">
                    <div className="flex flex-col lgl:items-center border-b-2 border-b-gray-900 pb-4">
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Cybersecurity Project Support
                      </h3>
                      <p className="text-base text-gray-400 mt-2">
                        Online • 2025
                      </p>
                      <div className="text-yellow-500 flex gap-1 mt-2">
                        <RiStarFill /> <RiStarFill /> <RiStarFill />{" "}
                        <RiStarFill /> <RiStarFill />
                      </div>
                    </div>
                    <p className="text-base text-gray-400 leading-6">
                      “George guided me in securing my website against
                      vulnerabilities. His knowledge in ethical hacking is
                      outstanding.”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Three */}
            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                  <img
                    className="h-72 rounded-lg object-cover"
                    src="../../public/images/testmonial/testimonialThree.png"
                    alt="testimonialThree"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Client
                    </p>
                    <h3 className="text-2xl font-bold">Ravi Kumar</h3>
                    <p className="text-base tracking-wide text-gray-500">
                      Startup Founder
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <img className="w-20" src="/images/testmonial/quote.png" alt="quote" />
                  <div className="w-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-6 flex flex-col gap-6">
                    <div className="flex flex-col lgl:items-center border-b-2 border-b-gray-900 pb-4">
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Graphic Design & Branding
                      </h3>
                      <p className="text-base text-gray-400 mt-2">
                        Egypt • 2024
                      </p>
                      <div className="text-yellow-500 flex gap-1 mt-2">
                        <RiStarFill /> <RiStarFill /> <RiStarFill />{" "}
                        <RiStarFill /> <RiStarFill />
                      </div>
                    </div>
                    <p className="text-base text-gray-400 leading-6">
                      “George created professional designs and branding for my
                      startup. His creativity and detail made my business stand
                      out.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </FadeIn>
    </section>
  );
};

export default Testimonial;
