import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="px-8 md:px-20 lg:px-32 pt-10 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="flex flex-col md:flex-row container mx-auto justify-between items-start">
        <div className="mb-8 md:mb-8 w-full md:w-1/3">
          <img src={assets.logo_dark} alt="logo_dark" />
          <p className="text-gray-400 mt-4">
            Explore a curated selection of exquisite properties, from cozy
            family residences to luxurious estates, all designed to fit your
            unique lifestyle.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About us
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact us
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white font-bold text-lg mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="max-w-80 text-gray-400">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-3 mt-3">
            <input
              className="text-gray-400 bg-gray-800 p-2 rounded border border-gray-700 focus:outline-none
              w-full md:w-auto"
              type="email"
              placeholder="Enter Your Email"
            />
            <button className="bg-blue-500 cursor-pointer text-white rounded px-4 py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500 text-sm">
        Copyright 2025 &copy; GreakStack. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
