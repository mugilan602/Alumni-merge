import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="2xl:container h-[10vh]  bg-[#005D99]">
      <div className="w-[90%] mx-auto grid grid-cols-1 h-[100%] ">
        <div className="flex justify-end items-center w-[100%] h-[100%]">
          <div className="">
            {/* Menu Toggle Icon */}
            {show ? (
              <svg
                onClick={toggle}
                className="block md:hidden"
                viewBox="0 0 21 21"
                fill="currentColor"
                height="3em"
                width="3em"
                aria-label="Close menu"
              >
                <g fill="none" fillRule="evenodd" stroke="currentColor">
                  <path d="M15.5 15.5l-10-10zM15.5 5.5l-10 10" />
                </g>
              </svg>
            ) : (
              <svg
                onClick={toggle}
                className="block md:hidden"
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="2em"
                width="2em"
                aria-label="Open menu"
              >
                <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
              </svg>
            )}
          </div>
        </div>
        <div
          className={
            show
              ? "block z-50 h-[100%] bg-white shadow-xl mt-8 w-[100%]"
              : "hidden md:block h-[100%] mt-0 bg-[#005D99]"
          }
        >
          <ul className=" w-[100%]  flex flex-col justify-center items-center md:flex-row md:justify-evenly ">
            <li className=" text-black hover:text-[#005D99] pt-4  md:text-white text-center py-4  md:hover:text-[#FFCB29]">
              <Link to="/"> HOME</Link>
            </li>
            <li className="text-black  hover:text-[#005D99] pt-4 md:text-white text-center py-4 md:hover:text-[#FFCB29]">
              <Link to="/CeoMessage"> CEO's MESSAGE</Link>
            </li>
            <li className="text-black  hover:text-[#005D99] pt-4  md:text-white text-center py-4  md:hover:text-[#FFCB29]">
              <Link to="/principalmessage">PRINCIPAL's MESSAGE</Link>
            </li>
            <li className="text-black hover:text-[#005D99] pt-4 md:text-white text-center py-4   md:hover:text-[#FFCB29]">
              <Link to="/AboutUs">ABOUT US</Link>
            </li>
            <li className="text-black hover:text-[#005D99] pt-4 md:text-white text-center py-4 md:hover:text-[#FFCB29]">
              <Link to="/jobs">JOBS</Link>
            </li>
            <li className="text-black hover:text-[#005D99] pt-4 md:text-white text-center py-4 md:hover:text-[#FFCB29]">
              <Link to="/alumniDirectory">ALUMNI DIRECTORY</Link>
            </li>
            <li className="text-black hover:text-[#005D99] pt-4 md:text-white text-center  py-4 md:hover:text-[#FFCB29]">
              <Link to="/EventsPage">EVENTS</Link>
            </li>
            <li className="text-black hover:text-[#005D99] pt-4 md:text-white text-center py-4 md:hover:text-[#FFCB29]">
              <Link to="/Contactus"> CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
