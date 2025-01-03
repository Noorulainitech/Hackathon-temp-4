import Image from 'next/image';
export default function UniqueItem(){
        return (
          <div className="bg-purple-50 py-10">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6">
              <div className="lg:w-1/2">
                <Image
                  src="/images/image uni.png" // Replace with your image path
                  alt="Feature Product"
                  width={600}
                  height={400}
                  className="w-full rounded-lg shadow-md hover:shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-purple-900 mb-4">Unique Features Of Latest & Trending Products</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>All frames constructed with hardwood solids and laminates</li>
                  <li>Reinforced with double wood dowels, glue, screws, and corner blocks</li>
                  <li>Arms, backs, and seats are structurally reinforced</li>
                </ul>
                <button className="bg-pink-500 text-white px-6 py-2 rounded shadow hover:bg-pink-600">
                  Add To Cart
                </button>
                <p className="mt-4 text-lg font-semibold text-purple-900">B&B Italian Sofa - $32.00</p>
              </div>
            </div>
          </div>
        );
}