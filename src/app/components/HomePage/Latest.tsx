"use client";
import { useState } from "react";
import Image from "next/image";

export default function LatestProducts() {
  const tabs = ["New Arrival", "Best Seller", "Featured", "Special Offer"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Comfort Handy Craft",
      price: "$42.00",
      oldPrice: "$65.00",
      image: "/images/image c1.png",
      isSale: false,
    },
    {
      id: 2,
      name: "Comfort Handy Craft",
      price: "$42.00",
      oldPrice: "$65.00",
      image: "/images/image c2.png",
      isSale: true,
    },
    {
      id: 3,
      name: "Comfort Handy Craft",
      price: "$42.00",
      oldPrice: "$65.00",
      image: "/images/image c3.png",
      isSale: false,
    },
    {
      id: 4,
      name: "Comfort Handy Craft",
      price: "$42.00",
      oldPrice: "$65.00",
      image: "/images/image c4.png",
      isSale: false,
    },
    {
      id: 5,
      name: "Comfort Handy Craft",
      price: "$42.00",
      oldPrice: "$65.00",
      image: "/images/image c5.png",
      isSale: false,
    },
    {
      id: 6,
      name: "Comfort Handy Craft",
      price: "$42.00",
      oldPrice: "$65.00",
      image: "/images/image c6.png",
      isSale: false,
    },
  ];

  return (
    <section className="py-8 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="container mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-center mb-8">Latest Products</h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-8 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg font-semibold ${
                activeTab === tab ? "text-[#FB2E86]" : "text-gray-500"
              } hover:text-[#FB2E86]`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 hover:shadow-lg transition"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="w-full h-48 object-contain"
                />
                {product.isSale && (
                  <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    Sale
                  </span>
                )}
              </div>
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold text-[#151875]">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  <span className="text-[#FB2E86]">{product.price}</span>
                  <span className="line-through text-gray-400 ml-2">
                    {product.oldPrice}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
