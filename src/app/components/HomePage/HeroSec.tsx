import Image from "next/image";

export default function Hero() {
  return (
    <main className="min-h-screen bg-[#F2F0FF] flex items-center justify-center relative overflow-hidden">
      {/* Lamp Image */}
      <div className="absolute top-0 left-0 w-[200px] md:w-[387px] h-[200px] md:h-[387px] opacity-80 animate-float transition-transform duration-500 hover:translate-x-10 hover:rotate[10deg]">
        <Image
          src="/images/lamp.png"
          alt="Lamp"
          width={387}
          height={387}
          className="object-cover"
        />
      </div>

      <div className="relative flex flex-col md:flex-row items-center max-w-7xl mx-auto p-4">
        {/* Left Section */}
        <div className="relative flex-1 space-y-4 px-4 left-0 md:left-20 text-center md:text-left">
          {/* Text Content */}
          <p className="text-pink-600 text-sm font-semibold">
            Best Furniture For Your Castle...
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-800">
            New Furniture Collection <br /> Trends in 2020
          </h1>
          <p className="text-gray-500 text-base leading-relaxed md:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>

          {/* Shop Button */}
          <button className="bg-pink-600 hover:bg-pink-500 text-white font-semibold px-6 py-3 rounded-md shadow-lg mt-4">
            Shop Now
          </button>
        </div>

        {/* Right Section */}
        <div className="relative flex-1 flex items-center justify-center mt-8 md:mt-0">
          {/* Large Ellipse Background */}
          <div className="absolute w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pink-200/50 rounded-full -z-10"></div>

          {/* Smaller Ellipse Background */}
          <div className="absolute w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-pink-400/30 rounded-full -z-20"></div>

          {/* Chair Image */}
          <Image
            src="/images/image sofa.png"
            alt="Pink Chair"
            width={500}
            height={500}
            className="relative z-10 transform rotate-[-10deg] transition-transform duration-300 hover:rotate-0"
          />

          {/* Circular Sale Badge */}
          <div className="absolute top-0 right-0 md:right-1 transform translate-x-12 md:translate-x-20 -translate-y-6 md:-translate-y-9 animate-pulse">
            <Image
              src="/images/image 50.png"
              alt="50 percent"
              width={80}
              height={80}
              className="w-16 md:w-40 h-16 md:h-40"
            />
          </div>
        </div>
      </div>

      {/* Small Floating Elements */}
      <div className="absolute bottom-10 left-10 md:left-20 w-3 h-3 md:w-4 md:h-4 bg-pink-600 rounded-full"></div>
      <div className="absolute bottom-10 left-16 md:left-28 w-3 h-3 md:w-4 md:h-4 border border-pink-600 rounded-full"></div>
    </main>
  );
}
