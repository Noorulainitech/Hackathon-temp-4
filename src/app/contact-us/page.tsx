import React from "react";
import Link from "next/link";
import Image from 'next/image';

const ContactUsHeader = () => {
  return (
    <div className="w-full bg-[#F6F5FF] py-10 px-5">
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center md:text-left">
          Contact Us
        </h1>

        {/* Breadcrumb */}
        <p className="text-gray-600 text-sm text-center md:text-left">
          <Link href="#" className="text-gray-500 hover:underline">
            Home
          </Link>{" "}
          <span className="text-gray-500">,</span>{" "}
          <span>Pages</span>{" "}
          <Link href="#" className="text-pink-500 font-medium hover:underline">
          Contact Us
          </Link>
        </p>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      {/* Information About Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Information About Us</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est.
            Malesuada sem tristique amet erat vitae eget dolor lobortis.
          </p>
          <div className="flex space-x-2">
            <span className="w-4 h-4 rounded-full bg-purple-500"></span>
            <span className="w-4 h-4 rounded-full bg-blue-500"></span>
            <span className="w-4 h-4 rounded-full bg-teal-500"></span>
          </div>
        </div>

        {/* Contact Way Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Way</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">T</div>
              <span>Tel: 877-67-88-99</span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">E</div>
              <span>Email: shop@store.com</span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
              <span>20 Margaret St, London, Great Britain, 3NM98-LK</span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">S</div>
              <span>Free standard shipping on all orders</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor lobortis.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your E-mail"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject*"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Type Your Message*"
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
              Send Mail
            </button>
          </form>
        </div>

        {/* Illustration Section */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/illustration.png"
            alt="Illustration"
            width={400}
            height={400}
            className="w-3/4"
          />
        </div>
      </div>
    </div>
  );
}


export default function ContactUsPAge() {
    return (
      <div>
        {/* Shop Grid Header */}
        <ContactUsHeader />

        {/* Contact Us Page */}
        <ContactUs />
      </div>
    );
  }