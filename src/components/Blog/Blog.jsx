import React from "react";
import Heading from "../Shared/Heading";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";


const BlogData= [
    {
        title:"How to Choose a perfect Smartwatch",
        subtitle: "Ensure compatibility with your smartphone's OS. Prioritize essential features like fitness tracking and notifications. Consider battery life, design, and comfort. Check reviews and compare models to find the best fit for your lifestyle.",
        published: "Feb 15, 2024 by Arjun",
        img: Img1,
        aosDelay: "0",
    },
    {
        title:"How to Choose perfect Gadget",
        subtitle: "Ensure it meets your needs and is compatible with your devices. Prioritize features, performance, and battery life. Consider design, build quality, and ease of use. Check reviews and compare models to find the best fit for your lifestyle.",
        published: "March 20, 2024 by Turner",
        img: Img2,
        aosDelay: "200",
    },
    {
        title:"How to Choose a perfect VR headset",
        subtitle: "Ensure compatibility with your device. Prioritize features like resolution, field of view, and tracking capabilities. Consider comfort, weight, and battery life. Check reviews and compare models to find the best fit for your needs.",
        published: "May 23, 2024 by Shilpa",
        img: Img3,
        aosDelay: "400",
    },
    
];

const Blog = () => { 
  return <div className="my-12">
      <div className="container">
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />

        {/* Blog Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">

        {/* Blog Card */}
        {
            BlogData.map((data) => (
                <div data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.title} className="bg-white dark:bg-gray-900">
                    {/* Img section */}
                    <div className="overflow-hidden rounded-2xl mb-2">
                    <img className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                    src={data.img} alt="" />
                    </div>
                    {/* Content section */}
                    <div className="space-y-2">
                        <p className="text-xs text-gray-500">{data.published}</p>
                        <p className="font-bold line-clamp-1">{data.title}</p>
                        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.subtitle}</p>
                    </div>
                </div>
            ))
        }

        </div>

      </div>
    </div>;
};

export default Blog;
