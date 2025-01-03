import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const SingleBlogHeader = () => {
  return (
    <div className="w-full bg-[#F6F5FF] py-10 px-5">
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center md:text-left">
          Single Blog
        </h1>

        {/* Breadcrumb */}
        <p className="text-gray-600 text-sm text-center md:text-left">
          <Link href="#" className="text-gray-500 hover:underline">
            Home
          </Link>{" "}
          <span className="text-gray-500">,</span>{" "}
          <span>Pages</span>{" "}
          <Link href="#" className="text-pink-500 font-medium hover:underline">
            Single Blog
          </Link>
        </p>
      </div>
    </div>
  );
};


const SingleBlog = () => {
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
                    width={100}
                    height={100}
                    className="w-6 h-6 mr-2 "
                  />
                  <span className="bg-[#FFE7F9] p-2 w-[150px] h-[33px] text-center text-bold">Surf Auxion</span>

                  <Image
                    src="/images/calender.png"
                    alt="Left Icon"
                    width={100}
                    height={100}
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
                <div>
                  <p className="font-lato text-[16px] font-normal leading-[25.6px] text-left underline underline-offset-from-font decoration-skip-ink-none text-gray-700 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
                  </p>
                </div>

                {/* Section 2 */}
                <div className=" font-Josefin Sans text-bold border-l border-[#FC45A0] p-4 my-4 bg-[#FAFAFB]">
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.
                  </p>
                </div>

              </div>
            </div>

            {/* Section with Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              {/* Image 1 */}
              <div className="relative border-2 border-pink-500">
                <Image
                  src="/images/spage1.png" // Replace with your actual image path
                  alt="Woman with hat"
                  width={500}
                  height={300}
                  className="object-cover w-full h-auto"
                />
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-6 w-6 text-pink-500"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.79 5.093l3.58 2.407-3.58 2.407V5.093z" />
                    </svg>
                  </div>
                </button>
              </div>
              {/* Image 2 */}
              <div className="border-2 border-orange-500">
                <Image
                  src="/images/spage2.png" // Replace with your actual image path
                  alt="Woman in red dress"
                  width={500}
                  height={300}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="my-8">
              <p className="text-gray-700 leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus
                est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam
                quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.
              </p>
            </div>


            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8">
              {/* Product Cards */}
              {[
                { title: "Quam sed", Image: "/images/c1.png" },
                { title: "Tristique sed", Image: "/images/c2.png" },
                { title: "A etiam", Image: "/images/c3.png" },
                { title: "Mi nisi", Image: "/images/c4.png" },
              ].map((product, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={product.Image}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="object-cover w-full h-auto"
                  />
                  <p className="mt-2 text-lg font-semibold">{product.title}</p>
                  <p>
                    <span className="text-gray-400 line-through">$32.00</span>{" "}
                    <span className="text-red-500">$56.00</span>
                  </p>
                  <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                </div>
              ))}
            </div>

            {/* Text Section */}
            <div className="my-8">
              <p className="text-gray-700 leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus
                est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam
                quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus
                est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam
                quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.
              </p>
              <p className="text-gray-700 leading-7 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus
                est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam
                quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus
                est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam
                quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center my-8 p-4 bg-[#F7F8FB]">
              <button className="text-gray-600 hover:text-blue-500 flex items-center">
                <span className="mr-2">&larr;</span> Previous Post
              </button>
              <button className="text-gray-600 hover:text-blue-500 flex items-center">
                Next Post <span className="ml-2">&rarr;</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 my-8">
              <div className="flex justify-center space-x-4">
                {/* Facebook Icon */}
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-3xl hover:text-blue-800 transition w-[50px] h-[50px] rounded-full object-cover" />
                </Link>

                {/* Twitter Icon */}
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-3xl hover:text-blue-600 transition w-[50px] h-[50px] rounded-full object-cover" />
                </Link>

                {/* Instagram Icon */}
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-3xl hover:text-pink-700 transition w-[50px] h-[50px] rounded-full object-cover" />
                </Link>
              </div>
            </div>


            {/* Blog Cards */}
            <div className="my-12">
              <div className="space-y-4">
                {/* Blog Post 1 */}
                <div className="flex items-center border p-4 rounded-md shadow-sm">
                  <Image
                    src="/images/blog1.png"
                    alt="Sapien ac"
                    width={100}
                    height={100}
                    className="object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Sapien ac</h3>
                    <p className="text-sm text-gray-500">Jan 09 2020</p>
                    <p className="text-sm text-gray-700 mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in
                      vitae rutrum vulputate consectetur.
                    </p>
                  </div>
                </div>

                {/* Blog Post 2 */}
                <div className="flex items-center border p-4 rounded-md shadow-sm">
                  <Image
                    src="/images/blog2.png"
                    alt="Augue conva"
                    width={100}
                    height={100}
                    className="object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Augue conva</h3>
                    <p className="text-sm text-gray-500">Aug 18 2020</p>
                    <p className="text-sm text-gray-700 mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in
                      vitae rutrum vulputate consectetur.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-h-screen flex items-center justify-center">
              <div className="w-full max-w-md p-6 bg-white ">
                <form className="space-y-6">
                  {/* Name and Email Fields */}
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Name Input */}
                    <div className="flex-1">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        required
                        className="mt-1 block w-full px-4 py-2 text-gray-700 border border-gray-300 focus:outline-none focus:ring focus:ring-pink-500"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex-1">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Write Your Email"
                        required
                        className="mt-1 block w-full px-4 py-2 text-gray-700 border border-gray-300 focus:outline-none focus:ring focus:ring-pink-500"
                      />
                    </div>
                  </div>

                  {/* Comment Input */}
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                    </label>
                    <textarea
                      id="comment"
                      placeholder="Write your comment"
                      rows={4}
                      required
                      className="mt-1 block w-full px-4 py-2 text-gray-700 border border-gray-300 focus:outline-none focus:ring focus:ring-pink-500"
                    ></textarea>
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-center">
                    <input
                      id="saveInfo"
                      type="checkbox"
                      className="h-4 w-4 text-pink-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="saveInfo"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Save my name, email, and website in this browser for the next time I comment.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full px-4 py-2 text-white bg-pink-500 hover:bg-pink-600 rounded-lg focus:outline-none"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </form>
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


export default function SingleBlogPAge() {
  return (
    <div>
      {/* Shop Grid Header */}
      <SingleBlogHeader />

      {/* Blog Section */}
      <SingleBlog />
    </div>
  );
}