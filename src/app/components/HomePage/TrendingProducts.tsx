import Image from "next/image";

export default function TrendingProducts() {
  const products = [
    {
      id: 1,
      name: "Cantilever t",
      price: "$26.00",
      oldPrice: "$40.00",
      image: "/images/image t1.png", // Replace with actual paths
    },
    {
      id: 2,
      name: "Cantilever t",
      price: "$26.00",
      oldPrice: "$40.00",
      image: "/images/image t2.png",
    },
    {
      id: 3,
      name: "Cantilever t",
      price: "$26.00",
      oldPrice: "$40.00",
      image: "/images/image t3.png",
    },
    {
      id: 4,
      name: "Cantilever t",
      price: "$26.00",
      oldPrice: "$40.00",
      image: "/images/image t4.png",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
          Trending Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
            >
              {/* Product Image */}
              <div className="w-full h-48 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-t-md p-6 bg-[#F5F6F8]"
                />
              </div>

              {/* Product Details */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-gray-800">
                  {product.name}
                </h3>
                <div className="flex justify-evenly">
                <p className="text-pink-600 text-lg font-semibold">
                  {product.price}
                </p>
                <p className="text-gray-400 line-through text-sm">
                  {product.oldPrice}
                </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
