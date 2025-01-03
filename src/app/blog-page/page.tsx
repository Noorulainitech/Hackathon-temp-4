import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogHeader = () => {
  return (
    <div className="w-full bg-[#F6F5FF] py-10 px-5">
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center md:text-left">
          Blog Page
        </h1>

        {/* Breadcrumb */}
        <p className="text-gray-600 text-sm text-center md:text-left">
          <Link href="#" className="text-gray-500 hover:underline">
            Home
          </Link>{" "}
          <span className="text-gray-500">,</span>{" "}
          <span>Pages</span>{" "}
          <Link href="#" className="text-pink-500 font-medium hover:underline">
            Blog Page
          </Link>
        </p>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="bg-white min-h-screen p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Blog Section */}
          <div className="col-span-2 space-y-8">
            {/* Blog Post 1 */}
            <div className="bg-white overflow-hidden">
              <Image
                src="/images/bl1.png" // Replace with your image path
                alt="Blog Image"
                width={870}
                height={453}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
              <div className="flex items-center text-sm text-purple-600 mb-2">
                  <Image
                    src="/images/surf.png"
                    alt="Left Icon"
                    width={50}
                    height={50}
                    className="w-6 h-6 mr-2 "
                  />
                  <span className="bg-[#FFE7F9] p-2 w-[150px] h-[33px] text-center text-bold">Surf Auxion</span>
                  
                  <Image
                    src="/images/calender.png"
                    alt="Left Icon"
                    width={50}
                    height={50}
                    className="ml-4 w-6 h-6 mr-2"
                  />
                  
                  <span className="ml-4 text-gray-500 bg-[#FFECE2] p-2">Aug 09 2020</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Mauris at orci non vulputate diam tincidunt nec.
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum.
                </p>
                <Link href="#" className="text-purple-600 font-medium hover:underline">Read More</Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white overflow-hidden">
              <Image
                src="/images/bl2.png" // Replace with your image path
                alt="Blog Image"
                width={870}
                height={453}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
              <div className="flex items-center text-sm text-purple-600 mb-2">
                  <Image
                    src="/images/surf.png"
                    alt="Left Icon"
                    width={50}
                    height={50}
                    className="w-6 h-6 mr-2 "
                  />
                  <span className="bg-[#FFE7F9] p-2 w-[150px] h-[33px] text-center text-bold">Surf Auxion</span>
                  
                  <Image
                    src="/images/calender.png"
                    alt="Left Icon"
                    width={50}
                    height={50}
                    className="ml-4 w-6 h-6 mr-2"
                  />
                  
                  <span className="ml-4 text-gray-500 bg-[#FFECE2] p-2">Aug 09 2020</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Aenean vitae in aliquam ultrices lectus. Etiam.
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum.
                </p>
                <Link href="#" className="text-purple-600 font-medium hover:underline">Read More</Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white overflow-hidden">
              <Image
                src="/images/bl3.png" // Replace with your image path
                alt="Blog Image"
                width={870}
                height={453}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-purple-600 mb-2">
                  <Image
                    src="/images/surf.png"
                    alt="Left Icon"
                    width={50}
                    height={50}
                    className="w-6 h-6 mr-2 "
                  />
                  <span className="bg-[#FFE7F9] p-2 w-[150px] h-[33px] text-center text-bold">Surf Auxion</span>
                  
                  <Image
                    src="/images/calender.png"
                    alt="Left Icon"
                    width={50}
                    height={50}
                    className="ml-4 w-6 h-6 mr-2"
                  />
                  
                  <span className="ml-4 text-gray-500 bg-[#FFECE2] p-2">Aug 09 2020</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Aenean vitae in aliquam ultrices lectus. Etiam.
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum.
                </p>
                <Link href="#" className="text-purple-600 font-medium hover:underline">Read More</Link>
              </div>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="space-y-8">
            {/* Search */}
            <div className="bg-white p-4">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Search</h3>
              <input
                type="text"
                placeholder="Search for posts"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Categories */}
            <div className="bg-white p-4">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Categories</h3>
              <div className="grid grid-cols-2 gap-4 ">
                <Link
                  href="#"
                  className="block px-3 py-2 text-center rounded-lg text-[#3F509E] hover:bg-[#F939BF] hover:text-white transition"
                >
                  Hobbies (14)
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-center rounded-lg text-purple-600 hover:bg-[#F939BF] hover:text-white transition"
                >
                  Women (21)
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-center rounded-lg text-purple-600 hover:bg-[#F939BF] hover:text-white transition"
                >
                  Nature (10)
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-center rounded-lg text-purple-600 hover:bg-[#F939BF] hover:text-white transition"
                >
                  Travel (8)
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-center rounded-lg text-purple-600 hover:bg-[#F939BF] hover:text-white transition"
                >
                  Fitness (12)
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-center rounded-lg text-purple-600 hover:bg-[#F939BF] hover:text-white transition"
                >
                  Lifestyle (20)
                </Link>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-4">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Recent Post</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Image
                    src="/images/rp1.png" // Replace with your image path
                    alt="Recent Post"
                    width={120}
                    height={77}
                    className="rounded-lg"
                  />
                  <span className="ml-4 text-gray-700 hover:underline">It is a long established fact</span>
                </li>
                <li className="flex items-center">
                  <Image
                    src="/images/rp2.png" // Replace with your image path
                    alt="Recent Post"
                    width={120}
                    height={77}
                    className="rounded-lg"
                  />
                  <span className="ml-4 text-gray-700 hover:underline">Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex items-center">
                  <Image
                    src="/images/rp3.png" // Replace with your image path
                    alt="Recent Post"
                    width={120}
                    height={77}
                    className="rounded-lg"
                  />
                  <span className="ml-4 text-gray-700 hover:underline">Consectetur adipiscing elit</span>
                </li>
                <li className="flex items-center">
                  <Image
                    src="/images/rp4.png" // Replace with your image path
                    alt="Recent Post"
                    width={120}
                    height={77}
                    className="rounded-lg"
                  />
                  <span className="ml-4 text-gray-700 hover:underline">Sed do eiusmod tempor</span>
                </li>
              </ul>
            </div>

            {/* Sale Products */}
            <div className="bg-white p-4">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Sale Product</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Image
                    src="/images/sp1.png" // Replace with your image path
                    alt="Sale Product"
                    width={120}
                    height={77}
                    className="rounded-lg"
                  />
                  <span className="ml-4 text-gray-700">Duis lectus est</span>
                  <span className="text-gray-500 ml-auto">$12.00</span>
                </li>
                <li className="flex items-center">
                  <Image
                    src="/images/sp2.png" // Replace with your image path
                    alt="Sale Product"
                    width={120}
                    height={77}
                    className="rounded-lg"
                  />
                  <span className="ml-4 text-gray-700">Sed placerat</span>
                  <span className="text-gray-500 ml-auto">$15.00</span>
                </li>
                <li className="flex items-center">
                  <Image
                    src="/images/sp3.png" // Replace with your image path
                    alt="Sale Product"
                    width={120}
                    height={77}
                    className="rounded-lg"
                  />
                  <span className="ml-4 text-gray-700">Vivamus pulvinar et enim</span>
                  <span className="text-gray-500 ml-auto">$18.00</span>
                </li>
              </ul>
            </div>

            {/* Office Products */}
            <div className="bg-white p-4">
              <h3 className="text-lg font-semibold mb-4 text-[#151875]">Office Product</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <Image
                    src="/images/op1.png" // Replace with your image path
                    alt="Office Product"
                    width={120}
                    height={77}
                    className="rounded-lg mx-auto"
                  />
                  <span className="block mt-2 text-gray-700 font-lato text-center text-sm font-semibold leading-5 underline decoration-skip-none">Office Desk</span>
                  <span className="block text-gray-500">$120.00</span>
                </div>
                <div className="text-center">
                  <Image
                    src="/images/op2.png" // Replace with your image path
                    alt="Office Product"
                    width={120}
                    height={77}
                    className="rounded-lg mx-auto"
                  />
                  <span className="block mt-2 text-gray-700 font-lato text-center text-sm font-semibold leading-5 underline decoration-skip-none">Ergonomic Chair</span>
                  <span className="block text-gray-500">$85.00</span>
                </div>
                <div className="text-center">
                  <Image
                    src="/images/op3.png" // Replace with your image path
                    alt="Office Product"
                    width={120}
                    height={77}
                    className="rounded-lg mx-auto"
                  />
                  <span className="block mt-2 text-gray-700 font-lato text-center text-sm font-semibold leading-5 underline decoration-skip-none">Desk Organizer</span>
                  <span className="block text-gray-500">$20.00</span>
                </div>
                <div className="text-center">
                  <Image
                    src="/images/op4.png" // Replace with your image path
                    alt="Office Product"
                    width={120}
                    height={77}
                    className="rounded-lg mx-auto"
                  />
                  <span className="block mt-2 text-gray-700 font-lato text-center text-sm font-semibold leading-5 underline decoration-skip-none">Monitor Stand</span>
                  <span className="block text-gray-500">$30.00</span>
                </div>
              </div>
            </div>

            {/* Follow */}
            <div className="bg-white p-4">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Follow</h3>
              <div className="flex space-x-2">
                <Image
                  src="/images/fb.png" // Replace with your image path
                  alt="Follow Image 1"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <Image
                  src="/images/camera.png" // Replace with your image path
                  alt="Follow Image 2"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <Image
                  src="/images/twitter.png" // Replace with your image path
                  alt="Follow Image 3"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white p-4">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Tags</h3>
              <div className="grid grid-cols-3 gap-4">
                <Link
                  href="#"
                  className="block px-3 py-2 text-center rounded-lg text-[#3F509E] hover:bg-[#F939BF] hover:text-white transition"
                >
                  General
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-center rounded-lg text-purple-600 hover:bg-[#F939BF] hover:text-white transition"
                >
                  Atsanil
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-center rounded-lg text-purple-600 hover:bg-[#F939BF] hover:text-white transition"
                >
                  Insas
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-center rounded-lg text-purple-600 hover:bg-[#F939BF] hover:text-white transition"
                >
                  Bibsaas
                </Link>

                <Link
                  href="#"
                  className="block px-3 py-2 text-center rounded-lg text-purple-600 hover:bg-[#F939BF] hover:text-white transition"
                >
                  Nulla.
                </Link>
              </div>
            </div>

          </div>
        </div>

        <div className="flex justify-center mt-6">
          <span className="mx-1 px-3 py-1 bg-white border rounded hover:bg-[#F939BF] hover:text-white transition">1</span>
          <span className="mx-1 px-3 py-1 bg-white border rounded hover:bg-[#F939BF] hover:text-white transition">2</span>
          <span className="mx-1 px-3 py-1 bg-white border rounded hover:bg-[#F939BF] hover:text-white transition">3</span>
          <span className="mx-1 px-3 py-1 bg-white border rounded hover:bg-[#F939BF] hover:text-white transition">4</span>
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
}


export default function BlogPAge() {
  return (
    <div>
      {/* Shop Grid Header */}
      <BlogHeader />

      {/* Blog */}
      <Blog />
    </div>
  );
}