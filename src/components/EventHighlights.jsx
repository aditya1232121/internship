import React, { useState, useEffect } from "react";
import { FaChartBar, FaBalanceScale, FaCoins } from "react-icons/fa";
import hand from "../assets/hand.png";
import dicons from "../assets/people.png";
import bar from "../assets/grap.png";
import card from "../assets/Card.png";
import card1 from "../assets/prize.png";

const EventHighlights = () => {
  // State to store screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Breakpoint for mobile
  const isMobile = screenWidth < 768;

  return (
    <>
      {/* Event Itinerary Title */}
      <div className={`flex justify-center items-center font-montserrat w-full mt-8 ${isMobile ? "h-[60px]" : "h-[90px]"}`}>
  <h1 className={`text-center font-[600] text-[60px] text-[#03624C] text-${isMobile ? "48px" : "160px"}`}>
    Event Highlights
  </h1>
</div>


      <section className="py-20 bg-white">
        {/* Images Section */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6`}>
          <img
            src={card}
            alt="card"
            className={`w-full h-auto rounded-[15px] p-5 transition-transform duration-300 hover:scale-110 ${isMobile ? "w-full" : "w-[500px] h-[520px]"}`}
          />
          <img
            src={bar}
            alt="Bar Graph"
            className={`w-full h-auto rounded-[15px] p-5 transition-transform duration-300 hover:scale-110 ${isMobile ? "w-full" : "w-[500px] h-[500px]"}`}
          />
          <img
            src={dicons}
            alt="3D Icons"
            className={`w-full h-auto rounded-[15px] p-4 transition-transform duration-300 hover:scale-110 ${isMobile ? "w-full" : "w-[500px] h-[520px]"}`}
          />
        </div>

        {/* Image Group Section */}
        <div className={`flex justify-center items-center space-x-4 ${isMobile ? "flex-col" : "flex-row"}`}>
          <div className="relative group">
            <img
              src={hand}
              alt="Hand"
              className={`w-full h-auto rounded-[15px] p-4 transition-transform duration-300 hover:scale-110 ${isMobile ? "w-full" : "w-[500px] h-[520px]"}`}
            />
          </div>
          <div className="relative group">
            <img
              src={card1}
              alt="Icons"
              className={`w-full h-auto rounded-[15px] p-4 transition-transform duration-300 hover:scale-110 ${isMobile ? "w-full" : "w-[500px] h-[520px]"}`}
            />
          </div>
        </div>

        {/* Highlights Section */}
        <div className={`flex justify-center items-center font-montserrat w-full mt-8 ${isMobile ? "h-[60px]" : "h-[90px]"}`}>
          <h1 className={`text-center text-[#03624C] text-[60px] font-montserrat text-${isMobile ? "24px" : "120px"} font-[600]`}>
            Event Itinerary
          </h1>
        </div>
      </section>
    </>
  );
};

const HighlightCard = ({ title, icon }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
    {icon}
    <h3 className="text-xl font-semibold mt-4">{title}</h3>
  </div>
);

export default EventHighlights;
