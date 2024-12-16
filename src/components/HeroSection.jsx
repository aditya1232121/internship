import React, { useState, useEffect } from "react";
import rectangleDesktop from "../assets/Rect.png";
import rectangleMobile from "../assets/vector.png";
import graph from "../assets/graph.png";
import buttonDesktop from "../assets/Button.png"; // Button for desktop
import buttonMobile from "../assets/sponsor.png"; // Button for mobile

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="hero bg-gray-50 text-left px-4 py-8 relative">
      {/* Background Image Container */}
      <div className="relative w-full h-auto">
        {/* Background Image */}
        <img
          src={isMobile ? rectangleMobile : rectangleDesktop}
          alt="Finothon Rectangle"
          className="w-full h-auto object-cover" // Ensure it covers the area without distortion
        />

        {/* Button Positioned at the Extreme Bottom-Right */}
        <button
          className="absolute"
          style={{
            bottom: "10px", // Small offset from the bottom for better alignment
            right: "10px", // Offset to move the button further to the extreme right
          }}
        >
          <img
            src={isMobile ? buttonMobile : buttonDesktop}
            alt="Wealthify Button"
            className={`rounded-tl-[10px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[40px] ${
              isMobile ? "w-[100px] h-[50px]" : "w-[425px]" // Mobile: reduced size, Desktop: unchanged size
            }`}
          />
        </button>
      </div>

      {/* Subtitle Section */}
      <div className="flex items-start mt-6">
        <h1
          className={`text-[#6E737C] font-Montserrat font-[500] ${
            isMobile ? "text-[24px]" : "text-[48px]"
          }`}
        >
          The Ultimate Financial Analysis Challenge
        </h1>
      </div>

      {/* Additional Content */}
      <p
        className={`font-sans text-[#474B53] leading-relaxed mt-8 ${
          isMobile ? "text-[16px]" : "text-[24px]"
        }`}
      >
        Finothon is not just a competition; it's a journey into the fascinating world <br/>of data and
        finance. Participants will be challenged with real-world SMS and email datasets to analyze
        and craft detailed financial reports <br/>Whether you're a student, a budding analyst, or a
        seasoned data enthusiast, Finothon is your platform to shine.
      </p>

      {/* Bottom Buttons */}
      <div className="mt-6 grid grid-rows-2 gap-4 w-full">
        <button
          className={`px-2 py-1 bg-yellow-500 text-black font-sans font-[700] rounded-[30px] translate-x-[-10px] text-center ${
            isMobile
              ? "w-[220px] h-[35px] text-[12px] px-3 py-s" // Smaller text and button size for mobile
              : "w-[500px] h-[42px] text-[16px] px-8 py-4" // Default size for desktop
          }`}
        >
          Registrations end soon !
        </button>
        <button
          className="px-6 py-2 bg-black text-white w-[200px] font-[500] text-[20px] font-sans"
          style={{ marginLeft: "0px", left: "0" }} // Removed extra margin and adjusted position
        >
          Register now
        </button>
      </div>

      {/* Graph Image */}
      <div className="mt-8">
        <img src={graph} alt="Graph" className="w-full h-auto object-cover" />
      </div>
    </section>
  );
};

export default HeroSection;
