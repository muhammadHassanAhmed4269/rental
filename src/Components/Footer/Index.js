import React from "react";

const Index = () => {
  return (
    <div className="bg-[#4CAF50] w-full h-[40vh] text-white">
      <div className="flex items-center h-full ml-16">
        <div className="flex items-center w-80 justify-between">
          <div>
            <h1 className="text-xl mb-3">Account</h1>
            <p className="mt-2">My Account </p>
            <p className="mt-2">Login / Signup </p>
            <p className="mt-2">Cart</p>
            <p className="mt-2">Wishlist</p>
          </div>
          <div>
            <h1 className="text-xl mb-3">Quick Link</h1>
            <p className="mt-2">Privacy Policy </p>
            <p className="mt-2">Terms Of Use </p>
            <p className="mt-2">FAQ</p>
            <p className="mt-2">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
