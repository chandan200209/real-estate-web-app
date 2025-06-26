import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div className="w-full absolute top-0 left-0 z-10">
      <div className=" flex items-center mx-auto container px-8 py-4 justify-between md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="logo" className="cursor-pointer" />
        <ul className="text-white md:flex gap-7 hidden">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </a>
        </ul>
        <button className="px-8 py-2 hidden md:block bg-white rounded-full cursor-pointer">
          Sign up
        </button>

        <img
          src={assets.menu_icon}
          onClick={() => setShowMobileMenu(true)}
          className="md:hidden w-7 cursor-pointer"
          alt="menu_icon"
        />
      </div>
      {/* mobile menu */}
      <div
        className={`md:hidden right-0 top-0 bottom-0 ${
          showMobileMenu ? "fixed w-full" : "w-0 h-0"
        } overflow-hidden bg-white
         transition-all`}
      >
        <div className="flex p-6 justify-end cursor-pointer">
          <img
            src={assets.cross_icon}
            onClick={() => setShowMobileMenu(false)}
            alt="cross_icon"
            className="w-6"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 font-medium text-lg mt-5 px-5">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 inline-block rounded-full"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="px-4 py-2 inline-block rounded-full"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Projects"
            className="px-4 py-2 inline-block rounded-full"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 inline-block rounded-full"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
