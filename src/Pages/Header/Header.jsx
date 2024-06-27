import React from 'react';
import './Header.css';

import {College_Image  } from "../../assets/image";


function Header() {
  return (

    <>
{/* <div className="2xl:container bg-white">
                <div className="s-container w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="logo">
                        <img src={Logo_Header} alt="logo" className="image1 mt-10" />
                    </div>
                    <div className="flex justify-end items-center gap-3  ">
                        <button className="text-white w-[100%] md:w-40 px-2 py-2 bg-[#337ab7] hover:bg-[#FFCB29] hover:text-[#005D99] rounded-3xl font-medium">
                            REGISTER
                        </button>
                        <button className="text-white w-[100%] md:w-40 px-2 py-2 bg-[#337ab7] hover:bg-[#FFCB29] hover:text-[#005D99] rounded-3xl font-medium">
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
            <br /> */}
            {/* <div className="10xl:container">
                <div className="w-[99%] ">
                    <ul4>
                        <nav>
                            <ul className="menu flex-wrap justify-evenly  items-center text-center space-x-10">
                                <li className='submenu'>
                                    <a  className="subsubmenu" href="#">CEO's MESSAGE </a>
                                </li>
                                <li className='submenu'>
                                    <a className="subsubmenu" href="#">ABOUT US ▾</a>
                                    <ul className="dropdown">
                                        <li>
                                            <a  className="subsubmenu" href="#">VISION</a>
                                        </li>
                                        <li>
                                            <a  className="subsubmenu" href="#">MISSION</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className='submenu'>
                                    <a  className="subsubmenu" href="#">NEWS LETTER ▾</a>
                                    <ul className="dropdown">
                                        <li>
                                            <a  className="subsubmenu" href="#">X</a>
                                        </li>
                                        <li>
                                            <a  className="subsubmenu" href="#">hyX</a>
                                        </li>
                                        <li>
                                            <a  className="subsubmenu" href="#">X</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className='submenu'>
                                    <a  className="subsubmenu" href="#">COMMUNITY ▾</a>
                                    <ul className="dropdown">
                                        <li>
                                            <a  className="subsubmenu" href="#">Xyyh</a>
                                        </li>
                                        <li>
                                            <a  className="subsubmenu" href="#">X</a>
                                        </li>
                                        <li>
                                            <a  className="subsubmenu"  href="#">X</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className='submenu'>
                                    <a  className="subsubmenu" href="#">LATEST MEMBER ▾</a>
                                    <ul className="dropdown">
                                        <li>
                                            <a  className="subsubmenu" href="#">X</a>
                                        </li>
                                        <li>
                                            <a  className="subsubmenu" href="#">X</a>
                                        </li>
                                        <li>
                                            <a  className="subsubmenu" href="#">yyhX</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className='submenu'>
                                    <a className="subsubmenu"  href="#">MORE ▾</a>
                                    <ul className="dropdown">
                                        <li>
                                            <a  className="subsubmenu" href="#">X</a>
                                        </li>
                                        <li>
                                            <a className="subsubmenu"  href="#">Xyh</a>
                                        </li>
                                        <li>
                                            <a  className="subsubmenu" href="#">X</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav> */}
                    {/* </ul4> */}
                {/* </div>
            </div> */}
            <br />
            <div className=" 2xl:container w-[100%] h-[100%] bg-white mt-4 ">
                <div className=" w-[98%] mx-auto h-[100%] grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg p-8 m-4  ">
                    <div className="content1 ">
                        <img className='w-[95%]' src={College_Image } alt="college" />
                    </div>
                    <div className="content2 w-[100%]">
                        <div className=' py-10'>
                        <h6 className=' text-xl md:text-2xl lg:text-4xl text-[#005D99] font-[roboto] py-2'>SAIRAM ALUMNI ASSOCIATION</h6>
                        <hr className=' border border-[#FFCB29] w-72'></hr>
                        </div>
                        
                        <p>
                            Sri Sairam Engineering College, Chennai, established in the year 1995
                            by MJF.Ln.Leo Muthu, Chairman of Sapthagiri Educational Trust, is a
                            non-profitable and a non-minority institution. A well-defined vision,
                            highly committed mission and a dedicated leadership facilitate Sri
                            Sairam Engineering College to be in the best of educational
                            institutions in the country. Since its inception, the institution has
                            grown into a vast conglomerate of magnificent buildings, state-of-the
                            art laboratories, sophisticated internet centres, modern digital
                            library block and a superlative sports complex, each a land mark in
                            itself across 300 acres. The institution is situated in a sprawling
                            campus with architecturally and aesthetically designed buildings,
                            blocks, stadiums, auditoriums, hostels, gymnasium and the sports
                            grounds.
                        </p>
                    </div>
                </div>
            </div>
    </>


  );
}

export default Header;
