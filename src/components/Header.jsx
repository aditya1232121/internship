import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.png";

const Header = () => {
  const [timeRemaining, setTimeRemaining] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const eventDate = new Date("2024-12-20T00:00:00"); // Set your event date and time
    const interval = setInterval(() => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeRemaining("Event has started!");
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Timer Section */}
      <div
        className="w-full text-white py-2 text-center font-montserrat z-20"
        style={{ backgroundColor: "rgba(33, 163, 103, 1)" }}
      >
        <p className="font-montserrat font-semibold text-lg sm:text-xl md:text-2xl">
          The Event starts in: {timeRemaining}
        </p>
      </div>

      {/* Navbar Section */}
      <nav className="w-full flex justify-between items-center px-4 sm:px-6 py-4 bg-white shadow-md sticky top-0 z-10">
        {/* Logo */}
        <img
          src={logo}
          alt="Wealthify Logo"
          className="w-[150px] sm:w-[200px] md:w-[242px] h-auto"
        />

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden flex items-center justify-center p-2 text-black"
          onClick={() => setIsMenuOpen((prev) => !prev)}
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
        <ul className="hidden lg:flex space-x-8 text-sm md:text-lg ml-auto">
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

        {/* Desktop Join Button */}
        <button className="hidden lg:flex px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 ml-6 items-center">
          Download now
          <span className="ml-2">→</span>
        </button>

        {/* Mobile Navbar Menu */}
        {isMenuOpen && (
          <div className="absolute top-[60px] right-0 w-full bg-white shadow-lg lg:hidden z-20">
            <ul className="flex flex-col space-y-4 py-4 px-6 text-center">
              <li className="opacity-60 hover:opacity-100 hover:underline cursor-pointer transition-opacity duration-300">
                Home
              </li>
              <li className="opacity-60 hover:opacity-100 hover:underline cursor-pointer transition-opacity duration-300">
                Stressometer
              </li>
              <li className="opacity-60 hover:opacity-100 hover:underline cursor-pointer transition-opacity duration-300">
                About
              </li>
              <li>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 w-full">
                  Download now
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
