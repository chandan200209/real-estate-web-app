import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center justify-center flex-col p-12 md:px-20 lg:px-32 container mx-auto overflow-hidden w-full"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold pb-2">
        {" "}
        About{" "}
        <span className="underline underline-offset-4 under decoration-1 font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 ">
        Passionate About Properties, Dedicated to Your Vision.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt="brand_img"
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 2xl:pr-28 gap-6 md:gap-6 w-full">
            <div>
              <p className="text-4xl text-gray-800 font-medium">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl text-gray-800 font-medium">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl text-gray-800 font-medium">20+</p>
              <p>Mn. Sq. Feet Delivered</p>
            </div>
            <div>
              <p className="text-4xl text-gray-800 font-medium">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            {" "}
            Explore a curated selection of exquisite properties, from cozy
            family residences to luxurious estates, all designed to fit your
            unique lifestyle. Our passion is connecting people with their
            perfect space, and we're dedicated to providing unparalleled service
            and expert guidance every step of the way.
          </p>
          <button className="px-8 py-2 cursor-pointer bg-blue-600 text-white rounded">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
