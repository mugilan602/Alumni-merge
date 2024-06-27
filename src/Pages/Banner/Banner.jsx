import React from "react";
import "./Banner.css";
import "tailwindcss/tailwind.css";

function Banner() {
  return (
    <div className=" bg-white mt-10">
        <div className="mx-auto grid grid-cols-1 items-start gap-14 shadow-xl">
          <div className="relative bt-1 flex items-center justify-center"></div>
        </div>
    </div>
  );
}

export default Banner;

