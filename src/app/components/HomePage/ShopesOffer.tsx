import Image from "next/image";
  export default function ShopesOffers(){
    const features = [
      {
        title: "24/7 Support",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
        icon: "/images/free-delivery.png" // Replace with the correct path for your icon
      },
      {
        title: "24/7 Support",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
        icon: "/images/cash-back.png" // Replace with the correct path for your icon
      },
      {
        title: "24/7 Support",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
        icon: "/images/quality-product.png" // Replace with the correct path for your icon
      },
      {
        title: "24/7 Support",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
        icon: "/images/support.png" // Replace with the correct path for your icon
      }
    ];
  
    return (
      <div className="py-16 bg-white flex justify-center space-x-6">
        <div className="container mx-auto px-6 text-center ">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Shopex Offer!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                  className="w-16 h-18 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-[#151875] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
  
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };