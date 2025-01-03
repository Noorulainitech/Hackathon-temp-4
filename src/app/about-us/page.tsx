import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUsHeader = () => {
  return (
    <div className="w-full bg-[#F6F5FF] py-10 px-5">
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center md:text-left">
          About Us
        </h1>

        {/* Breadcrumb */}
        <p className="text-gray-600 text-sm text-center md:text-left">
          <Link href="#" className="text-gray-500 hover:underline">
            Home
          </Link>{" "}
          <span className="text-gray-500">,</span>{" "}
          <span>Pages</span>{" "}
          <Link href="#" className="text-pink-500 font-medium hover:underline">
          About Us
          </Link>
        </p>
      </div>
    </div>
  );
};


const BusinessSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto p-6">
        {/* Image Section with Blue Background */}
        <div className="relative flex-shrink-0">
          {/* Blue Background */}
          <div className="absolute bg-[#2B3CAB] rounded-lg w-[580px] h-[434px] top-0 -left-5"></div>
          {/* Image */}
          <Image
            src="/images/aboutus.png" // Replace with your image source
            alt="Business meeting"
            width={570}
            height={434}
            className="w-[570px] h-[409px] rounded-lg relative"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-start max-w-md space-y-4">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Know About Our Ecommerce Business, History
          </h2>

          {/* Description */}
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultricies mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus risus molestie volutpat quis bibendum quam.
          </p>

          {/* Button */}
          <button className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Free Delivery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      icon: "/images/free-delivery.png" // Replace with the correct path for your icon
    },
    {
      title: "100% Cash Back",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      icon: "/images/cash-back.png" // Replace with the correct path for your icon
    },
    {
      title: "Quality Product",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      icon: "/images/quality-product.png" // Replace with the correct path for your icon
    },
    {
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      icon: "/images/support.png" // Replace with the correct path for your icon
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={50}
                height={50}
                className="w-16 h-18 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">
                {feature.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ClientSaySection = () => {
  const testimonials = [
    "/images/client1.png", // Replace with actual image paths
    "/images/client2.png",
    "/images/client3.png"
  ];

  return (
    <div className="py-16 bg-[#FBFBFF] text-center">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#000000] mb-8">Our Client Say!</h2>

        {/* Client Images */}
        <div className="flex justify-center items-center space-x-4 mb-6">
          {testimonials.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Client ${index + 1}`}
              width={100}
              height={100}
              className={`w-20 h-20  border-2 border-gray-300 object-cover ${index === 1 ? 'translate-y-[-10px]' : 'translate-y-[10px]'}`}
            />
          ))}
        </div>

        {/* Client Info */}
        <h3 className="text-lg font-semibold text-gray-900">Selina Gomez</h3>
        <p className="text-sm text-gray-500 mb-4">CEO at Webzy Digital</p>

        {/* Testimonial Text */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.
        </p>

        {/* Decorative Line */}
        <div className="flex justify-center space-x-2">
          <span className="w-4 h-[2px] bg-pink-500"></span>
          <span className="w-4 h-[2px] bg-pink-500"></span>
          <span className="w-4 h-[2px] bg-pink-500"></span>
        </div>
      </div>
    </div>
  );
};




export default function AboutUsPAge() {
    return (
      <div>
        {/* Shop Grid Header */}
        <AboutUsHeader />

        {/* Business Section */}
        <BusinessSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Client Say Section */}
        <ClientSaySection />
      </div>
    );
  }