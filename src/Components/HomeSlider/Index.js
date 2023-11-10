import React, { useState } from "react";
import Carousel from "nuka-carousel";

const Index = () => {
  const slides = [
    {
      image: "https://i.ebayimg.com/images/g/IDYAAOSw-yNka35e/s-l960.webp",
      title: " Stay Fit, stay active!",
      description: "Discover our must-have sports products",
      buttonText: "Discover now",
      textColor: "#07522c",
      bgColor: "#E8F377",
    },
    {
      image: "https://i.ebayimg.com/images/g/MKsAAOSwIIxkZjAI/s-l960.webp",
      title: "There’s always time for playtime",
      description: "Shop the selection of toys & hobbies for all ages!",
      buttonText: "Shop Now ",
      bgColor: "#c9e53c",
    },
  ];
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <div className="w-12 mt-1 h-1 bg-[#555555]"></div>
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Carousel
          autoplay={!isHovered}
          autoplayInterval={2000}
          wrapAround={true}
          renderBottomCenterControls={() => null} // Disable default controls
        >
          {slides.map((slide, index) => (
            <div key={index}>
              <div
                className="flex justify-between w-full"
                style={{ backgroundColor: slide.bgColor }}
              >
                <div className="mt-6 pl-16">
                  <h1
                    className="text-4xl font-semibold"
                    style={{ color: slide.textColor }}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className="pt-4 text-xl pb-6"
                    style={{ color: slide.textColor }}
                  >
                    {slide.description}
                  </p>
                  <button className="flex border border-white p-2">
                    {slide.buttonText}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
                <img src={slide.image} alt="Slide" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Index;
