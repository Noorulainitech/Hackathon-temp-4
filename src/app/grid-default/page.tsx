import React from "react";
import Link from "next/link";
import Image from "next/image";

const ShopGridHeader = () => {
  return (
    <div className="w-full bg-[#F6F5FF] py-10 px-5">
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center md:text-left">
          Shop Grid Default
        </h1>

        {/* Breadcrumb */}
        <p className="text-gray-600 text-sm text-center md:text-left">
          <Link href="#" className="text-gray-500 hover:underline">
            Home
          </Link>{" "}
          <span className="text-gray-500">,</span>{" "}
          <span>Pages</span>{" "}
          <Link href="#" className="text-pink-500 font-medium hover:underline">
            Shop Grid Default
          </Link>
        </p>
      </div>
    </div>
  );
};

const Ecommerce = () => {
  const products = [
    { id: 1, name: "Vel elit euismod", price: "$26.00", oldPrice: "$42.00", image: "/images/image e1.png" },
    { id: 2, name: "Ultricies condimentum imperdiet", price: "$26.00", oldPrice: "$42.00", image: "/images/image e2.png" },
    { id: 3, name: "Vitae suspendisse sed", price: "$26.00", oldPrice: "$42.00", image: "/images/image e3.png" },
    { id: 4, name: "Sed at fermentum", price: "$26.00", oldPrice: "$42.00", image: "/images/image e4.png" },
    { id: 5, name: "Fusce pellentesque at", price: "$26.00", oldPrice: "$42.00", image: "/images/image e5.png" },
    { id: 6, name: "Vestibulum magna laoreet", price: "$26.00", oldPrice: "$42.00", image: "/images/image e6.png" },
    { id: 7, name: "Sollicitudin amet orci", price: "$26.00", oldPrice: "$42.00", image: "/images/image e7.png" },
    { id: 8, name: "Ultrices mauris sit", price: "$26.00", oldPrice: "$42.00", image: "/images/image e8.png" },
    { id: 8, name: "Ultrices mauris sit", price: "$26.00", oldPrice: "$42.00", image: "/images/image e9.png" },
    { id: 8, name: "Ultrices mauris sit", price: "$26.00", oldPrice: "$42.00", image: "/images/image e10.png" },
    { id: 8, name: "Ultrices mauris sit", price: "$26.00", oldPrice: "$42.00", image: "/images/image e11.png" },
    { id: 8, name: "Ultrices mauris sit", price: "$26.00", oldPrice: "$42.00", image: "/images/image e12.png" },
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
          <p className="text-sm text-gray-500">About 9,620 results (0.62 seconds)</p>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2 text-sm">
          <span>Per Page:</span>
          <input type="text" className="border border-gray-300 px-2 py-1 w-12 focus:outline-none" />
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

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col items-center"
          >
            {/* Product Image */}
            <div className="w-full h-56 flex items-center justify-center overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={50}
                height={50}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Product Info */}
            <h2 className="text-lg font-semibold mt-4 mb-2 text-center">{product.name}</h2>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-600 font-bold">{product.price}</span>
              <span className="text-gray-400 line-through">{product.oldPrice}</span>
            </div>
          </div>
        ))}
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

export default function ShopGridPage() {
  return (
    <div>
      {/* Shop Grid Header */}
      <ShopGridHeader />
      {/* Product Grid */}
      <Ecommerce />
    </div>
  );
}
