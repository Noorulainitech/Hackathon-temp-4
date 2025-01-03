import Head from 'next/head';
import Image from 'next/image';
export default function Feature() {
  // Array of products for the featured section
  const products = [
    {
      imgSrc: "/images/image h1.png",
      name: "Cantilever Chair",
      code: "Y912001",
      price: "$42.00",
    },
    {
      imgSrc: "/images/image h2.png",
      name: "Wingback Chair",
      code: "Y912002",
      price: "$56.00",
    },
    {
      imgSrc: "/images/image h3.png",
      name: "Modern Armchair",
      code: "Y912003",
      price: "$67.00",
    },
    {
      imgSrc: "/images/image h4.png",
      name: "Classic Lounge Chair",
      code: "Y912004",
      price: "$75.00",
    },
  ];

  return (
    <>
      <Head>
        <title>UI/UX Hackathon Project - Featured</title>
        <meta name="description" content="UI/UX Hackathon Project Featured Page" />
      </Head>

      <FeaturedSection products={products} />
    </>
  );
}

const FeaturedSection = ({ products }: { products: { imgSrc: string; name: string; code: string; price: string }[] }) => (
  <section className="py-16 px-6">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <Image
              src={product.imgSrc}
              alt={product.name}
              width={300} // Adjusted width for responsiveness
              height={300} // Adjusted height for responsiveness
              className="w-full h-52 object-contain" // Adjusted height and object behavior
            />
            <div className="p-4 text-center hover:bg-[#2F1AC4] transition">
              <h3 className="text-lg font-semibold text-[#FB2E86] hover:text-white">{product.name}</h3>
              <div className="flex justify-center space-x-2">
                <span className="w-4 h-[2px] bg-[#05E6B7]"></span>
                <span className="w-4 h-[2px] bg-[#F701A8] hover:bg-yellow transition"></span>
                <span className="w-4 h-[2px] bg-[#00009D] "></span>
              </div>
              <p className="text-sm text-gray-500 mt-1 hover:text-white">Code: {product.code}</p>
              <p className="text-lg font-bold mt-2 hover:text-white">{product.price}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  </section>
);
