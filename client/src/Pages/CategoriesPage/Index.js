import React, { useState } from "react";
import Navbar from "../../Components/Navbar/index";
import CategoryBanner from "../../Assets/CategoryBanner.png";
import CategoryCard from "../../Components/CategoryCard/Index";
import Footer from "../../Components/Footer/Index";
import { Link } from "react-router-dom";
import Category1 from "../../Assets/category1.svg";
import ListView from "../../Components/BrowsingPagination/ListView";
import GridView from "../../Components/BrowsingPagination/GridView";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
const Index = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const options = ["one", "two", "three"];
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [days, setDays] = useState("");
  const data = [
    {
      title: "SONY high resolution camera-92",
      rating: 3,
      price: "Price",
      zipcode: "20001",
      reviews: 2,
    },
    {
      title: "SONY high resolution camera-92",
      rating: 3,
      price: "Price",
      zipcode: "20001",
      reviews: 2,
    },
    {
      title: "SONY high resolution camera-92",
      rating: 3,
      price: "Price",
      zipcode: "20001",
      reviews: 2,
    },
    {
      title: "SONY high resolution camera-92",
      rating: 3,
      price: "Price",
      zipcode: "20001",
      reviews: 2,
    },
    {
      title: "SONY high resolution camera-92",
      rating: 3,
      price: "Price",
      zipcode: "20001",
      reviews: 2,
    },
    {
      title: "SONY high resolution camera-92",
      rating: 3,
      price: "Price",
      zipcode: "20001",
      reviews: 2,
    },
    {
      title: "SONY high resolution camera-92",
      rating: 3,
      price: "Price",
      zipcode: "20001",
      reviews: 2,
    },
    {
      title: "SONY high resolution camera-92",
      rating: 3,
      price: "Price",
      zipcode: "20001",
      reviews: 2,
    },
    {
      title: "SONY high resolution camera-92",
      rating: 3,
      price: "Price",
      zipcode: "20001",
      reviews: 2,
    },
    {
      title: "SONY high resolution camera-92",
      rating: 3,
      price: "Price",
      zipcode: "20001",
      reviews: 2,
    },
    {
      title: "SONY high resolution camera-92",
      rating: 3,
      price: "Price",
      zipcode: "20001",
      reviews: 2,
    },
    {
      title: "SONY high resolution camera-92",
      rating: 3,
      price: "Price",
      zipcode: "20001",
      reviews: 2,
    },
    {
      title: "SONY high resolution camera-92",
      rating: 3,
      price: "Price",
      zipcode: "20001",
      reviews: 2,
    },
  ];

  const [enableListView, setenableListView] = useState(false);
  const handlePageClick = (pageNumber) => {
    setSelectedPage(pageNumber);
  };
  return (
    <div>
      <Navbar />

      <div className="mx-5 mt-6">
        <div className="relative">
          <img src={Category1} className="w-full " />
          <div className="absolute justify-center flex flex-col p-10 items-center w-[630px] h-[348px] top-5 left-20 rounded-[50px] shadow-[0px_4px_15px_#0b2f8a99] [background:linear-gradient(180deg,rgba(244,244,244,0.4)_0%,rgba(244,244,244,0.2)_100%,rgba(244,244,244,0.2)_100%)]">
            <div className="font-bold text-[30px] text-white text-center">
              Elevate Your Electronics Game with Our Extensive Rental Options
            </div>
            <div className="text-white text-center text-[20px]">
              Dive into our world of electronics rentals, where you'll discover
              an unparalleled array of cutting-edge gadgets and devices at your
              fingertips. Whether you're an aspiring drone pilot, a tech
              aficionado seeking the latest computer upgrades, or simply in need
              of temporary storage solutions, we've got you covered.
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-5 px-5">
          <div className="flex flex-col">
            <div className="text-[15px] flex gap-3 items-center">
              <div>Home</div>
              <div>/</div>
              <div>Electronics</div>
            </div>

            <div className="font-bold text-[22px]">Electronics</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="font-bold text-[14px]">View</div>
            <button onClick={() => setenableListView((prev) => !prev)}>
              {enableListView ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <rect width="32" height="32" fill="#D6FFD8" />
                  <path
                    d="M10.6663 10.667H26.6663M14.6663 16.0003H26.6663M18.6663 21.3337H26.6663M5.33301 10.667H5.34634M9.33301 16.0003H9.34634M13.333 21.3337H13.3463"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M10.6668 10.667H26.6668M14.6668 16.0003H26.6668M18.6668 21.3337H26.6668M5.3335 10.667H5.34683M9.3335 16.0003H9.34683M13.3335 21.3337H13.3468"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </button>
            <button onClick={() => setenableListView((prev) => !prev)}>
              {enableListView ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1396_5211)">
                    <path
                      d="M12.4446 3.55566H5.33344C4.86195 3.55566 4.40976 3.74297 4.07636 4.07636C3.74297 4.40976 3.55566 4.86195 3.55566 5.33344V12.4446C3.55566 12.916 3.74297 13.3682 4.07636 13.7016C4.40976 14.035 4.86195 14.2223 5.33344 14.2223H12.4446C12.916 14.2223 13.3682 14.035 13.7016 13.7016C14.035 13.3682 14.2223 12.916 14.2223 12.4446V5.33344C14.2223 4.86195 14.035 4.40976 13.7016 4.07636C13.3682 3.74297 12.916 3.55566 12.4446 3.55566ZM5.33344 12.4446V5.33344H12.4446V12.4446H5.33344Z"
                      fill="black"
                    />
                    <path
                      d="M26.6662 3.55566H19.5551C19.0836 3.55566 18.6314 3.74297 18.298 4.07636C17.9646 4.40976 17.7773 4.86195 17.7773 5.33344V12.4446C17.7773 12.916 17.9646 13.3682 18.298 13.7016C18.6314 14.035 19.0836 14.2223 19.5551 14.2223H26.6662C27.1377 14.2223 27.5899 14.035 27.9233 13.7016C28.2567 13.3682 28.444 12.916 28.444 12.4446V5.33344C28.444 4.86195 28.2567 4.40976 27.9233 4.07636C27.5899 3.74297 27.1377 3.55566 26.6662 3.55566ZM19.5551 12.4446V5.33344H26.6662V12.4446H19.5551Z"
                      fill="black"
                    />
                    <path
                      d="M12.4446 17.7773H5.33344C4.86195 17.7773 4.40976 17.9646 4.07636 18.298C3.74297 18.6314 3.55566 19.0836 3.55566 19.5551V26.6662C3.55566 27.1377 3.74297 27.5899 4.07636 27.9233C4.40976 28.2567 4.86195 28.444 5.33344 28.444H12.4446C12.916 28.444 13.3682 28.2567 13.7016 27.9233C14.035 27.5899 14.2223 27.1377 14.2223 26.6662V19.5551C14.2223 19.0836 14.035 18.6314 13.7016 18.298C13.3682 17.9646 12.916 17.7773 12.4446 17.7773ZM5.33344 26.6662V19.5551H12.4446V26.6662H5.33344Z"
                      fill="black"
                    />
                    <path
                      d="M26.6662 17.7773H19.5551C19.0836 17.7773 18.6314 17.9646 18.298 18.298C17.9646 18.6314 17.7773 19.0836 17.7773 19.5551V26.6662C17.7773 27.1377 17.9646 27.5899 18.298 27.9233C18.6314 28.2567 19.0836 28.444 19.5551 28.444H26.6662C27.1377 28.444 27.5899 28.2567 27.9233 27.9233C28.2567 27.5899 28.444 27.1377 28.444 26.6662V19.5551C28.444 19.0836 28.2567 18.6314 27.9233 18.298C27.5899 17.9646 27.1377 17.7773 26.6662 17.7773ZM19.5551 26.6662V19.5551H26.6662V26.6662H19.5551Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1396_5211">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1396_5545)">
                    <rect width="32" height="32" fill="#D6FFD8" />
                    <path
                      d="M12.4446 3.55566H5.33344C4.86195 3.55566 4.40976 3.74297 4.07636 4.07636C3.74297 4.40976 3.55566 4.86195 3.55566 5.33344V12.4446C3.55566 12.916 3.74297 13.3682 4.07636 13.7016C4.40976 14.035 4.86195 14.2223 5.33344 14.2223H12.4446C12.916 14.2223 13.3682 14.035 13.7016 13.7016C14.035 13.3682 14.2223 12.916 14.2223 12.4446V5.33344C14.2223 4.86195 14.035 4.40976 13.7016 4.07636C13.3682 3.74297 12.916 3.55566 12.4446 3.55566ZM5.33344 12.4446V5.33344H12.4446V12.4446H5.33344Z"
                      fill="black"
                    />
                    <path
                      d="M26.6667 3.55566H19.5556C19.0841 3.55566 18.6319 3.74297 18.2985 4.07636C17.9651 4.40976 17.7778 4.86195 17.7778 5.33344V12.4446C17.7778 12.916 17.9651 13.3682 18.2985 13.7016C18.6319 14.035 19.0841 14.2223 19.5556 14.2223H26.6667C27.1382 14.2223 27.5904 14.035 27.9238 13.7016C28.2572 13.3682 28.4445 12.916 28.4445 12.4446V5.33344C28.4445 4.86195 28.2572 4.40976 27.9238 4.07636C27.5904 3.74297 27.1382 3.55566 26.6667 3.55566ZM19.5556 12.4446V5.33344H26.6667V12.4446H19.5556Z"
                      fill="black"
                    />
                    <path
                      d="M12.4446 17.7773H5.33344C4.86195 17.7773 4.40976 17.9646 4.07636 18.298C3.74297 18.6314 3.55566 19.0836 3.55566 19.5551V26.6662C3.55566 27.1377 3.74297 27.5899 4.07636 27.9233C4.40976 28.2567 4.86195 28.444 5.33344 28.444H12.4446C12.916 28.444 13.3682 28.2567 13.7016 27.9233C14.035 27.5899 14.2223 27.1377 14.2223 26.6662V19.5551C14.2223 19.0836 14.035 18.6314 13.7016 18.298C13.3682 17.9646 12.916 17.7773 12.4446 17.7773ZM5.33344 26.6662V19.5551H12.4446V26.6662H5.33344Z"
                      fill="black"
                    />
                    <path
                      d="M26.6667 17.7773H19.5556C19.0841 17.7773 18.6319 17.9646 18.2985 18.298C17.9651 18.6314 17.7778 19.0836 17.7778 19.5551V26.6662C17.7778 27.1377 17.9651 27.5899 18.2985 27.9233C18.6319 28.2567 19.0841 28.444 19.5556 28.444H26.6667C27.1382 28.444 27.5904 28.2567 27.9238 27.9233C28.2572 27.5899 28.4445 27.1377 28.4445 26.6662V19.5551C28.4445 19.0836 28.2572 18.6314 27.9238 18.298C27.5904 17.9646 27.1382 17.7773 26.6667 17.7773ZM19.5556 26.6662V19.5551H26.6667V26.6662H19.5556Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1396_5545">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="px-5 grid grid-cols-12 gap-6 mt-4">
          <div className="col-span-3  bg-[#D6FFD8] flex flex-col py-5 px-5 gap-5">
            <div className="font-semibold text-[22px] mb-2">Filters</div>
            <div className="">Location</div>

            <Dropdown
              options={options}
              onChange={(item) => {
                setLocation(item.value);
              }}
              value={location}
              placeholder="Select location"
              className="border-[1px]  border-black"
              menuClassName="text-[15px]"
              controlClassName="h-[37px]"
              placeholderClassName="text-[15px]"
            />
            <div className="">Verification Status</div>

            <Dropdown
              options={options}
              onChange={(item) => {
                setStatus(item.value);
              }}
              value={status}
              placeholder="Select status"
              className="border-[1px] border-black"
              menuClassName="text-[15px]"
              controlClassName="h-[37px]"
              placeholderClassName="text-[15px]"
            />
            <div className="">Days available</div>

            <Dropdown
              options={options}
              onChange={(item) => {
                setDays(item.value);
              }}
              value={days}
              placeholder="Select days"
              className="border-[1px] border-black"
              menuClassName="text-[15px]"
              controlClassName="h-[37px]"
              placeholderClassName="text-[15px]"
            />
            <div className="">Date posted</div>

            <Dropdown
              options={options}
              onChange={(item) => {
                setDate(item.value);
              }}
              value={date}
              placeholder="Select date"
              className="border-[1px] border-black"
              menuClassName="text-[15px]"
              controlClassName="h-[37px]"
              placeholderClassName="text-[15px]"
            />
            <div>
              <Slider
                range
                defaultValue={[50, 100]}
                min={0}
                max={150}
                handleStyle={[
                  {
                    backgroundColor: "black",
                    border: "none",

                    width: 12,
                    height: 12,
                    // bottom: 1,
                  },
                  {
                    backgroundColor: "black",
                    border: "none",
                    width: 12,
                    height: 12,
                    // bottom: 1,
                  },
                ]}
                trackStyle={{ backgroundColor: "none", height: 0 }}
                railStyle={{ backgroundColor: "black", height: 1 }}
              />
              <div className="flex items-center justify-between text-[14px]">
                <div>0</div>
                <div>150</div>
              </div>
            </div>
            <button className="bg-[#01A664] mb-10 py-3 rounded-2xl text-white font-semibold text-[14px] tracking-[1px]">
              Apply filters
            </button>
            <button className="bg-[#01A664] py-3 rounded-2xl text-white font-semibold text-[14px] tracking-[1px]">
              Clear filters
            </button>
          </div>
          {enableListView ? (
            <ListView itemsPerPage={5} items={data} />
          ) : (
            <GridView
              parentClassName="grid grid-cols-3 justify-between px-5"
              boxWidth="w-[250px]"
              imageHeight="h-[150px]"
              itemsPerPage={12}
              items={data}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;