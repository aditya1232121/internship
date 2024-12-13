import React from "react";
import { FaChartBar, FaBalanceScale, FaCoins } from "react-icons/fa";
import hand from "../assets/hand.png";
import dicons from "../assets/people.png";
import bar from "../assets/grap.png";
import card from "../assets/Card.png";
import card1 from "../assets/prize.png";

const EventHighlights = () => {
  return (
    <>
      {/* Event Itinerary Title */}
      <div className="flex justify-center items-center w-full h-[90px] mt-8">
        <h1 className="text-center text-[#03624C] text-[128px] font-[600] w-[1102px] h-[90px] top-[2262px] left-[409px] font-montserrat">
          Event Highlights
        </h1>
      </div>

      <section className="py-20 bg-white">
        {/* Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 ">
          <img
            src={card}
            alt="card"
            className="w-[500px] h-[520px] rounded-[15px] top-[2482px] left-[240px] p-5   ml-[100px] mr-[100px] translate-x-[30px] transition-transform duration-300 hover:scale-110"/>
          <img
            src={bar}
            alt="Bar Graph"
            className="w-[500px] h-[500px] rounded-[15px] top-[2482px] left-[760px]p-5 ml-[100px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src={dicons}
            alt="3D Icons"
            className="w-[500px] h-[520px] rounded-[15px] top-[2482px] left-[1280px] p-4 ml-[100px] transition-transform duration-300 hover:scale-110"
          />
          {/* <img
            src={hand}
            alt="Hand"
            className="w-full h-auto rounded-[15px] p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          />
          <img
            src={card1}
            alt="Icons"
            className="w-full h-auto rounded-[15px] p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          /> */}
        </div>
        <div className="flex justify-center items-center space-x-4">
  <div className="relative group">
    <img
      src={hand}
      alt="Hand"
      className="w-[500px] h-[520px] rounded-[15px] p-4 transition-transform duration-300 hover:scale-110"
    />
  </div>
  <div className="relative group">
    <img
      src={card1}
      alt="Icons"
      className="w-[500px] h-[520px] rounded-[15px] p-4 transition-transform duration-300 hover:scale-110"
    />
  </div>
</div>


        {/* Highlights Section */}
        <div className="flex justify-center items-center w-full h-[90px] mt-8">
  <h1 className="text-center text-[#03624C] text-[120px] font-[600] w-[969px] h-[90px] mt-[-100px] font-montserrat">
    Event itinerary
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
