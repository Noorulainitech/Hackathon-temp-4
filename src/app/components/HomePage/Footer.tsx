import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#EEEFFB] py-6 text-gray-700">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
        {/* Left Section: Logo, Email Signup, and Contact */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4 w-[110px] h-[38px]">Hekto</h2>
          {/* Email Subscription */}
          <div className="flex flex-wrap items-center mb-4 w-full">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full sm:w-auto flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
            />
            <button className="bg-[#FB2E86] text-white px-4 py-2 w-full sm:w-auto hover:bg-[#e12a7c] transition-all duration-300">
              Sign Up
            </button>
          </div>
          {/* Contact Info */}
          <p className="text-sm text-[#8A8FB9]">
            <span className="font-semibold text-black">Contact Info:</span>
            <br />
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Categories Section */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-[#8A8FB9]">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care Section */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm text-[#8A8FB9]">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Pages Section */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Pages</h3>
          <ul className="space-y-2 text-sm text-[#8A8FB9]">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#E7E4F8] mt-8 border-t border-b border-gray-300 pt-6 p-6 text-sm text-[#8A8FB9]">
        <div className="flex justify-evenly items-center">
          {/* Left-Aligned Text */}
          <p className="text-left">&copy;Webecy - All Rights Reserved</p>

          {/* Right-Aligned Social Media Icons */}
          <div className="flex space-x-4">
            {/* Facebook Icon */}
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-[#151875] text-2xl hover:text-blue-800 transition w-6 h-6 rounded-full object-cover" />
            </Link>

            {/* Twitter Icon */}
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-[#151875] text-2xl hover:text-blue-600 transition w-6 h-6 rounded-full object-cover" />
            </Link>

            {/* Instagram Icon */}
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-[#151875] text-2xl hover:text-pink-700 transition w-6 h-6 rounded-full object-cover" />
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}