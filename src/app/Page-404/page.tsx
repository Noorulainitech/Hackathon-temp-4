"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

const PageNotFoundHeader = () => {
  return (
    <div className="w-full bg-[#F6F5FF] py-10 px-5">
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center md:text-left">
        404 Page Not Found
        </h1>

        {/* Breadcrumb */}
        <p className="text-gray-600 text-sm text-center md:text-left">
          <Link href="#" className="text-gray-500 hover:underline">
            Home
          </Link>{" "}
          <span className="text-gray-500">,</span>{" "}
          <span>Pages</span>{" "}
          <Link href="#" className="text-pink-500 font-medium hover:underline">
          404 Page Not Found
          </Link>
        </p>
      </div>
    </div>
  );
};


const Custom404 = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-8">
      {/* 404 Illustration Section */}
      <div className="relative flex flex-col items-center">
        <div className="absolute text-[10rem] font-bold text-blue-100 z-0"></div>
        <Image
          src="/images/404notfound.png"
          alt="404 Illustration"
          width={300}
          height={300}
          className="relative z-10 w-2/3 md:w-1/2 mb-6"
        />
      </div>

      {/* Error Message */}
      <h1 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 text-center">
        oops! The page you requested was not found!
      </h1>

      {/* Back to Home Button */}
      <button
        onClick={() => window.location.href = '/'}
        className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600"
      >
        Back To Home
      </button>

      {/* Decorative Section with Images */}
          <div className="flex justify-center items-center mt-12 space-x-8 ">
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
}

export default function PageNotFoundPAge() {
    return (
      <div>
        {/* Shop Grid Header */}
        <PageNotFoundHeader />

        {/*Page Not Found 404*/}
        <Custom404/>
      </div>
    );
  }