import React from "react";
import Link from "next/link";
import Image from "next/image";

// Define props for the Card component
interface CardProps {
    title: string;
    price: number;
    oldPrice: number;
    image: string;
    rating: number;
}


// ShopList Component (Header Section)
const ShopList: React.FC = () => {
    return (
        <div className="w-full bg-[#F6F5FF] py-10 px-5">
            <div className="container mx-auto">
                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center md:text-left">
                    Shop List
                </h1>

                {/* Breadcrumb */}
                <p className="text-gray-600 text-sm text-center md:text-left">
                    <Link href="#" className="text-gray-500 hover:underline">
                        Home
                    </Link>{" "}
                    <span className="text-gray-500">,</span>{" "}
                    <span>Pages</span>{" "}
                    <Link href="#" className="text-pink-500 font-medium hover:underline">
                        Shop
                    </Link>
                </p>
            </div>
        </div>

    );
}

const Ecommerce: React.FC = () => {
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
        </div>

    );
}
// Card Component
const Card: React.FC<CardProps> = ({ title, price, oldPrice, image, rating }) => {
    return (

        <div className="flex border rounded-lg p-4 shadow-lg bg-white max-w-4xl">
            <Image
                src={image}
                alt={title}
                width={200}
                height={200}
                className="w-1/3 h-auto rounded-md object-cover"
            />
            <div className="ml-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <p className="text-gray-500">
                        <span className="text-red-500 font-bold mr-2">${price}</span>
                        <span className="line-through text-gray-400">${oldPrice}</span>
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className="mt-4 flex">
                    {[...Array(rating)].map((_, index) => (
                        <span key={index} className="text-yellow-500">★</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

// ShopGridPage Component
const ShopListPage: React.FC = () => {
    // Product Data
    const products: CardProps[] = [
        { title: "Vitae facilisis", price: 26.0, oldPrice: 59.0, image: "/images/Rectangle s1.png", rating: 5 },
        { title: "Curabitur lectus", price: 26.0, oldPrice: 59.0, image: "/images/Rectangle s2.png", rating: 4 },
        { title: "Lorem Ipsum", price: 30.0, oldPrice: 50.0, image: "/images/Rectangle s3.png", rating: 5 },
        { title: "Dolor Sit Amet", price: 28.0, oldPrice: 55.0, image: "/images/Rectangle s4.png", rating: 4 },
        { title: "Consectetur Adipiscing", price: 35.0, oldPrice: 65.0, image: "/images/Rectangle s5.png", rating: 5 },
        { title: "Phasellus Ipsum", price: 20.0, oldPrice: 40.0, image: "/images/Rectangle s6.png", rating: 3 },
        { title: "Sed Do Eiusmod", price: 25.0, oldPrice: 50.0, image: "/images/Rectangle s7.png", rating: 4 },
    ];

    return (
        <div>


            {/* Shop Grid Header */}
            <ShopList />

            <Ecommerce />

            {/* Product Grid */}
            <div className="container mx-auto py-10">
                <h1 className="text-3xl font-bold text-center mb-6">Product Cards</h1>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-content-center align item-center">
                    {products.map((product, index) => (
                        <Card
                            key={index}
                            title={product.title}
                            price={product.price}
                            oldPrice={product.oldPrice}
                            image={product.image}
                            rating={product.rating}
                        />
                    ))}
                </div>
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

export default ShopListPage;
