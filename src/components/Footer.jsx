import React from 'react';
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Footer Main Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Text Section */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <img 
              src={logo} 
              alt="Wealthify Me" 
              className="mx-auto md:mx-0 h-auto max-w-[300px] md:max-w-[500px]" 
            />
            <p className="text-[#4D4D4D] mt-4 text-[14px] md:text-[18px] leading-6 max-w-[400px] mx-auto md:mx-0">
              Stay connected with Wealthify for financial freedom at your fingertips.
            </p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded-[8px] text-[14px] md:text-[16px]">
              Download now
            </button>
          </div>

          {/* Contact Section */}
          <div className="mt-8 md:mt-0">
            <div className="bg-white shadow-md p-6 rounded-[10px] max-w-[300px] mx-auto md:mx-0">
              <h2 className="text-[20px] md:text-[24px] font-[700] mb-4 text-center md:text-left">
                Contact
              </h2>
              <p className="text-[14px] md:text-[18px] font-[500] mb-2 text-center md:text-left">
                +91 1232789432
              </p>
              <p className="text-[14px] md:text-[18px] font-[500] text-center md:text-left">
                wealthify08@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex justify-center items-center mt-8">
          <p className="text-[12px] md:text-[16px] font-[700] text-center">
            &copy; Wealthify Me 2024 • All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
