import React from "react";
import Backgroundimg from "../../Assets/signupBackground.png";
import Laptopimg from "../../Assets/signupLaptop.png";
import Fblogo from "../../Assets/fbLogo.png";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <div
      className="relative "
      style={{
        backgroundImage: `url(${Backgroundimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between w-11/12 mx-auto h-screen items-center ">
        <div>
          <img
            src={Laptopimg}
            alt="Laptop"
            className="w-[586px] h-[416px] mx-auto mb-4"
          />
        </div>
        <div class="rounded-[40px] flex flex-col items-center bg-gradient-box shadow-box w-[700px] h-[650px]  p-8">
          <h1 class="text-[42px] text-white font-bold mb-4">Welcome </h1>
          <p class="text-white  mb-6">
            login to Rental Mate or{" "}
            <span className="text-[#1976D2]">
              <Link to={"/Signup"}>create an account</Link>{" "}
            </span>
          </p>
          <div class="relative mt-5 flex items-center  rounded-2xl bg-[#d9d9d9] bg-opacity-60 h-[52px] w-[437px]">
            <input
              type="email"
              placeholder="Email Address or Phone Number"
              class="w-full py-2 pl-12 pr-4 text-gray-700 bg-transparent placeholder-gray-400 border-none focus:outline-none"
            />
            <div class="absolute left-3 top-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="24"
                viewBox="0 0 28 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.375 5.25L3.5 6V18L4.375 18.75H23.625L24.5 18V6L23.625 5.25H4.375ZM5.25 7.6955V17.25H22.75V7.69525L13.9999 14.5136L5.25 7.6955ZM21.3615 6.75H6.63817L13.9999 12.4864L21.3615 6.75Z"
                  fill="black"
                  fill-opacity="0.25"
                />
              </svg>
            </div>
          </div>
          <div class="relative flex mt-5 items-center  rounded-2xl bg-[#d9d9d9] bg-opacity-60 h-[52px] w-[437px]">
            <input
              type="password"
              placeholder="Password"
              class="w-full py-2 pl-12 pr-4 text-gray-700 bg-transparent placeholder-gray-400 border-none focus:outline-none"
            />
            <div class="absolute left-3 top-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="24"
                viewBox="0 0 30 24"
                fill="none"
              >
                <path
                  d="M7.81319 10V9C7.81319 5.68629 11.0382 3 15.0165 3C18.9947 3 22.2198 5.68629 22.2198 9V10H24.6209C25.2839 10 25.8214 10.4477 25.8214 11V23C25.8214 23.5523 25.2839 24 24.6209 24H5.41209C4.74905 24 4.21154 23.5523 4.21154 23V11C4.21154 10.4477 4.74905 10 5.41209 10H7.81319ZM23.4203 12H6.61264V22H23.4203V12ZM13.8159 17.7324C13.0982 17.3866 12.6154 16.7403 12.6154 16C12.6154 14.8954 13.6904 14 15.0165 14C16.3426 14 17.4176 14.8954 17.4176 16C17.4176 16.7403 16.9347 17.3866 16.217 17.7324V20H13.8159V17.7324ZM10.2143 10H19.8187V9C19.8187 6.79086 17.6686 5 15.0165 5C12.3643 5 10.2143 6.79086 10.2143 9V10Z"
                  fill="black"
                  fill-opacity="0.25"
                />
              </svg>
            </div>
            <div class="absolute right-3 top-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="24"
                viewBox="0 0 27 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.2664 1.32871C20.9078 1.13678 20.4493 1.25068 20.2423 1.58311L17.9494 5.26605C16.3872 4.59728 14.7702 4.25533 13.1333 4.25533C8.73514 4.25533 4.48047 6.7255 1.04953 11.3692L1.03592 11.3875L1.02402 11.4032C0.909734 11.5529 0.906816 11.7289 1.02344 11.8768C3.55517 15.3164 6.53848 17.569 9.69792 18.5158L7.87138 21.4476C7.66432 21.7801 7.78719 22.2051 8.14577 22.397L8.47042 22.5708C8.829 22.7627 9.28751 22.6489 9.49456 22.3164L21.8654 2.45191C22.0725 2.11948 21.9497 1.69442 21.591 1.50248L21.2664 1.32871ZM16.9548 6.86317C15.6834 6.35119 14.3996 6.10164 13.1333 6.10164C9.93764 6.10164 6.62949 7.69122 3.69147 11.0776C3.40943 11.4027 3.40943 11.8766 3.69147 12.2018C5.89379 14.7403 8.30403 16.2695 10.719 16.8763L11.9818 14.8484C10.5393 14.4276 9.34643 13.2537 9.34643 11.6415C9.34643 9.60221 11.0554 7.94885 13.1631 7.94885C14.136 7.94885 15.024 8.30114 15.6982 8.88101L16.9548 6.86317ZM14.656 10.5546C14.3313 10.0943 13.7976 9.79515 13.1631 9.79515C12.1083 9.79515 11.2457 10.6205 11.2457 11.6402C11.2457 12.314 12.0359 13.1015 13.0285 13.1678L14.656 10.5546Z"
                  fill="black"
                  fill-opacity="0.25"
                />
                <path
                  d="M13.7641 19.0081C17.9286 18.7841 21.9344 16.3446 25.1964 11.9408C25.2647 11.8486 25.3029 11.7532 25.3029 11.6397C25.3029 11.5315 25.2701 11.4412 25.205 11.3533C23.9514 9.658 22.5875 8.25327 21.1468 7.15332L20.1542 8.74729C20.9814 9.3988 21.7915 10.1743 22.5752 11.0776C22.8573 11.4027 22.8573 11.8766 22.5752 12.2017C20.2119 14.9258 17.6092 16.4877 15.0181 16.9945L13.7641 19.0081Z"
                  fill="black"
                  fill-opacity="0.25"
                />
              </svg>
            </div>
          </div>
          <p className="text-left h-[22px] text-white mt-5 w-[437px]">
            Forget Password?
          </p>
          <div className="flex justify-between items-center w-[387px] mt-12">
            <button class="w-[220px] h-[45px] rounded-3xl bg-[#0B2F8A] text-white">
              Login
            </button>
            <p className="text-white">Or</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              className="bg-white w-[35px] rounded-xl h-[35px]"
            >
              <path
                d="M32.7083 15.0623H31.5V15H18V21H26.4773C25.2405 24.4928 21.9172 27 18 27C13.0297 27 9 22.9702 9 18C9 13.0297 13.0297 9 18 9C20.2943 9 22.3815 9.8655 23.9708 11.2792L28.2135 7.0365C25.5345 4.53975 21.951 3 18 3C9.71625 3 3 9.71625 3 18C3 26.2838 9.71625 33 18 33C26.2838 33 33 26.2838 33 18C33 16.9943 32.8965 16.0125 32.7083 15.0623Z"
                fill="#FFC107"
              />
              <path
                d="M4.72949 11.0182L9.65774 14.6325C10.9912 11.331 14.2207 9 18 9C20.2942 9 22.3815 9.8655 23.9707 11.2792L28.2135 7.0365C25.5345 4.53975 21.951 3 18 3C12.2385 3 7.24199 6.25275 4.72949 11.0182Z"
                fill="#FF3D00"
              />
              <path
                d="M18 33C21.8745 33 25.395 31.5172 28.0567 29.106L23.4142 25.1775C21.9082 26.3182 20.0362 27 18 27C14.0985 27 10.7857 24.5122 9.53774 21.0405L4.64624 24.8092C7.12874 29.667 12.1702 33 18 33Z"
                fill="#4CAF50"
              />
              <path
                d="M32.7083 15.0623H31.5V15H18V21H26.4773C25.8833 22.6778 24.804 24.1245 23.412 25.1782C23.4127 25.1775 23.4135 25.1775 23.4142 25.1768L28.0568 29.1052C27.7283 29.4037 33 25.5 33 18C33 16.9943 32.8965 16.0125 32.7083 15.0623Z"
                fill="#1976D2"
              />
            </svg>
            <img className="w-[50px] h-[50px]" src={Fblogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
