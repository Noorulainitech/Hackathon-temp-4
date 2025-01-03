import React from "react";
import Link from "next/link";
import Image from "next/image";

const ShoppingCartHeader = () => {
  return (
    <div className="w-full bg-[#F6F5FF] py-10 px-5">
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center md:text-left">
          Shopping Curt
        </h1>

        {/* Breadcrumb */}
        <p className="text-gray-600 text-sm text-center md:text-left">
          <Link href="#" className="text-gray-500 hover:underline">
            Home
          </Link>{" "}
          <span className="text-gray-500">,</span>{" "}
          <span>Pages</span>{" "}
          <Link href="#" className="text-pink-500 font-medium hover:underline">
            Shopping Curt
          </Link>
        </p>
      </div>
    </div>
  );
};


const CartPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Products Table */}
        <div className="col-span-2">
          <div className="bg-white shadow-md rounded-lg p-4">
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm font-bold text-gray-600 border-b">
                  <th className="py-2">Product</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    src: "/images/sc1.png",
                    name: "Ut diam consequat",
                    color: "Brown",
                    size: "Medium",
                    price: "$120.00",
                    total: "$120.00",
                  },
                  {
                    src: "/images/sc2.png",
                    name: "Elegant Chair",
                    color: "Beige",
                    size: "Standard",
                    price: "$85.00",
                    total: "$85.00",
                  },
                  {
                    src: "/images/sc3.png",
                    name: "Wooden Table",
                    color: "Brown",
                    size: "Large",
                    price: "$200.00",
                    total: "$200.00",
                  },
                  {
                    src: "/images/sc4.png",
                    name: "Designer Lamp",
                    color: "Black",
                    size: "Small",
                    price: "$60.00",
                    total: "$60.00",
                  },
                  {
                    src: "/images/sc5.png",
                    name: "Cozy Armchair",
                    color: "Blue",
                    size: "Large",
                    price: "$150.00",
                    total: "$150.00",
                  },
                ].map((sc, index) => (
                  <tr key={index} className="text-sm border-b">
                    <td className="py-4 flex items-center">
                      <Image
                        src={sc.src}
                        alt={sc.name}
                        width={100}
                        height={100}
                        className="w-16 h-16 rounded-md mr-4"
                      />
                      <div>
                        <p className="font-medium">{sc.name}</p>
                        <p className="text-gray-500 text-xs">Color: {sc.color}</p>
                        <p className="text-gray-500 text-xs">Size: {sc.size}</p>
                      </div>
                    </td>
                    <td className="py-4">{sc.price}</td>
                    <td className="py-4">
                      <input
                        type="number"
                        className="w-12 border border-gray-300 rounded px-2 py-1"
                        defaultValue="1"
                      />
                    </td>
                    <td className="py-4">{sc.total}</td>
                  </tr>
                ))}
              </tbody>

            </table>
            <div className="flex justify-between mt-4">
              <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                Update Cart
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Clear Cart
              </button>
            </div>
          </div>
        </div>

        {/* Cart Totals */}
        <div>
          <div className="bg-white shadow-md rounded-lg p-4 mb-8">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
            <div className="flex justify-between text-sm">
              <p>Subtotal:</p>
              <p>£219.00</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Total:</p>
              <p>£325.00</p>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="bg-green-500 w-full text-white mt-4 py-2 rounded hover:bg-green-600">
              Proceed To Checkout
            </button>
          </div>

          {/* Calculate Shipping */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Calculate Shopping</h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>
              <button className="bg-pink-500 w-full text-white py-2 rounded hover:bg-pink-600">
                Calculate Shipping
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function ShoppingCartPAge() {
  return (
    <div>
      {/* Shop Grid Header */}
      <ShoppingCartHeader />
      <CartPage />
    </div>
  );
}