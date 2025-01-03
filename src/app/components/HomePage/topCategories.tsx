import Image from "next/image";

const categories = [
  { id: 1, name: "Mini LCW Chair", price: "$56.00", imgSrc: "/images/image tp1.png", highlight: true },
  { id: 2, name: "Mini LCW Chair", price: "$56.00", imgSrc: "/images/image tp2.png", highlight: false },
  { id: 3, name: "Mini LCW Chair", price: "$56.00", imgSrc: "/images/image tp3.png", highlight: false },
  { id: 4, name: "Mini LCW Chair", price: "$56.00", imgSrc: "/images/image tp1.png", highlight: false },
];

const TopCategories = () => {
  return (
    <section className="py-10 px-4 lg:px-20">
      {/* Heading */}
      <h2 className="text-center text-2xl font-bold text-[#1D1E4C] mb-6">Top Categories</h2>

      {/* Categories */}
      <div className="flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center space-y-2 relative"
          >
            {/* Circle Background */}
            <div
              className={`w-48 h-48 rounded-full flex items-center justify-center ${
                category.highlight
                  ? "border-2 border-[#8A33FD] shadow-lg"
                  : "bg-[#F5F6F8]"
              }`}
            >
              {/* Image */}
              <Image
                src={category.imgSrc}
                alt={category.name}
                width={120}
                height={120}
                className="object-contain"
              />
              {/* Highlight Button */}
              {category.highlight && (
                <div className="absolute bottom-12">
                  <button className="bg-[#3A9943] text-white text-xs px-4 py-1 rounded-md shadow">
                    View Shop
                  </button>
                </div>
              )}
            </div>

            {/* Title and Price */}
            <h3 className="text-[#1D1E4C] font-semibold">{category.name}</h3>
            <p className="text-[#8A8FB9]">{category.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        <span className="w-3 h-3 bg-[#FB2E86] rounded-full"></span>
        <span className="w-3 h-3 bg-[#E4E4E4] rounded-full"></span>
        <span className="w-3 h-3 bg-[#E4E4E4] rounded-full"></span>
      </div>
    </section>
  );
};

export default TopCategories;
