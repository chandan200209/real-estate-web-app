import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden container mx-auto py-10 lg:px-32 w-full"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 under decoration-1 font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-gray-500 mb-12 text-center mx-auto max-w-80">
        Real Stories From Those Who Found Home With Us
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[320px] border border-gray-200 shadow-lg text-center py-12 px-8 rounded "
          >
            <img
              className="w-20 h-20 rounded-full mb-4 mx-auto"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 text-sm mb-4">{testimonial.title}</p>
            <div className="flex gap-1  mb-4 justify-center">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img src={assets.star_icon} alt="star_icon"></img>
              ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
