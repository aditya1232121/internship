import React from 'react';
import rectangle from "../assets/Rectangle 881.png";
import graph from "../assets/graph.png";
import buttonImage from "../assets/Button.png";
import candel from "../assets/Candlered.png";
import candel1 from "../assets/Candle.png";
import finothon from "../assets/FINOTHON.png";
import pwed from "../assets/Pwed by.png";

const HeroSection = () => {
  return (
    <section className="hero bg-gray-50 text-left px-4 py-8">
      {/* Container for the image */}
      <div className="relative">
        {/* Image */}
        <img
          src={rectangle}
          alt="Finothon Rectangle"
          className="w-[1820px] h-[849px] top-[183px] left-[50px] ml-[35px] mr-[30px] mb-[60px] translate-x-[-20px]"
        />
 <div className="absolute bottom-0 left-0 p-6 text-white">
          <div className="max-w-xs">
            <h1 className="w-[500px] h-[35px] top-[775px] left-[117px] font-sans font-[500] text-[60px] translate-x-[-50px] ml-[50px] mb-2">The First Ever</h1>
            <strong className="w-[500px] h-[60px] top-[920px] left-[110px] font-montserrat font-[700] text-[180px] translate-x-[-60px] ml-[60px] ">Finothon</strong>
          </div>
        </div>
        {/* Button with Image Only */}
        <div className="absolute bottom-4 right-4">
          <button className="p-0 border-none bg-transparent">
            <img
              src={buttonImage}
              alt="Wealthify Button"
              className="w-[425px] h-[119px] top-[913px] left-[1445px] rounded-tl-[10px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[40px]"
            />
          </button>
        </div>
      </div>

      {/* "The Ultimate Financial Analysis Challenge" Section */}
      <div className="flex items-start mt-4 py-6">
        <h1 className="text-[#6E737C] font-Montserrat px-3 py-2 text-[48px] font-[500] ml-[25px]">
          The Ultimate Financial Analysis Challenge
        </h1>
      </div>

      <div className="flex flex-col space-y-6">
  {/* Row for FINOTHON and Candles */}
  <div className="flex items-center space-x">
    {/* FINOTHON Text */}
    <h1 className="text-[#03624C] w-[1138px] h-[140px] top-[1247px] left-[55px] font-montserrat text-[150px] font-[700] transform translate-y-[-30px] translate-x-[-150px] ml-[30px] ">
      FINOTHON
    </h1>

    {/* Candles Images (Side by Side) */}
    <div className="flex space-x-2">
      <img
        src={candel}
        alt="candel"
        className="w-[30px] h-[68px] top-[1283px] left-[1213px] translate-x-[-120px]"
      />
      <img
        src={candel1}
        alt="candel1"
        className="w-[30px] h-[180px] top-[1227px] left-[1248px] translate-x-[-120px]"
      />
    </div>
  </div>

  {/* Column Flexbox for PWED and Paragraph */}
  <div className="flex items-center space-x-0">
  {/* PWED Image */}
  <div>
    <img
      src={pwed}
      alt="pwed"
      className="w-[70px] h-[54px] top-[1427px] left-[65px] mb-[30px] ml-[35px]"
    />
  </div>

  {/* New Paragraph for PWED */}
  <div>
    <p className="text-[#A8A8A8] w-[301px] h-[17px] top-[1449px] left-[129px] text-[24px] font-[500] font-sansmb-[35px]">
      Powered by TheWealthifyMe
    </p>
  </div>
</div>

    </div>
      {/* Paragraph with "Finothon is not just a competition" aligned to the left */}
      <div className="mt-8 px-0 mx-0">
  <p className="font-sans text-[24px] font-[500] text-[#474B53] leading-relaxed text-left m ml-[25px]">
    Finothon is not just a competition; it's a journey into the fascinating world of data and finance. <br />
    Participants will be challenged with real-world SMS and email datasets to analyze and craft detailed financial reports. <br />
    Whether you're a student, a budding analyst, or a seasoned data enthusiast, Finothon is your platform to shine.
  </p>
</div>




      {/* Bottom Buttons */}
      <div className="mt-6 grid grid-rows-2 gap-4 w-full">
        <button className="px-4 py-2 bg-yellow-500 text-black pt-[15px] pr-[40px] pb-[35px] pl-[40px] w-[500px] h-[42px] top-[1656px] left-[65px] rounded-[30px] gap-[10px] font-sans text-[16px] font-[700] ml-[25px]">
          Registrations end soon. Hurry up and grab your spot!
        </button>
        <button className="px-6 py-2 bg-black text-white w-[200px] font-[500] text-[20px] font-sans ml-[25px]">
  Register now
</button>
      </div>

      {/* Graph Image */}
      <div className="mt-8">
        <img src={graph} alt="graph" className="w-[1961px] h-[819px] top-[21px] left-[-33px] object-cover" />
      </div>
    </section>
  );
};

export default HeroSection;
