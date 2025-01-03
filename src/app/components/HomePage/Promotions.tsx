import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  const promotions = [
    {
      id: 1,
      title: "23% off in all products",
      linkText: "Shop Now",
      imgSrc: "/images/image p1.png",
      bgColor: "bg-[#FFF6FB]",
    },
    {
      id: 2,
      title: "23% off in all products",
      linkText: "View Collection",
      imgSrc: "/images/image p2.png",
      bgColor: "bg-[#EEEFFB]",
    },
  ];

  const products = [
    { id: 1, name: "Executive Seat chair", price: "$32.00", imgSrc: "/images/image p3.png" },
    { id: 2, name: "Executive Seat chair", price: "$32.00", imgSrc: "/images/image p4.png" },
    { id: 3, name: "Executive Seat chair", price: "$32.00", imgSrc: "/images/image p5.png" },
  ];

  return (
    <div>
      <Head>
        <title>Responsive Layout</title>
      </Head>
      <section className="bg-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Promotional Cards */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {promotions.map((promo) => (
              <div
                key={promo.id}
                className={`relative ${promo.bgColor} p-6 rounded-lg flex items-center`}
              >
                <div className="text-blue-800 space-y-4">
                  <h3 className="text-xl font-bold text-[#151875]">{promo.title}</h3>
                  <Link
                    href="#"
                    className="text-sm underline decoration-solid text-[#FB2E86] hover:text-gray-600"
                  >
                    {promo.linkText}
                  </Link>
                </div>
                <Image
                  src={promo.imgSrc}
                  alt={promo.title}
                  width={100}
                  height={100}
                  className="absolute right-4 bottom-4"
                />
              </div>
            ))}
          </div>

          {/* Right Product List */}
          <div className="bg-white p-6 rounded-lg">
            <ul className="space-y-4">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center justify-left border-b pb-2 gap-4"
                >
                  <Image
                    src={product.imgSrc}
                    alt={product.name}
                    width={50}
                    height={50}
                    className="rounded bg-[#F5F6F8]"
                  />
                  <div>
                    <h4 className="text-sm font-medium">{product.name}</h4>
                    <p className="text-sm text-gray-500">{product.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
