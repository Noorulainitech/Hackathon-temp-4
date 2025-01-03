import React from "react";
import Link from "next/link";
import Image from 'next/image';

const HektoHeader = () => {
  return (
    <div className="w-full bg-[#F6F5FF] py-10 px-5">
      <div className="container max-w-screen-lg mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center md:text-left">
          Hekto Demo
        </h1>

        {/* Breadcrumb */}
        <p className="text-gray-600 text-sm text-center md:text-left">
          <Link href="#" className="text-gray-500 hover:underline">
            Home
          </Link>{" "}
          <span className="text-gray-500">,</span>{" "}
          <span>Pages</span>{" "}
          <Link href="#" className="text-pink-500 font-medium hover:underline">
            Hekto Page
          </Link>
        </p>
      </div>
    </div>
  );
};

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-[white] py-10">
      <div className="container max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-6">
        <div className="lg:col-span-2 p-6">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-[#1D3178] mb-4 text-center lg:text-left">
            Hekto Demo
          </h1>
          <p className="text-sm text-gray-600 mb-0 text-center lg:text-left">
            <span>Cart / Information / Shipping / Payment</span>
          </p>
        </div>
        {/* Left Section */}
        <div className="lg:col-span-2 bg-[#F8F8FD] rounded-lg shadow-lg p-6">
          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#1D3178] mb-2">
              Contact Information
            </h2>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email or mobile phone number"
                className="w-full border-b border-gray-300 rounded-md p-3 bg-[#F8F8FD]"
              />
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <input type="checkbox" id="news-offers" />
              <label htmlFor="news-offers">
                Keep me up to date on news and exclusive offers.
              </label>
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Shipping address</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First name (optional)"
                className="w-full border-b border-gray-300 rounded-md p-3 bg-[#F8F8FD]"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full border-b border-gray-300 rounded-md p-3 bg-[#F8F8FD]"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full border-b border-gray-300 rounded-md p-3 mb-4 bg-[#F8F8FD]"
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="w-full border-b border-gray-300 rounded-md p-3 mb-4 bg-[#F8F8FD]"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="City"
                className="w-full border-b border-gray-300 rounded-md p-3 bg-[#F8F8FD]"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border-b border-gray-300 rounded-md p-3 bg-[#F8F8FD]"
              />
            </div>
            <button className="w-[185px] bg-pink-500 text-white px-6 py-3 rounded-md font-medium hover:bg-pink-600">
              Continue Shipping
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Cart Items */}
          <div className="space-y-4">
            {[
              {
                id: 1,
                image: "/images/hec1.png",
                name: "Product 1",
                color: "Brown",
                size: "XL",
                price: "$32.00",
              },
              {
                id: 2,
                image: "/images/hec2.png",
                name: "Product 2",
                color: "Black",
                size: "M",
                price: "$45.00",
              },
              {
                id: 3,
                image: "/images/hec3.png",
                name: "Product 3",
                color: "White",
                size: "L",
                price: "$28.00",
              },
              {
                id: 4,
                image: "/images/hec4.png",
                name: "Product 4",
                color: "Gray",
                size: "S",
                price: "$35.00",
              },
              {
                id: 5,
                image: "/images/hec5.png",
                name: "Product 5",
                color: "Blue",
                size: "XL",
                price: "$50.00",
              },
            ].map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between border-b border-gray-200 pb-4"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={16}
                  height={16}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1 ml-4">
                  <p className="text-sm font-medium text-gray-800">
                    {product.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    Color: {product.color} | Size: {product.size}
                  </p>
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  {product.price}
                </p>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="mt-10 space-y-4 bg-[#F4F4FC] p-6">
            <div className="flex justify-between text-gray-600 text-sm">
              <span>Subtotal:</span>
              <span>$219.00</span>
            </div>
            <div className="flex justify-between text-gray-600 text-sm">
              <span>Total:</span>
              <span>$325.00</span>
            </div>
            <p className="text-xs text-gray-500">
              Shipping & taxes calculated at checkout
            </p>
            {/* Checkout Button */}
            <button className="w-full mt-4 bg-green-500 text-white py-3 rounded-md font-medium hover:bg-green-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HektoPage() {
  return (
    <div>
      {/* Shop Grid Header */}
      <HektoHeader />

      {/* Checkout Page */}
      <CheckoutPage />
    </div>
  );
}
