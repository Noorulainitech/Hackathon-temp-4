import React from "react";
import Link from "next/link";
import Image from "next/image";

const OrderCompletedHeader = () => {
  return (
    <div className="w-full bg-[#F6F5FF] py-10 px-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center md:text-left">
          Order Completed
        </h1>

        {/* Breadcrumb */}
        <p className="text-gray-600 text-sm text-center md:text-left">
          <Link href="#" className="text-gray-500 hover:underline">
            Home
          </Link>{" "}
          <span className="text-gray-500">,</span>{" "}
          <span>Pages</span>{" "}
          <Link href="#" className="text-pink-500 font-medium hover:underline">
            Order Completed
          </Link>
        </p>
      </div>
    </div>
  );
};

const OrderCompleted = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-white-50 min-h-screen flex flex-col justify-center items-center relative">
        {/* Clock Icon */}
        <div className="absolute top-4 left-4 sm:top-10 sm:left-10 bg-white p-2 rounded-full shadow-lg z-10">
          <Image
            src="/images/clock-icon.png"
            alt="Clock Icon"
            width={100}
            height={100}
            className="w-12 h-12 sm:w-24 sm:h-24"
          />
        </div>

        {/* Dotted Line */}
        <div className="absolute top-[70px] sm:top-[130px] left-[50px] sm:left-[65px] w-[2px] h-[calc(100vh-200px)] sm:h-[calc(100vh-250px)] border-l-2 border-dotted border-gray-400"></div>
        <div className="absolute bottom-[60px] sm:bottom-[85px] left-[50px] sm:left-[65px] w-[calc(100%-100px)] sm:w-[calc(100%-140px)] h-[2px] border-b-2 border-dotted border-gray-400"></div>

        {/* Order Completed Box */}
        <div className="bg-white rounded-lg p-6 sm:p-8 w-[90%] sm:w-[625px] text-center">
          {/* Check Icon */}
          <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 border 2px flex items-center justify-center rounded-full relative">
            <Image
              src="/images/right.png"
              alt="Check Icon"
              width={100}
              height={100}
              className="absolute top-4 left-4 w-10 h-10 sm:w-16 sm:h-16 animate-ellipse"
            />
          </div>

          {/* Title */}
          <h1 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2">
            Your Order Is Completed!
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-xs sm:text-sm mb-6">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>

          {/* Button */}
          <button className="bg-pink-500 text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-pink-600">
            Continue Shopping
          </button>
        </div>

        {/* Small Icon */}
        <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 bg-white p-2 rounded shadow-lg z-10">
          <Image
            src="/images/check-icon.png"
            alt="Small Icon"
            width={100}
            height={100}
            className="w-8 h-8 sm:w-[70px] sm:h-[70px]"
          />
        </div>
      </div>

      {/* Decorative Section with Images */}
        <div className="flex justify-center items-center mt-12 mb-12 space-x-8 ">
          <Image
            src="/images/image news2.png"
            alt="Author Live"
            width={700}
            height={700}
            className="h-10 md:h-20 object-contain"
            />
        </div>
    </div>
  );
};

export default function OrderCompletedPage() {
  return (
    <div>
      {/* Shop Grid Header */}
      <OrderCompletedHeader />
      {/* Order Completed Page */}
      <OrderCompleted />
    </div>
  );
}
