import React from "react";
import Navbar from "../../Components/Navbar/index";
import CategoryBanner from "../../Assets/CategoryBanner.png";
import CategoryCard from "../../Components/CategoryCard/Index";
import Footer from "../../Components/Footer/Index";
const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="w-11/12 mx-auto mt-6">
        <div className="relative h-[400px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${CategoryBanner})` }}
          >
            {/* Overlay Content */}

            {/* Content Container */}
            <div className="relative z-10 flex items-center ml-20 h-full">
              <div
                className="text-white text-center"
                style={{
                  width: "729px",
                  height: "368px",
                  flexShrink: 0,
                  borderRadius: "50px",
                  background:
                    "linear-gradient(145deg, rgba(244, 244, 244, 0.40) -4.23%, rgba(244, 244, 244, 0.20) 102.58%, rgba(244, 244, 244, 0.20) 102.58%)",
                  boxShadow: "0px 4px 15px 0px rgba(11, 47, 138, 0.60)",
                }}
              >
                <h1 className="text-4xl font-bold mb-4 mt-4">
                  Elevate Your Electronics Game with <br /> Our Extensive Rental
                  Options
                </h1>
                <p className="text-[22px]">
                  Dive into our world of electronics rentals, where you'll
                  <br />
                  discover an unparalleled array of cutting-edge
                  <br /> gadgets and devices at your fingertips. Whether you're
                  <br /> an aspiring drone pilot, a tech aficionado seeking the
                  <br /> latest computer upgrades, or simply in need of
                  <br /> temporary storage solutions, we've got you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="text-2xl font-semibold">Electronics</div>
          <div className="flex justify-between items-center">
            <p className="font-bold">View</p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M10.6666 10.6667H26.6666M14.6666 16H26.6666M18.6666 21.3333H26.6666M5.33331 10.6667H5.34665M9.33331 16H9.34665M13.3333 21.3333H13.3466"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clip-path="url(#clip0_707_764)">
                  <path
                    d="M12.4444 3.55554H5.33332C4.86182 3.55554 4.40964 3.74284 4.07624 4.07624C3.74284 4.40964 3.55554 4.86182 3.55554 5.33332V12.4444C3.55554 12.9159 3.74284 13.3681 4.07624 13.7015C4.40964 14.0349 4.86182 14.2222 5.33332 14.2222H12.4444C12.9159 14.2222 13.3681 14.0349 13.7015 13.7015C14.0349 13.3681 14.2222 12.9159 14.2222 12.4444V5.33332C14.2222 4.86182 14.0349 4.40964 13.7015 4.07624C13.3681 3.74284 12.9159 3.55554 12.4444 3.55554ZM5.33332 12.4444V5.33332H12.4444V12.4444H5.33332Z"
                    fill="black"
                  />
                  <path
                    d="M26.6667 3.55554H19.5555C19.0841 3.55554 18.6319 3.74284 18.2985 4.07624C17.9651 4.40964 17.7778 4.86182 17.7778 5.33332V12.4444C17.7778 12.9159 17.9651 13.3681 18.2985 13.7015C18.6319 14.0349 19.0841 14.2222 19.5555 14.2222H26.6667C27.1382 14.2222 27.5903 14.0349 27.9237 13.7015C28.2571 13.3681 28.4444 12.9159 28.4444 12.4444V5.33332C28.4444 4.86182 28.2571 4.40964 27.9237 4.07624C27.5903 3.74284 27.1382 3.55554 26.6667 3.55554ZM19.5555 12.4444V5.33332H26.6667V12.4444H19.5555Z"
                    fill="black"
                  />
                  <path
                    d="M12.4444 17.7778H5.33332C4.86182 17.7778 4.40964 17.9651 4.07624 18.2985C3.74284 18.6319 3.55554 19.0841 3.55554 19.5555V26.6667C3.55554 27.1382 3.74284 27.5903 4.07624 27.9237C4.40964 28.2571 4.86182 28.4444 5.33332 28.4444H12.4444C12.9159 28.4444 13.3681 28.2571 13.7015 27.9237C14.0349 27.5903 14.2222 27.1382 14.2222 26.6667V19.5555C14.2222 19.0841 14.0349 18.6319 13.7015 18.2985C13.3681 17.9651 12.9159 17.7778 12.4444 17.7778ZM5.33332 26.6667V19.5555H12.4444V26.6667H5.33332Z"
                    fill="black"
                  />
                  <path
                    d="M26.6667 17.7778H19.5555C19.0841 17.7778 18.6319 17.9651 18.2985 18.2985C17.9651 18.6319 17.7778 19.0841 17.7778 19.5555V26.6667C17.7778 27.1382 17.9651 27.5903 18.2985 27.9237C18.6319 28.2571 19.0841 28.4444 19.5555 28.4444H26.6667C27.1382 28.4444 27.5903 28.2571 27.9237 27.9237C28.2571 27.5903 28.4444 27.1382 28.4444 26.6667V19.5555C28.4444 19.0841 28.2571 18.6319 27.9237 18.2985C27.5903 17.9651 27.1382 17.7778 26.6667 17.7778ZM19.5555 26.6667V19.5555H26.6667V26.6667H19.5555Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_707_764">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>
          </div>
        </div>
        <div className="flex mb-10">
          <div>
            <div className="flex justify-start p-4 h-full      ">
              <div
                className="p-4 "
                style={{ width: "263px ", background: "#D9D9D9" }}
              >
                <h1 className="text-2xl font-bold mb-4">Filters</h1>

                {/* Filter Options */}
                <div className="mb-4">
                  <label htmlFor="location">Location</label>
                  <select
                    id="location"
                    className="block w-full mt-4 p-2 border rounded"
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="verificationStatus">
                    Verification Status
                  </label>
                  <select
                    id="verificationStatus"
                    className="block w-full p-2 mt-4 border rounded"
                  >
                    <option value="verified">Verified</option>
                    <option value="notVerified">Not Verified</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="daysAvailable">Days Available</label>
                  <select
                    id="daysAvailable"
                    className="block w-full p-2 mt-4 border rounded"
                  >
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="datePosted">Date Posted</label>
                  <select
                    id="datePosted"
                    className="block w-full p-2 mt-4 border rounded"
                  >
                    <option value="last24h">Last 24 hours</option>
                    <option value="last7days">Last 7 days</option>
                    <option value="last30days">Last 30 days</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label htmlFor="priceRange">Price Range</label>
                  <input
                    type="range"
                    id="priceRange"
                    name="priceRange"
                    min="0"
                    max="150"
                    className="block w-full"
                  />
                  <p className="text-sm text-gray-600">Min: $0 - Max: $150</p>
                </div>
                <button class="w-56 h-11 mt-6  rounded-xl bg-[#4CAF50] text-white font-bold mr-5">
                  Apply Filters{" "}
                </button>
                <button class="w-56 h-11 mt-6  rounded-xl bg-[#4CAF50] text-white font-bold mr-5">
                  Remove Filters{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#D9D9D9] p-3 w-full mt-4">
            <div className="w-full mt-14 flex justify-between">
              <div className="w-[30%] ">
                <CategoryCard />
              </div>
              <div className="w-[30%] ">
                <CategoryCard />
              </div>
              <div className="w-[30%] ">
                <CategoryCard />
              </div>
            </div>
            <div className="w-full flex mt-14 justify-between">
              <div className="w-[30%] ">
                <CategoryCard />
              </div>
              <div className="w-[30%] ">
                <CategoryCard />
              </div>
              <div className="w-[30%] ">
                <CategoryCard />
              </div>
            </div>
            <div className="w-full mt-14 flex justify-between pb-10">
              <div className="w-[30%] ">
                <CategoryCard />
              </div>
              <div className="w-[30%] ">
                <CategoryCard />
              </div>
              <div className="w-[30%] ">
                <CategoryCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
