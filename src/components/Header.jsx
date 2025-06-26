import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      className="min-h-screen w-full overflow-hidden bg-cover bg-center mb-4 flex items-center"
      id="Header"
      style={{ backgroundImage: "url('/header_img.png')" }}
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto px-6 md:px-20 lg:px-32 py-4 text-white"
      >
        <h2 className="text-5xl sm:text-6xl md:text-[82px] max-w-3xl font-semibold pt-20 inline-block">
          Explore homes that fit your dreams.
        </h2>
        <div className="space-x-3 pt-16">
          <a href="#Projects" className="border border-white px-8 py-3 rounded">
            Projects
          </a>
          <a href="#Contact" className="bg-blue-500 rounded px-8 py-3">
            Contact us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
