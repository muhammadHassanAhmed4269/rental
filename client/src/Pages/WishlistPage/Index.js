import React from "react";
import Navbar from "../../Components/Navbar/index";
// import CategoryBanner from "../../Assets/CategoryBanner.png";
import CategoryCard from "../../Components/CategoryCard/Index";
import WishlistCard from "../../Components/WishlistCard/Index";
import Footer from "../../Components/Footer/Index";
// import { Link } from "react-router-dom";
const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="w-11/12 mx-auto mt-6 pb-36">
        <div className="text-3xl font-bold text-grayHead text-center mt-14">
          Wishlist
        </div>
        <div className="flex justify-between items-center my-12">
          <div className="text-2xl font-semibold">
            Wishlist (4)
          </div>
          <div className="">
            <button class="w-56 h-11 rounded-xl bg-primaryLig border border-grayBr text-black font-semibold">
              Move All To Cart{" "}
            </button>
          </div>
        </div>
        <div className="mb-10">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6">
            <div className="">
              <WishlistCard />
            </div>
            <div className="">
              <WishlistCard />
            </div>
            <div className="">
              <WishlistCard />
            </div>
            <div className="">
              <WishlistCard />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center my-16">
          <div className="text-2xl font-medium flex items-center">
            <div className="w-[15px] h-[30px] bg-primary rounded-sm block mr-2"></div>
            <div className="font-">Move to Rent</div>
          </div>
          <div className="">
            <button class="px-12 h-11 rounded-xl bg-primaryLig border border-grayBr text-black font-semibold">
              See All{""}
            </button>
          </div>
        </div>
        <div className="mb-10">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6">
            <div className="">
              <CategoryCard />
            </div>
            <div className="">
              <CategoryCard />
            </div>
            <div className="">
              <CategoryCard />
            </div>
            <div className="">
              <CategoryCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
