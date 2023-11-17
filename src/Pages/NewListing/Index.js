import React, { useState } from "react";
import Navbar from "../../Components/Navbar/index";
const Index = () => {
  const [images, setImages] = useState([]);
  const [mainImageIndex, setMainImageIndex] = useState(-1);

  const handleImageChange = (e) => {
    const newImages = [...images];
    for (let i = 0; i < e.target.files.length; i++) {
      const imageUrl = URL.createObjectURL(e.target.files[i]);
      newImages.push({
        url: imageUrl,
        isMain: mainImageIndex === -1 ? false : false,
      });
    }
    setImages(newImages);
  };

  const handleSetAsMain = (index) => {
    setMainImageIndex(index);
    const updatedImages = images.map((image, i) => ({
      ...image,
      isMain: i === index,
    }));
    setImages(updatedImages);
  };
  const handleQuantityChange = (newValue) => {
    // Update the state or perform any other necessary actions based on the new value.
    // For example, set it to a component's state or use it for further processing.
    console.log("New quantity value: " + newValue);
  };
  return (
    <div>
      <Navbar />
      <div className="w-11/12 mx-auto mt-4 bg-[#697eb5] p-4">
        <div className="">
          <div className="flex flex-col items-center">
            {mainImageIndex !== -1 && (
              <img
                src={images[mainImageIndex].url}
                alt="Main"
                className="w-80  h-40 rounded-lg mb-4"
              />
            )}

            <div className="flex space-x-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => handleSetAsMain(index)}
                  className={`w-20 h-20 cursor-pointer ${
                    mainImageIndex === index ? "border-4 border-blue-500" : ""
                  }`}
                >
                  <img
                    src={image.url}
                    alt={`Images ${index + 1}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                  {!image.isMain && (
                    <div className="text-sm text-center mt-2">Set as Main</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* File input for uploading images */}
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <div className="w-3/4 mx-auto">
          <div class="w-full h-6 mb-4  mt-8 ">
            <div class="mb-1">
              <label for="category" class="font-bold">
                Category
              </label>
            </div>
            <select
              id="category"
              name="category"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            >
              <option value="" disabled selected>
                Select Category
              </option>
            </select>
          </div>

          <div class="w-full h-6 mt-16 ">
            <div class="mb-1">
              <label for="title" class="font-bold">
                Title (40 char max)
              </label>
            </div>
            <input
              type="text"
              id="title"
              name="title"
              maxlength="40"
              placeholder="Title (40 char max)"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div class="w-full h-24 mt-16 ">
            <div class="mb-1">
              <label for="description" class="font-bold">
                Description
              </label>
            </div>
            <textarea
              id="description"
              name="description"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              rows="3"
            ></textarea>
          </div>
          <div class="w-1/4 h-6 mt-4 ">
            <div class="mb-1">
              <label for="Postalcode" class="font-bold">
                Postal Code
              </label>
            </div>
            <input
              type="text"
              id="Postalcode"
              name="Postalcode"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <p class="w-1/4 h-6 mt-14 ">Rental price () per:</p>
          <div className="flex w-3/5 justify-between">
            <div>
              <p>Day</p>
              <p className="w-32 h-6 bg-white rounded-lg pl-2">$10</p>
            </div>
            <div>
              <p>week</p>
              <p className="w-32 h-6 bg-white rounded-lg pl-2">$20</p>
            </div>
            <div>
              <p>month</p>
              <p className="w-32 h-6 bg-white rounded-lg pl-2">$30</p>
            </div>
          </div>
          <div className="flex w-2/5 justify-between">
            <div>
              <div>
                <p>Item Value</p>
                <p className="w-32 h-6 bg-white rounded-lg pl-2">$10</p>
              </div>
              <div class="mb-1">
                <p>Quantity</p>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  class="w-32 h-6 border border-gray-300 rounded-lg pl-2 text-sm"
                  min="1"
                  defaultValue="1"
                  onChange={(e) => handleQuantityChange(e.target.value)}
                />
              </div>
            </div>
            <div class="mt-7">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="delivery"
                  name="deliveryOption"
                  value="delivery"
                  class="mr-2 w-5 h-5"
                />
                <p for="delivery" class="mr-4">
                  Delivery Available
                </p>
              </div>
              <div className="flex items-center mt-6">
                <input
                  type="radio"
                  id="collection"
                  name="deliveryOption"
                  value="collection"
                  class="mr-2  w-5 h-5 "
                />
                <p>Collection Only</p>
              </div>
            </div>
          </div>
          <div>
            <p>Minimum rental days</p>
            <p className="w-32 h-6 bg-white rounded-lg pl-2">1</p>
          </div>
          <div className="flex w-full justify-end">
            <button class="w-56 h-11 rounded-xl bg-blue-700 text-white font-bold mr-5">
              Cancel
            </button>
            <button class="w-56 h-11 rounded-xl bg-blue-700 text-white font-bold">
              List New Items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
