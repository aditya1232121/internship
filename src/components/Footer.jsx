import React from 'react';
import logo from "../assets/Logo.png"
const Footer = () => {
  return (
    <footer className>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <img src={logo} alt="Wealthify Me" className="h-[153px] t-[129px] left-[125px] w-[628px]" />
            <p className="text-[#4D4D4D] w-[629px] h-[14px] top-[308px] left-[119px] font-[20px] text-[500] font-sans">Stay connected with Wealthify for financial freedom at your fingertips.</p>
            <button className="mt-2 bg-black text-white w-[260px] h-[50px] top-[372px] left-[169px] rounded-[8px]">Download now</button>
          </div>
          <div className="w-[296px] h-[198px] top-[177px] left-[1478px] rounded-[10px] p-[25px] gap-[50px]">
            <h2 className="w-[200px] h-[34px] text-[30px] font-[700] font-space-grotesk mb-[20px] ">Contact</h2>
            <p className="w-[154px] h-[14px] top-[111px] left-[50px] rounded-[3px] font-sans font-[500] text-[20px] mb-[20px]">+91 1232789432</p>
            <p className="w-[246px] h-[18px] top-[205px] left-[25px] rounded-[3px] font-sans font-[500] text-[20px]">wealthify08@gmail.com</p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          <p className="w-[387px] h-[15px] top-[507px] left-[766px] font-sans text-[20px] font-[700]">&copy; Wealthify Me 2024 • All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;