import React from "react";
import Link from "next/link";
import Image from "next/image";

// Header Section Component
const ShopBrandHeader = () => {
  return (
    <div className="w-full bg-[#F6F5FF] py-10 px-5">
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center md:text-left">
          Shop Left Sidebar
        </h1>

        {/* Breadcrumb */}
        <p className="text-gray-600 text-sm text-center md:text-left">
          <Link href="#" className="text-gray-500 hover:underline">
            Home
          </Link>{" "}
          <span className="text-gray-500">,</span>{" "}
          <span>Pages</span>{" "}
          <Link href="#" className="text-pink-500 font-medium hover:underline">
            Shop Left Sidebar
          </Link>
        </p>
      </div>
    </div>
  );
};

// Main Ecommerce Component
const Ecommerce = () => {
  // Product Data
  const products = [
    {
      name: "Dictum morbi",
      oldPrice: "52.00",
      newPrice: "26.00",
      image: "/images/leftbar 1.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Sodales sit",
      oldPrice: "52.00",
      newPrice: "26.00",
      image: "/images/leftbar 2.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Nibh varius",
      oldPrice: "52.00",
      newPrice: "26.00",
      image: "/images/leftbar 3.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Mauris quis",
      oldPrice: "52.00",
      newPrice: "26.00",
      image: "/images/leftbar 4.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Morbi Sagittis",
      oldPrice: "52.00",
      newPrice: "26.00",
      image: "/images/leftbar 5.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Ultricies venenatis",
      oldPrice: "52.00",
      newPrice: "26.00",
      image: "/images/leftbar 6.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

  ];

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between border border-purple-300 p-2 mx-auto max-w-screen-lg mb-6">
        {/* Left Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <h1 className="text-lg font-bold text-indigo-900 mr-4">
            Ecommerce Accessories & Fashion Item
          </h1>
          <p className="text-sm text-gray-500">
            About 9,620 results (0.62 seconds)
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2 text-sm">
          <span>Per Page:</span>
          <input
            type="text"
            className="border border-gray-300 px-2 py-1 w-12 focus:outline-none"
          />
          <span>Sort By:</span>
          <select className="border border-gray-300 px-2 py-1 focus:outline-none">
            <option>Best Match</option>
          </select>
          <span>View:</span>
          <div className="flex space-x-1">
            <div className="w-4 h-4 bg-gray-300"></div>
            <div className="w-4 h-4 bg-gray-300"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 p-6 border-r">
          {/* Product Brand */}
          <div className="mb-8">
            <h3 className="font-bold mb-2">Product Brand</h3>
            <ul>
              {[
                "Coaster Furniture",
                "Fusion Dot High Fashion",
                "Unique Furniture Restor",
                "Dream Furniture Flipping",
                "Young Repurposed",
                "Green DIY furniture",
              ].map((brand, index) => (
                <li key={index} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    defaultChecked={index === 2}
                  />
                  {brand}
                </li>
              ))}
            </ul>
          </div>

          {/* Discount Offer */}
          <div className="mb-8">
            <h3 className="font-bold mb-2">Discount Offer</h3>
            <ul>
              {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map(
                (offer, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    {offer}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Rating Items */}
          <div className="mb-8">
            <h3 className="font-bold mb-2">Rating Item</h3>
            <ul>
              {[5, 4, 3, 2].map((rating, index) => (
                <li key={index} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    defaultChecked={index === 1}
                  />
                  <span className="text-yellow-400">
                    {"★".repeat(rating)}{"☆".repeat(5 - rating)}
                  </span>
                  <span className="ml-2 text-gray-600">
                    ({Math.floor(Math.random() * 2500)})
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold mb-2">Categories</h3>
            <ul className="space-y-1 text-sm">
              <li><input type="checkbox" className="mr-2" />Prestashop</li>
              <li><input type="checkbox" className="mr-2" />Magento</li>
              <li><input type="checkbox" className="mr-2" />Bigcommerce</li>
              <li><input type="checkbox" className="mr-2" />osCommerce</li>
            </ul>
          </div>

          {/* Price Filter */}
          <div className="mt-6">
            <h3 className="font-bold mb-2">Price Filter</h3>
            <ul className="space-y-1 text-sm">
              <li><input type="checkbox" className="mr-2" />$0 - $150</li>
              <li><input type="checkbox" className="mr-2" />$150 - $350</li>
            </ul>
          </div>

          {/* Filter by Color */}
          <div className="mt-6">
            <h3 className="font-bold mb-2">Filter By Color</h3>
            <div className="flex space-x-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
              <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
              <div className="w-5 h-5 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </aside>

        {/* Product Listing */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Products</h1>
          {products.map((product, index) => (
            <div
              key={index}
              className="flex items-center p-4 border rounded-lg shadow-sm mb-4"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="w-32 h-32 object-cover rounded-md mr-6"
              />
              <div>
                <h3 className="text-lg font-bold text-blue-700">
                  {product.name}
                </h3>
                <p className="text-gray-500 line-through">${product.oldPrice}</p>
                <p className="text-red-500">${product.newPrice}</p>
                <p className="text-yellow-400">{"★".repeat(4)}{"☆"}</p>
                <p className="text-sm text-gray-600 mt-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </main>
      </div>

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
};

// Main Page Component
export default function ShopBrandPage() {
  return (
    <div>
      {/* Shop Grid Header */}
      <ShopBrandHeader />
      {/* Product Grid */}
      <Ecommerce />
    </div>
  );
}
