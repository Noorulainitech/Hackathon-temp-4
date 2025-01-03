import Image from 'next/image';

export default function DiscountItem() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">Discount Item</h1>
        <div className="text-sm md:text-base text-gray-500 mt-2">
          <span className="text-red-500">Wood Chair</span> • Plastic Chair • Sofa Collection
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full text-center">
        {/* Left Section */}
        <div className="flex-1 md:text-left md:pr-8">

          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mt-6">20% Discount Of All Products</h2>
          <h3 className="text-lg md:text-xl font-medium text-pink-500 mt-4">Eams Sofa Compact</h3>
          <p className="text-gray-600 text-sm md:text-base mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="list-none text-gray-600 text-sm md:text-base mt-4 space-y-2">
            <li>✔ Material expose like metals</li>
            <li>✔ Clear lines and geometric figures</li>
            <li>✔ Simple neutral colours</li>
            <li>✔ Material expose like metals</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-pink-500 text-white font-medium text-sm md:text-base rounded hover:bg-pink-600">
            Shop Now
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 mt-8 md:mt-0 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-pink-100 flex items-center justify-center">
            <Image
              src="/images/Discount chair.png" // Replace with your image path
              alt="Chair"
              width={300}
              height={300}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}