import React, { useState } from "react";
import Navbar from "../../Components/Navbar/index";
import CategoryBanner from "../../Assets/CategoryBanner.png";
import CategoryCard from "../../Components/CategoryCard/Index";
import ProfileRentalCard from "../../Components/ProfileRentalCard/Index";
import Footer from "../../Components/Footer/Index";
import { Link } from "react-router-dom";
const Index = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <Navbar />

      <div className="w-11/12 mx-auto mt-6">
        <div className="mb-32">
          <div className="relative buttonShadow rounded-2xl p-12 mt-48 mb-20 w-[350px] mx-auto">
            <img
              className="w-[250px] h-[250px] object-cover object-center rounded-full absolute top-[-50%] left-[50%] translate-x-[-50%] border border-gray-200"
              src={CategoryBanner}
              alt="Card "
            />
            <div className="text-center pt-20">
              <button class="w-[95%] py-3 rounded-full text-base text-gray-400 bg-[#D9D9D9] font-medium mb-6 mx-auto">
                Edit Profile{" "}
              </button>
              <button class="w-[95%] py-3 rounded-full text-base text-gray-400 bg-[#D9D9D9] font-semibold mx-auto">
                Change Password{" "}
              </button>
            </div>
          </div>
          <div className="buttonShadow lg:p-20 md:p-12 p-6">
            <h2 className="text-center font-semibold text-4xl mb-8">Mark Robin</h2>
            <p className=' text-center text-lg mb-10 lg:w-[60%] md:w-[90%] w-full mx-auto'>
              “Renting a camera from Louis Max was like stepping into a portal to photographic paradise.
              From the moment I messaged them, I felt like I was talking to a fellow shutterbug,
              not just a random renter. They knew exactly what I needed, recommended the perfect lens
              for my wildlife adventure, and even threw in a couple of handy filters for good measure.” - Angela
            </p>

            <div className="profileTabs">
              <div className="tab-buttons">
                {[0, 1].map((index) => (
                  <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={index === activeTab ? 'active' : ''}
                  >
                    {index === 0 ? 'My Rentals' : 'My items'}
                  </button>
                ))}
              </div>

              <div className="tab-content">
                <div style={{ display: activeTab === 0 ? 'block' : 'none' }}>
                  {/* IF NO ITEMS TO SHOW */}
                  <div className="text-center mb-12">
                    <h3 className="text-center font-bold text-xl mb-4">You have no Items listed yet</h3>
                    <p className=' text-center text-lg mb-6'>
                      List your items and unlock earning opportunities
                    </p>
                  </div>

                  <div className="grid grid-cols-12 gap-6">
                    <div className="lg:col-span-4 md:col-span-6 col-span-12">
                      <CategoryCard />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-12">
                      <CategoryCard />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-12">
                      <CategoryCard />
                    </div>
                  </div>
                </div>
                <div style={{ display: activeTab === 1 ? 'block' : 'none' }}>
                  {/* IF NO ITEMS TO SHOW */}
                  <div className="text-center mb-12">
                    <h3 className="text-center font-bold text-xl mb-4">You have no Items listed yet</h3>
                    <p className=' text-center text-lg mb-6'>
                      List your items and unlock earning opportunities
                    </p>
                  </div>

                  <div className="grid grid-cols-12 gap-6">
                    <div className="lg:col-span-4 md:col-span-6 col-span-12">
                      <ProfileRentalCard />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-12">
                      <ProfileRentalCard />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-12">
                      <ProfileRentalCard />
                    </div>
                  </div>
                </div>
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
