import React from "react";
import Link from "next/link";
export default function Header() {
    return (
        <div className="bg-purple-700 text-white py-2 px-6">
            <div className="container mx-auto flex flex-wrap justify-between text-sm">
                <div className="flex flex-wrap space-x-4">
                    <span className="block sm:inline">mhhasanul@gmail.com</span>
                    <span className="block sm:inline">(12345)67890</span>
                </div>
                <div className="flex flex-wrap justify-end space-x-4 mt-2 sm:mt-0">
                    <span className="hidden sm:block">English</span>
                    <span className="hidden sm:block">USD</span>
                    <Link href="/my-account" className="hover:underline">Login</Link>
                    <Link href="#" className="hover:underline">Wishlist</Link>
                    <Link href="/shopping-cart" className="hover:underline">Cart</Link>
                </div>
            </div>
        </div>
    );
}
