import Link from "next/link";
import Image from "next/image";
export default function Newsletter() {
    return (
        <section>
            <div className="bg-white flex items-center justify-center py-10 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/imageNews.png)"}}>
                <div className="w-full max-w-4xl text-center px-6 p-8 ">
                    {/* Main text */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#0A0A23] font-custom">
                        Get Latest Update By Subscribe <br /> Our Newsletter
                    </h2>

                    {/* Button */}
                    <div className="mt-6">
                        <Link
                            href="#"
                            className="inline-block bg-[#FB2E86] text-white font-semibold px-5 py-2 rounded-md hover:bg-pink-700 transition-all duration-300"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
            {/* Decorative Section with Images */}
                  <div className="flex justify-center items-center mt-12 space-x-8 ">
                    <Image
                      src="/images/image news2.png"
                      alt="Author Live"
                      width={700}
                      height={700}
                      className="h-10 md:h-20 object-contain"
                    />
                  </div>
      </section >
    );
}
