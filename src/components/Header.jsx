// import React, { useState, useEffect } from "react";
// import logo from "../assets/Logo.png";

// const Header = () => {
//   const [timeRemaining, setTimeRemaining] = useState("");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const eventDate = new Date("2024-12-20T00:00:00"); // Set your event date and time
//     const interval = setInterval(() => {
//       const now = new Date();
//       const difference = eventDate - now;

//       if (difference > 0) {
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//         const minutes = Math.floor((difference / (1000 * 60)) % 60);
//         const seconds = Math.floor((difference / 1000) % 60);

//         setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
//       } else {
//         setTimeRemaining("Event has started!");
//         clearInterval(interval);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//     <>
//       {/* Timer Section */}
//       <div
//         className="w-full text-white py-2 text-center font-montserrat z-20"
//         style={{ backgroundColor: "rgba(33, 163, 103, 1)" }}
//       >
//         <p className="font-montserrat font-semibold text-lg sm:text-xl md:text-2xl">
//           The Event starts in: {timeRemaining}
//         </p>
//       </div>

      {/* Navbar Section */}
      import React, { useState } from "react";
import logo from "../assets/Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-10">
      {/* Logo */}
      <img
        src={logo}
        alt="Wealthify Logo"
        className="w-[241.61px] h-[59px]"
      />
      
      {/* Mobile Hamburger Button */}
      <button
        className="lg:hidden flex items-center justify-center p-2 text-black ml-auto"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Desktop Navbar Menu */}
      <ul className="hidden lg:flex space-x-8 text-lg ml-auto">
        <li className="opacity-60 hover:opacity-100 hover:underline cursor-pointer transition-opacity duration-300">
          Home
        </li>
        <li className="opacity-60 hover:opacity-100 hover:underline cursor-pointer transition-opacity duration-300">
          Stressometer
        </li>
        <li className="opacity-60 hover:opacity-100 hover:underline cursor-pointer transition-opacity duration-300">
          About
        </li>
      </ul>

      {/* Desktop Download Button */}
      <button className="hidden lg:flex px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 ml-6 flex items-center">
        Download Now
        <span className="ml-2">→</span>
      </button>

      {/* Mobile Menu (When Opened) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg p-6 w-full">
          <ul className="space-y-6">
            <li className="hover:underline cursor-pointer text-xl">Home</li>
            <li className="hover:underline cursor-pointer text-xl">Stressometer</li>
            <li className="hover:underline cursor-pointer text-xl">About</li>
          </ul>
          <button className="w-full mt-6 py-2 bg-black text-white rounded-lg flex justify-center items-center">
            Download Now <span className="ml-2">→</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;