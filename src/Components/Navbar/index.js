import React, { useState } from "react";
import Usa from "../../Assets/Usa.png";
import German from "../../Assets/german.png";
import Spanish from "../../Assets/spanish.png";
import Bengali from "../../Assets/bangladesh.png";
import French from "../../Assets/french.png";
import { Link } from "react-router-dom";

const Index = () => {
  const languageOptions = [
    { value: "en", label: "English", flag: Usa },
    { value: "de", label: "German", flag: German },
    { value: "fr", label: "French", flag: French },
    { value: "es", label: "Spanish", flag: Spanish },
    { value: "bn", label: "Bengali", flag: Bengali },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (selectedValue) => {
    const languageObject = languageOptions.find(
      (option) => option.value === selectedValue
    );
    setSelectedLanguage(languageObject);
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <div className="bg-green-600">
        <div className=" h-24 flex items-center ">
          <div className="flex items-center">
            <div
              className="text-white text-lg font-bold mr-4 flex justify-center items-center"
              style={{ width: "158px", height: "79px" }}
            >
              Logo
            </div>
            <div className="w-[572px] relative h-12 flex items-center bg-white p-2">
              <input
                className="w-full h-12 bg-transparent outline-none placeholder-black pl-12"
                type="text"
                placeholder="Search rental mate for anything"
              />

              <i className="material-icons w-8 h-8 absolute left-4 top-7 transform -translate-y-2/4">
                search
              </i>
            </div>
          </div>

          <div className="flex ml-8">
            <div className="flex items-center">
              <Link to={"/"} className="text-white text-lg mr-4">
                Home
              </Link>
              <Link to={"/About"} className="text-white text-lg mr-4 ml-16">
                About
              </Link>
              {/* <div className="text-white text-lg mr-4">
            Account
            <i className="fa fa-caret-down ml-1"></i>
          </div> */}
              <Link to={"/Signup"} className="text-white text-lg ml-10">
                Signup
              </Link>
            </div>

            <div className="flex items-center ml-8 justify-between w-[340px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M25 13C25 10.6131 24.0518 8.32387 22.364 6.63604C20.6761 4.94821 18.3869 4 16 4C13.6131 4 11.3239 4.94821 9.63604 6.63604C7.94821 8.32387 7 10.6131 7 13C7 16.692 9.954 21.504 16 27.268C22.046 21.504 25 16.692 25 13ZM16 30C8.666 23.334 5 17.666 5 13C5 10.0826 6.15893 7.28473 8.22183 5.22183C10.2847 3.15893 13.0826 2 16 2C18.9174 2 21.7153 3.15893 23.7782 5.22183C25.8411 7.28473 27 10.0826 27 13C27 17.666 23.334 23.334 16 30Z"
                  fill="white"
                />
                <path
                  d="M25 13C25 10.6131 24.0518 8.32387 22.364 6.63604C20.6761 4.94821 18.3869 4 16 4C13.6131 4 11.3239 4.94821 9.63604 6.63604C7.94821 8.32387 7 10.6131 7 13C7 16.692 9.954 21.504 16 27.268C22.046 21.504 25 16.692 25 13ZM16 30C8.666 23.334 5 17.666 5 13C5 10.0826 6.15893 7.28473 8.22183 5.22183C10.2847 3.15893 13.0826 2 16 2C18.9174 2 21.7153 3.15893 23.7782 5.22183C25.8411 7.28473 27 10.0826 27 13C27 17.666 23.334 23.334 16 30Z"
                  stroke="white"
                />
                <path
                  d="M16 16C16.7956 16 17.5587 15.6839 18.1213 15.1213C18.6839 14.5587 19 13.7956 19 13C19 12.2044 18.6839 11.4413 18.1213 10.8787C17.5587 10.3161 16.7956 10 16 10C15.2044 10 14.4413 10.3161 13.8787 10.8787C13.3161 11.4413 13 12.2044 13 13C13 13.7956 13.3161 14.5587 13.8787 15.1213C14.4413 15.6839 15.2044 16 16 16ZM16 18C14.6739 18 13.4021 17.4732 12.4645 16.5355C11.5268 15.5979 11 14.3261 11 13C11 11.6739 11.5268 10.4021 12.4645 9.46447C13.4021 8.52678 14.6739 8 16 8C17.3261 8 18.5979 8.52678 19.5355 9.46447C20.4732 10.4021 21 11.6739 21 13C21 14.3261 20.4732 15.5979 19.5355 16.5355C18.5979 17.4732 17.3261 18 16 18Z"
                  fill="white"
                />
                <path
                  d="M16 16C16.7956 16 17.5587 15.6839 18.1213 15.1213C18.6839 14.5587 19 13.7956 19 13C19 12.2044 18.6839 11.4413 18.1213 10.8787C17.5587 10.3161 16.7956 10 16 10C15.2044 10 14.4413 10.3161 13.8787 10.8787C13.3161 11.4413 13 12.2044 13 13C13 13.7956 13.3161 14.5587 13.8787 15.1213C14.4413 15.6839 15.2044 16 16 16ZM16 18C14.6739 18 13.4021 17.4732 12.4645 16.5355C11.5268 15.5979 11 14.3261 11 13C11 11.6739 11.5268 10.4021 12.4645 9.46447C13.4021 8.52678 14.6739 8 16 8C17.3261 8 18.5979 8.52678 19.5355 9.46447C20.4732 10.4021 21 11.6739 21 13C21 14.3261 20.4732 15.5979 19.5355 16.5355C18.5979 17.4732 17.3261 18 16 18Z"
                  stroke="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M13.5 29C13.1022 29 12.7206 28.842 12.4393 28.5607C12.158 28.2794 12 27.8978 12 27.5C12 27.1022 12.158 26.7206 12.4393 26.4393C12.7206 26.158 13.1022 26 13.5 26C13.8978 26 14.2794 26.158 14.5607 26.4393C14.842 26.7206 15 27.1022 15 27.5C15 27.8978 14.842 28.2794 14.5607 28.5607C14.2794 28.842 13.8978 29 13.5 29ZM23.5 29C23.1022 29 22.7206 28.842 22.4393 28.5607C22.158 28.2794 22 27.8978 22 27.5C22 27.1022 22.158 26.7206 22.4393 26.4393C22.7206 26.158 23.1022 26 23.5 26C23.8978 26 24.2794 26.158 24.5607 26.4393C24.842 26.7206 25 27.1022 25 27.5C25 27.8978 24.842 28.2794 24.5607 28.5607C24.2794 28.842 23.8978 29 23.5 29ZM3 4C2.73478 4 2.48043 3.89464 2.29289 3.70711C2.10536 3.51957 2 3.26522 2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H8C8.23109 2.00014 8.455 2.08031 8.63366 2.22689C8.81232 2.37346 8.93471 2.57739 8.98 2.804L10.02 8H29C29.1492 7.99996 29.2965 8.03329 29.4311 8.09755C29.5657 8.16181 29.6843 8.25538 29.778 8.37139C29.8718 8.48741 29.9384 8.62293 29.973 8.76804C30.0076 8.91314 30.0093 9.06415 29.978 9.21L26.978 23.21C26.93 23.4337 26.8067 23.6341 26.6287 23.7779C26.4507 23.9217 26.2288 24.0001 26 24H12C11.7689 23.9999 11.545 23.9197 11.3663 23.7731C11.1877 23.6265 11.0653 23.4226 11.02 23.196L7.18 4H3ZM12.82 22H25.192L27.764 10H10.42L12.82 22Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="w-8 h-8 cursor-pointer group-hover:fill-current group-hover:text-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M4.52998 12.5C3.83998 8.64998 6.38998 5.31498 10.365 4.99998C13.865 4.72498 15.6 8.96498 15.95 9.77498C15.9539 9.78856 15.9621 9.80051 15.9733 9.80902C15.9846 9.81752 15.9984 9.82213 16.0125 9.82213C16.0266 9.82213 16.0404 9.81752 16.0516 9.80902C16.0629 9.80051 16.0711 9.78856 16.075 9.77498C17.7 5.31998 20.66 5.12998 21.7 5.02498C24.5 4.72498 28.255 6.88998 27.5 11.935C26.42 18.935 15.94 26.84 15.94 26.84C15.94 26.84 5.89498 20.025 4.52998 12.5Z"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
              </svg>
              <div className="custom-select inline-block relative">
                <div
                  className={`select-header flex items-center ${isDropdownOpen ? "open" : ""
                    }`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <img
                    className="w-7 h-7 rounded-full"
                    src={selectedLanguage.flag}
                    alt={selectedLanguage.value}
                  />
                  <span className="text-white">{selectedLanguage.label}</span>
                </div>
                {isDropdownOpen && (
                  <ul className="select-options absolute mt-2 left-0 w-32 border bg-white rounded-lg shadow-md">
                    {languageOptions.map((option) => (
                      <li
                        key={option.value}
                        onClick={() => handleLanguageChange(option.value)}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto w-3/4 bg-white mt-3">
        <nav class="">
          <ul class="flex  justify-between">
            <li>
              <Link
                to={"/Categories"}
                class="py-2 px-4 text-black font-semibold "
              >
                Electronics
              </Link>
            </li>
            <li>
              <Link
                to={"/Categories"}
                class="py-2 px-4 text-black font-semibold"
              >
                Home and Garden
              </Link>
            </li>
            <li>
              <Link
                to={"/Categories"}
                class="py-2 px-4 text-black font-semibold"
              >
                Party
              </Link>
            </li>
            <li>
              <Link
                to={"/Categories"}
                class="py-2 px-4 text-black font-semibold"
              >
                Film and Photography
              </Link>
            </li>
            <li>
              <Link
                to={"/Categories"}
                class="py-2 px-4 text-black font-semibold"
              >
                Sports and Leisure
              </Link>
            </li>
            <li>
              <Link
                to={"/Categories"}
                class="py-2 px-4 text-black font-semibold"
              >
                Construction Tools
              </Link>
            </li>
            <li>
              <Link
                to={"/Categories"}
                class="py-2 px-4 text-black font-semibold"
              >
                Other
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Index;
