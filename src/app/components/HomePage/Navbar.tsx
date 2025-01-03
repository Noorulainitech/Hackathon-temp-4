"use client"
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-white shadow-md py-4 px-6">
            <div className="container mx-auto flex justify-evenly items-center">
                {/* Logo */}
                <div className="text-3xl font-bold text-purple-700">Hekto</div>

                {/* Hamburger Menu Button */}
                <button
                    className="block md:hidden text-purple-700 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
                        />
                    </svg>
                </button>




                {/* Navbar Links */}
                <div
                    className={`${menuOpen ? "block" : "hidden"
                        } md:flex items-center space-x-6`}
                >
                    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-sm font-semibold relative">
                        <li className="group relative">
                            <Link href="http://localhost:3000/" className="hover:underline">Home</Link>
                        </li>
                        <li className="group relative">
                            <Link href="#" className="hover:underline">Pages</Link>
                            {/* Dropdown for Pages */}
                            <ul className="absolute hidden group-hover:flex flex-col space-y-2 bg-white border rounded shadow-lg mt-2 p-2 z-50">
                                <li><Link href="/about-us" className="hover:text-pink-600">About Us</Link></li>
                                <li><Link href="#" className="hover:text-pink-600">Services</Link></li>
                                <li><Link href="/faq" className="hover:text-pink-600">FAQ</Link></li>
                            </ul>
                        </li>
                        <li className="group relative">
                            <Link href="/product-detail" className="hover:underline">Products</Link>
                        </li>
                        <li className="group relative">
                            <Link href="/blog-page" className="hover:underline">Blog</Link>
                            {/* Dropdown for Blog */}
                            <ul className="absolute hidden group-hover:flex flex-col space-y-2 bg-white border rounded shadow-lg mt-2 p-2 z-50">
                                <li><Link href="/single-blog" className="hover:text-pink-600">Blog</Link></li>
                                <li><Link href="/single-blog" className="hover:text-pink-600">Single Blog</Link></li>
                            </ul>
                        </li>
                        <li className="group relative">
                            <Link href="grid-default" className="hover:underline">Shop</Link>
                            {/* Dropdown for Shop */}
                            <ul className="absolute hidden group-hover:flex flex-col space-y-2 bg-white border rounded shadow-lg mt-2 p-2 z-50">
                                <li><Link href="grid-default" className="hover:text-pink-600">shop-grid-default</Link></li>
                                <li><Link href="shop-left-sidebar" className="hover:text-pink-600">shop-left-sidebar</Link></li>
                                <li><Link href="shop-list" className="hover:text-pink-600">shop-list</Link></li>
                            </ul>
                        </li>
                        <li className="group relative">
                            <Link href="/contact-us" className="hover:underline">Contact</Link>
                            <ul className="absolute hidden group-hover:flex flex-col space-y-2 bg-white border rounded shadow-lg mt-2 p-5 z-50">
                                <li><Link href="/heckto-demo" className="hover:text-pink-600">contact </Link></li>
                                <li><Link href="/heckto-demo" className="hover:text-pink-600">contact information</Link></li>

                            </ul>
                        </li>
                    </ul>


                    {/* Search Bar */}
                    <div className="relative mt-4 md:mt-0">
                        <input
                            type="text"
                            placeholder="Search Products..."
                            className="border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-full md:w-auto"
                        />
                        <button className="absolute right-0 top-0 text-white bg-[#FB2E86] p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35M16.11 10.555a5.555 5.555 0 11-11.11 0 5.555 5.555 0 0111.11 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
