import React, { useState } from 'react';
import Navbar from "../../Components/Navbar/index";
import CategoryBanner from "../../Assets/product-img-1.jpg";
import CategoryCard from "../../Components/CategoryCard/Index";
import Footer from "../../Components/Footer/Index";


const Index = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };
  return (

    <div>
      <Navbar />
      <div className="w-11/12 mx-auto mt-6 pb-36">
        <div className="my-16">
          <ul className="productDetailBread text-grayBr inline-block font-medium">
            <li className="inline-block">Film and Photograph</li>
            <li className="inline-block px-2">/</li>
            <li className="inline-block">Camera</li>
            <li className="inline-block px-2" >/</li>
            <li className="inline-block">SONY high resolution camera-92</li>
          </ul>
        </div>
        <div>

        </div>
        <div className="mb-10">
          <div className="grid grid-cols-12 gap-x-10">
            <div className="lg:col-span-7 col-span-12">
              <div className='flex gap-x-6 h-[600px]'>
                <div className='md:w-[20%] w-full overflow-hidden flex flex-col gap-y-4'>
                  <img
                    className="w-full h-[170px] object-cover object-center rounded-xl"
                    src={CategoryBanner}
                    alt="Card "
                  />
                  <img
                    className="w-full h-[170px] object-cover object-center rounded-xl"
                    src={CategoryBanner}
                    alt="Card "
                  />
                  <img
                    className="w-full h-[170px] object-cover object-center rounded-xl"
                    src={CategoryBanner}
                    alt="Card "
                  />
                  <img
                    className="w-full h-[170px] object-cover object-center rounded-xl"
                    src={CategoryBanner}
                    alt="Card "
                  />
                </div>
                <div className='md:w-[80%] w-full'>
                  <img
                    className="w-full h-[600px] object-cover object-center rounded-xl"
                    src={CategoryBanner}
                    alt="Card "
                  />
                </div>
              </div>

            </div>
            <div className="lg:col-span-5 col-span-12">
              <div>
                <h1 className='font-semibold text-2xl mb-4'>SONY high resolution camera-92</h1>
                <p className='text-lg mb-6'>
                  The Sony Alpha 7 IV is a great all-around camera that is perfect for photographers and videographers of all levels.
                </p>
                <div className="flex gap-4">
                  <div className='bg-primaryLig rounded-2xl text-center p-3'>
                    <h3 className='font-semibold'>Daily</h3>
                    <h4>$5.02/day</h4>
                  </div>
                  <div className='bg-primaryLig rounded-2xl text-center p-3'>
                    <h3 className='font-semibold'>Hourly</h3>
                    <h4>$5.02/day</h4>
                  </div>
                  <div className="flex items-center ml-2">
                    <div>
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={`cursor-pointer text-2xl ${index < rating ? "text-yellow-500" : "text-gray-300"
                            }`}
                          onClick={() => handleStarClick(index)}
                        >
                          &#9733;
                        </span>
                      ))}
                    </div>
                    <p className='text-grayBr pl-3'>(150 Reviews)</p>
                  </div>
                </div>
                <hr className='my-6'></hr>
                <div className='flex gap-x-10 px-8 py-4 border-grayHead rounded-xl border-[2px] mb-6'>
                  <h2 className='font-bold text-lg'>Select rental hours</h2>
                  <h3 className='font-medium text-lg'>10:00-12:00</h3>
                </div>
                <div className='flex gap-x-10 px-8 py-4 border-grayHead rounded-xl border-[2px] mb-6'>
                  <h2 className='font-bold text-lg'>Select rental dates</h2>
                  <h3 className='font-medium text-lg'>Nov 30-Dec 01</h3>
                </div>
                <div className='flex gap-x-6 mb-6'>
                  <button className='w-full py-4 bg-primary rounded-lg text-center font-bold text-white text-xl'>Add to Cart</button>
                  <button className='p-4 bg-transparent border border-grayHead rounded-lg text-center font-bold text-white text-xl'>
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
                <div className='mb-6'>
                  <h2 className='text-2xl font-bold mb-4'>Owner of the item</h2>
                  <div className='flex gap-x-4'>
                    <img
                      className="w-[60px] h-[60px] object-cover object-center rounded-full"
                      src={CategoryBanner}
                      alt="Card "
                    />
                    <div>
                      <h3 className='font-medium text-lg'>Louis max</h3>
                      <div className="flex items-center">
                        <div>
                          {[...Array(5)].map((_, index) => (
                            <span
                              key={index}
                              className={`cursor-pointer text-2xl ${index < rating ? "text-yellow-500" : "text-gray-300"
                                }`}
                              onClick={() => handleStarClick(index)}
                            >
                              &#9733;
                            </span>
                          ))}
                        </div>
                        <div className='flex gap-x-2 pl-2 text-grayBr'>
                          <p>(34)</p>
                          <p>(London)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex md:flex-row flex-col gap-6'>
                  <a href='#' className='bg-primaryLig py-3 text-center w-full rounded-xl font-medium text-lg'>View Profile</a>
                  <a href='#' className='bg-primaryLig py-3 text-center w-full rounded-xl font-medium text-lg'>Chat with renter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center my-16">
          <div className="text-2xl font-medium flex items-center">
            <div className="w-[15px] h-[30px] bg-primary rounded-sm block mr-2"></div>
            <div className="font-semibold">Other items by owner</div>
          </div>
          <div className="">
            <button class="px-12 h-11 rounded-xl bg-primaryLig border border-grayBr text-black font-semibold">
              View all listings by the owner {""}
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
        <div className='grid grid-cols-12 gap-12 md:mt-32 mt-16'>
          <div className='lg:col-span-6 col-span-12'>
            <div>
              <div className='flex justify-between items-start'>
                <div className='flex gap-x-4'>
                  <img
                    className="w-[60px] h-[60px] object-cover object-center rounded-full"
                    src={CategoryBanner}
                    alt="Card "
                  />
                  <div>
                    <h3 className='font-medium text-lg'>Louis max</h3>
                    <div className="flex items-center">
                      <div>
                        {[...Array(5)].map((_, index) => (
                          <span
                            key={index}
                            className={`cursor-pointer text-2xl ${index < rating ? "text-yellow-500" : "text-gray-300"
                              }`}
                            onClick={() => handleStarClick(index)}
                          >
                            &#9733;
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className='text-lg font-medium'>22-12-2023</h3>
              </div>
              <p className='text-lg mt-2'>
                “Renting a camera from Louis Max was like stepping into a portal to photographic paradise. From the moment I messaged them, I felt like I was talking to a fellow shutterbug, not just a random renter. They knew exactly what I needed, recommended the perfect lens for my wildlife adventure, and even threw in a couple of handy filters for good measure.” - Angela
              </p>
            </div>
          </div>
          <div className='lg:col-span-6 col-span-12'>
            <div>
              <div className='flex justify-between items-start'>
                <div className='flex gap-x-4'>
                  <img
                    className="w-[60px] h-[60px] object-cover object-center rounded-full"
                    src={CategoryBanner}
                    alt="Card "
                  />
                  <div>
                    <h3 className='font-medium text-lg'>Louis max</h3>
                    <div className="flex items-center">
                      <div>
                        {[...Array(5)].map((_, index) => (
                          <span
                            key={index}
                            className={`cursor-pointer text-2xl ${index < rating ? "text-yellow-500" : "text-gray-300"
                              }`}
                            onClick={() => handleStarClick(index)}
                          >
                            &#9733;
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className='text-lg font-medium'>22-12-2023</h3>
              </div>
              <p className='text-lg mt-2'>
                “Renting a camera from Louis Max was like stepping into a portal to photographic paradise. From the moment I messaged them, I felt like I was talking to a fellow shutterbug, not just a random renter. They knew exactly what I needed, recommended the perfect lens for my wildlife adventure, and even threw in a couple of handy filters for good measure.” - Angela
              </p>
            </div>
          </div>
          <div className='lg:col-span-6 col-span-12'>
            <div>
              <div className='flex justify-between items-start'>
                <div className='flex gap-x-4'>
                  <img
                    className="w-[60px] h-[60px] object-cover object-center rounded-full"
                    src={CategoryBanner}
                    alt="Card "
                  />
                  <div>
                    <h3 className='font-medium text-lg'>Louis max</h3>
                    <div className="flex items-center">
                      <div>
                        {[...Array(5)].map((_, index) => (
                          <span
                            key={index}
                            className={`cursor-pointer text-2xl ${index < rating ? "text-yellow-500" : "text-gray-300"
                              }`}
                            onClick={() => handleStarClick(index)}
                          >
                            &#9733;
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className='text-lg font-medium'>22-12-2023</h3>
              </div>
              <p className='text-lg mt-2'>
                “Renting a camera from Louis Max was like stepping into a portal to photographic paradise. From the moment I messaged them, I felt like I was talking to a fellow shutterbug, not just a random renter. They knew exactly what I needed, recommended the perfect lens for my wildlife adventure, and even threw in a couple of handy filters for good measure.” - Angela
              </p>
            </div>
          </div>
          <div className='lg:col-span-6 col-span-12'>
            <div>
              <div className='flex justify-between items-start'>
                <div className='flex gap-x-4'>
                  <img
                    className="w-[60px] h-[60px] object-cover object-center rounded-full"
                    src={CategoryBanner}
                    alt="Card "
                  />
                  <div>
                    <h3 className='font-medium text-lg'>Louis max</h3>
                    <div className="flex items-center">
                      <div>
                        {[...Array(5)].map((_, index) => (
                          <span
                            key={index}
                            className={`cursor-pointer text-2xl ${index < rating ? "text-yellow-500" : "text-gray-300"
                              }`}
                            onClick={() => handleStarClick(index)}
                          >
                            &#9733;
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className='text-lg font-medium'>22-12-2023</h3>
              </div>
              <p className='text-lg mt-2'>
                “Renting a camera from Louis Max was like stepping into a portal to photographic paradise. From the moment I messaged them, I felt like I was talking to a fellow shutterbug, not just a random renter. They knew exactly what I needed, recommended the perfect lens for my wildlife adventure, and even threw in a couple of handy filters for good measure.” - Angela
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
