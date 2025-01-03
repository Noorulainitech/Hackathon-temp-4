
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const AccountHeader = () => {
    return (
        <div className="w-full bg-[#F6F5FF] py-10 px-5">
            <div className="container mx-auto">
                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center md:text-left">
                    My Account
                </h1>

                {/* Breadcrumb */}
                <p className="text-gray-600 text-sm text-center md:text-left">
                    <Link href="#" className="text-gray-500 hover:underline">
                        Home
                    </Link>{" "}
                    <span className="text-gray-500">,</span>{" "}
                    <span>Pages</span>{" "}
                    <Link href="#" className="text-pink-500 font-medium hover:underline">
                        My Account
                    </Link>
                </p>
            </div>
        </div>
    );
};


const Account = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <Head>
                <title>Login</title>
            </Head>

            {/* Login Form */}
            <div className="w-96 bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h1>
                <p className="text-sm text-center text-gray-600 mb-6">Please login using account details below.</p>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="text-left text-sm text-pink-500 cursor-pointer hover:underline">
                        Forgot your password?
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition duration-300"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-sm text-center text-gray-600 mt-6">
                    Dont have an Account? <span className="text-pink-500 cursor-pointer hover:underline">Create account</span>
                </p>
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


export default function MyAccountPage() {
    return (
        <div>
            {/* Shop Grid Header */}
            <AccountHeader />

            {/* Account Section */}
            <Account />
        </div>
    );
}