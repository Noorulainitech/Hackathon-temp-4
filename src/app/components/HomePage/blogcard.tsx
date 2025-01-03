import Image from "next/image";
import Link from "next/link";

export default function BlogCard() {
    const blogs = [
      {
        image: "/images/Frame 1.png",
        author: "Saber Ali",
        date: "21 August 2020",
        title: "Top essential Trends in 2021",
        description:
          "More off this less hello samlande lied much over tightly circa horse taped mighty.",
        link: "#",
      },
      {
        image: "/images/Frame 2.png",
        author: "Surfusion",
        date: "21 August 2020",
        title: "Top essential trends in 2021",
        description:
          "More off this less hello samlande lied much over tightly circa horse taped mighty.",
        link: "#",
      },
      {
        image: "/images/Frame 3.png",
        author: "Saber Ali",
        date: "21 August 2020",
        title: "Top essential Trends in 2021",
        description:
          "More off this less hello samlande lied much over tightly circa horse taped mighty.",
        link: "#",
      },
    ];
  
    return (
      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#0A0A23] mb-8">
            Latest Blog
          </h2>
  
          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Blog Image */}
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width="100"
                  height="100"
                  className="w-full h-52 object-cover"
                />
  
                {/* Blog Content */}
                <div className="p-5">
                  {/* Blog Meta */}
                  <div className="text-sm text-gray-500 flex justify-between mb-3">
                    <span className="text-pink-600">{blog.author}</span>
                    <span>{blog.date}</span>
                  </div>
  
                  {/* Blog Title */}
                  <h3 className="text-lg font-semibold text-[#0A0A23] mb-2">
                    {blog.title}
                  </h3>
  
                  {/* Blog Description */}
                  <p className="text-gray-500 text-sm mb-4">
                    {blog.description}
                  </p>
  
                  {/* Read More Link */}
                  <Link
                    href={blog.link}
                    className="text-pink-600 font-medium hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  