"use client"
import Head from 'next/head';
import React from "react";
import Link from "next/link";

const FaqHeader = () => {
  return (
    <div className="w-full bg-[#F6F5FF] py-10 px-5">
      <div className="container mx-auto">,
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center md:text-left">
          Faq
        </h1>

        {/* Breadcrumb */}
        <p className="text-gray-600 text-sm text-center md:text-left">
          <Link href="#" className="text-gray-500 hover:underline">
            Home
          </Link>{" "}
          <span className="text-gray-500">,</span>{" "}
          <span>Pages</span>{" "}
          <Link href="#" className="text-pink-500 font-medium hover:underline">
          Faq
          </Link>
        </p>
      </div>
    </div>
  );
};

// pages/faq.js
const FAQ = () => {
  return (
    <>
    <Head>
      <title>General Information</title>
    </Head>
    <div className="flex justify-center items-center min-h-screen bg-white p-6">
      <div className="flex flex-col md:flex-row justify-between items-start bg-white max-w-5xl w-full">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">General Information</h1>

          <div className="space-y-6">
            {[
              {
                title: 'Eu dictumst cum at sed euismod condimentum?',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
              },
              {
                title: 'Magna bibendum est fermentum eros.',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
              },
              {
                title: 'Odio muskana hak eris conseekin scelteon?',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
              },
              {
                title: 'Elit id blandit sabara boi velit gua mara?',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
              },
            ].map((item, index) => (
              <div key={index}>
                <h2 className="text-sm font-semibold text-blue-900 mb-9">{item.title}</h2>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-[#F8F8FD] p-8">
          <h2 className="text-xl font-semibold text-blue-900 mt-8 mb-40">Ask a Question</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name*
              </label>
              <input
                type="text"
                id="name"
                className="mt-4 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject*
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Type Your Message*
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600"
            >
              Send Mail
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
);
}


export default function FaqPAge() {
    return (
      <div>
        {/* Shop Grid Header */}
        <FaqHeader />

        {/* Shop Grid */}
        <FAQ />
      </div>
    );
  }