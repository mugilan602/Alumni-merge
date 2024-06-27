import { useState } from "react";
import React from "react";
import { HamburgerImg } from "../../assets/image";
// import { Link } from "react-router-dom";

const Navbar = () => {
  let [hamburger, setHamburger] = useState(false);

  return (
    <>
      <div className="2xl:container h-[10vh] bg-[#005D99] ">
        <div className="w-[90%] mx-auto  h-[100%] ">
          <div className="flex justify-between items-center w-[100%] ">
            <div>
              <img
                className=" w-[100%] h-14 space-y-2 pt-3 md:hidden"
                onClick={() =>
                  //   navbar()
                  setHamburger(!hamburger)
                }
                src={HamburgerImg}
                alt="Nav_Image"
              ></img>
            </div>
          </div>
          <ul
            className={
              hamburger
                ? " flex flex-col flex-wrap gap-2  justify-center items-center "
                : " hidden md:flex  md: justify-around space-x-8"
            }
          >
            <li className=" text-black  md:text-white text-center py-4 md:hover:text-[#FFCB29]">
              HOME
            </li>
            <li className="text-black  md:text-white text-center py-4 md:hover:text-[#FFCB29]">
              CEO's MESSAGE
            </li>
            <li className="text-black    md:text-white text-center py-4 md:hover:text-[#FFCB29]">
              ABOUT US
            </li>
            <li className="text-black  md:text-white text-center py-4 md:hover:text-[#FFCB29]">
              CHAPTERS
            </li>
            <li className="text-black md:text-white text-center py-4 md:hover:text-[#FFCB29]">
              JOBS
            </li>
            <li className="text-black md:text-white text-center py-4 md:hover:text-[#FFCB29]">
              NOTABLE ALUMNI
            </li>
            <li className="text-black  md:text-white text-center py-4 md:hover:text-[#FFCB29]">
              EVENTS
            </li>
            <li className="text-black  md:text-white text-center py-4 md:hover:text-[#FFCB29]">
              CONTACT US
            </li>
          </ul>
        </div>
     
         {/* <Link to="https://www.npmjs.com/package/react-router-dom"> fdjyiuhn b</Link> */}
       
      </div>
    </>
  );
};


// default export
export default Navbar;
