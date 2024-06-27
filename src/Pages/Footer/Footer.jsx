import React from "react";
import { Logo_Image } from "../../assets/image.js";
import './Footer.css';
import { icon1, icon4 } from '../../assets/image.js';
import { icon2 } from "../../assets/image.js";
import { icon3 } from "../../assets/image.js";

const Footer = () => {
  return (
    <div className="2xl:container bg-[#EFF0F1] py-5">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-[roboto]">
        <div className="">
          <div className="py-4">
            <img src={Logo_Image} alt="Logo_Image" />
          </div>
          <div className="py-2 text-[#909394]">
            <h6>SRI SAI RAM ENGINEERING COLLEGE</h6>
          </div>
          <div className="text-[#909394]">
            <ul>
              <li>Sai Leo Nagar, West Tambaram,</li>
              <li>Chennai - 600044,</li>
              <li>Tamil Nadu, India.</li>
              <li></li>
            </ul>
            <br />
            <ul>
              <li className="">
                <div className="flex">
                  <strong>Phone:</strong>
                  <a className="text-[#909394] hover:text-[#005D99] px-1" href="tel:+91-44-22512111">
                    +91-44-22512111
                  </a>
                  <p className="text-[#909394] hover:text-[#005D99] px-1">/</p>
                  <a className="text-[#909394] hover:text-[#005D99] px-1" href="tel:22512333">
                    22512333
                  </a>
                </div>
                <a className="text-[#909394] hover:text-[#005D99] px-14" href="tel:+91-44-22512444">
                  +91-44-22512444
                </a>
              </li>
              <br />
              <li>
                <strong>Fax:</strong>
                <a className="text-[#909394] hover:text-[#005D99] px-6" href="tel:+91-44-22512323">
                  +91-44-22512323
                </a>
              </li>
              <br />
              <li>
                <strong>Mail:</strong>
                <a className="text-[#909394] hover:text-[#005D99] py-2 px-5" href="sairam@sairam.edu.in">
                  sairam@sairam.edu.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-4 px-20">
          <h6 className="text-black font-bold">EXPLORE SEC</h6>
          <ul>
            <li className="text-[#909394] hover:text-[#005D99] py-2">An Overview</li>
            <li className="text-[#909394] hover:text-[#005D99] py-2">Vision Mission</li>
            <li className="text-[#909394] hover:text-[#005D99] py-2">Founder Chairman’s Message</li>
            <li className="text-[#909394] hover:text-[#005D99] py-2">CEO’s Message</li>
            <li className="text-[#909394] hover:text-[#005D99] py-2">Principal’s Message</li>
          </ul>
        </div>
        <div className="py-4 px-20">
          <h6 className="text-black font-bold">INFORMATION HUB</h6>
          <ul>
            <li className="text-[#909394] hover:text-[#005D99] py-2">AICTE Approval Copy</li>
            <li className="text-[#909394] hover:text-[#005D99] py-2">Vision Mission</li>
            <li className="text-[#909394] hover:text-[#005D99] py-2">Founder Chairman’s Message</li>
            <li className="text-[#909394] hover:text-[#005D99] py-2">CEO’s Message</li>
            <li className="text-[#909394] hover:text-[#005D99] py-2">Principal’s Message</li>
          </ul>
        </div>
        <div className="py-4 px-20">
          <h6 className="text-black font-bold">QUICK LINKS</h6>
          <ul>
            <li className="text-[#909394] hover:text-[#005D99] py-2">SDG Goals</li>
            <li className="text-[#909394] hover:text-[#005D99] py-2">Vision Mission</li>
            <li className="text-[#909394] hover:text-[#005D99] py-2">Founder Chairman’s Message</li>
            <li className="text-[#909394] hover:text-[#005D99] py-2">CEO’s Message</li>
            <li className="text-[#909394] hover:text-[#005D99] py-2">Principal’s Message</li>
          </ul>
        </div>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-1 py-5">
        <div className="flex flex-col justify-end items-center space-y-2">
          <p className="rights text-[12px] md:text-lg">© Sri Sairam Engineering College, 2024. All rights reserved</p>
          <div className="flex">
            <div className="flex justify-center items-center">
              <a href="https://www.facebook.com/sairamec">
                <img src={icon1} alt="icon1" className="w-[48px] px-2" />
              </a>
              <a href="https://www.instagram.com/sairamec/">
                <img src={icon2} alt="icon1" className="w-[58px] px-2" />
              </a>
              <a href="https://twitter.com/sairam_EC">
                <img src={icon3} alt="icon1" className="w-[48px] px-2" />
              </a>
              <a href="https://www.linkedin.com/school/sri-sairam-engineering-college/about/">
                <img src={icon4} alt="icon1" className="w-[48px] px-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
