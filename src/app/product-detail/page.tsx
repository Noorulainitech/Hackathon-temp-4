"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Header Section Component
const ProductDetail = () => (
    <div className="w-full bg-[#F6F5FF] py-10 px-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 text-center md:text-left">
                Product Details
            </h1>

            {/* Breadcrumb */}
            <p className="text-gray-600 text-xs sm:text-sm text-center md:text-left">
                <Link href="http://localhost:3000/" className="text-gray-500 hover:underline">
                    Home
                </Link>{" "}
                <span className="text-gray-500">/</span>{" "}
                <Link href="/product-detail" className="text-pink-500 font-medium hover:underline">
                    Product Details
                </Link>
            </p>
        </div>
    </div>
);

// Main Ecommerce Component
const Ecommerce = () => (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 max-w-5xl mx-auto p-4 border rounded-lg shadow-md">
        {/* Left Column with Images */}
        <div className="flex md:flex-col gap-4">
            {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="w-[120px] h-[120px] sm:w-[151px] sm:h-[155px] overflow-hidden">
                    <Image
                        src={`/images/pd ${idx + 1}.png`}
                        alt={`Thumbnail ${idx + 1}`}
                        width={151}
                        height={155}
                        className="object-cover w-full h-full rounded-md"
                    />
                </div>
            ))}
        </div>

        {/* Main Image */}
        <div className="w-full h-[300px] md:w-[60%] md:h-[509px]">
            <Image
                src="/images/pd 4.png"
                alt="Main Bag"
                width={509}
                height={509}
                className="object-cover w-full h-full rounded-md"
            />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-[40%] space-y-4 text-center md:text-left">
            <h1 className="text-xl sm:text-3xl font-semibold text-gray-800">
                Playwood arm chair
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-gray-500 text-sm">(22)</span>
            </div>
            <div className="text-2xl font-bold text-gray-700">
                <span className="line-through text-gray-400">$32.00</span>{" "}
                <span className="text-red-500">$30.00</span>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus
                porttitor purus, et volutpat sit.
            </p>
            <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                Add To Cart
            </button>
            <div>
                <p className="font-semibold">Categories:</p>
                <p className="text-gray-500">Bags</p>
            </div>
            <div>
                <p className="font-semibold">Tags:</p>
                <p className="text-gray-500">Fashion, Accessories</p>
            </div>
            <div>
                <p className="font-semibold">Share:</p>
                <div className="flex justify-center md:justify-start gap-3 text-blue-600">
                    <span>🔵 FB</span>
                    <span>🟣 IG</span>
                    <span>🔗 TW</span>
                </div>
            </div>
        </div>
    </div>
);

// Detail Tabs Section
const Detail = () => {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <div className="w-full bg-[#F9F8FE] py-10">
            <div className="p-6 max-w-[1200px] mx-auto">
                {/* Tabs */}
                <div className="flex flex-wrap justify-center md:justify-start space-x-4 sm:space-x-8 mb-6">
                    {["Description", "Additional Info", "Reviews", "Video"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab.toLowerCase())}
                            className={`text-[#151875] font-bold pb-1 ${
                                activeTab === tab.toLowerCase() ? "border-b-2 border-black" : ""
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                    Aliquam dis vulputate integer sagittis. Faucibus dolor ornare faucibus vel
                    sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum.
                </p>

                {/* More Details */}
                <div className="mt-6">
                    <h3 className="text-gray-900 font-bold mb-4">More details</h3>
                    <ul className="space-y-2 text-gray-500">
                        {[...Array(4)].map((_, index) => (
                            <li key={index} className="flex items-center">
                                <span className="text-blue-500 pr-2">→</span>
                                Aliquam dis vulputate vulputate integer sagittis.
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

// Related Products Section
const RelatedProducts = () => {
    const products = [
        { id: 1, title: "Mens Fashion Wear", price: "$43.00", image: "/images/p1.png", rating: 5 },
        { id: 2, title: "Women's Fashion", price: "$67.00", image: "/images/p2.png", rating: 5 },
        { id: 3, title: "Wolx Dummy Fashion", price: "$67.00", image: "/images/p3.png", rating: 5 },
        { id: 4, title: "Top Wall Digital Clock", price: "$51.00", image: "/images/p4.png", rating: 4 },
    ];

    return (
        <div className="max-w-7xl mx-auto p-5">
            <h2 className="text-lg sm:text-2xl font-bold text-primary mb-6 text-center sm:text-left">
                Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="text-center">
                        <div className="w-full h-48 sm:h-60 mb-4">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={200}
                                height={240}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <h3 className="text-sm text-primary font-semibold mb-2">
                            {product.title}
                        </h3>
                        <p className="text-sm text-highlight font-semibold mb-1">
                            {product.price}
                        </p>
                        <div className="flex justify-center space-x-1 text-yellow-400">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i} className={`${i < product.rating ? "" : "text-gray-300"}`}>
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Main Page Component
export default function ShopDetailPage() {
    return (
        <div>
            <ProductDetail />
            <Ecommerce />
            <Detail />
            <RelatedProducts />
        </div>
    );
}
