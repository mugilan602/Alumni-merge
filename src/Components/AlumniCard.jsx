import React from "react";
import { Linkedin } from 'lucide-react';

const AlumniCard = ({ alumni }) => {
  return (
    <div className="w-[350px] bg-white overflow-hidden rounded-md shadow-lg ml-5 my-5">
      <div className="h-48 bg-[#DAEEF7] flex items-center justify-center">
        <div className="rounded-full">
          <img
            src={alumni.profileImage} // Use a default image if none is provided
            alt="AlumniImage"
            className="h-36 w-36 rounded-full"
          />
        </div>
      </div>
      <div className="py-6 px-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl font-semibold">{alumni.firstName}</p>
          <p className="text-center text-slate-500 font-semibold">{alumni.position} at {alumni.companyName}</p>
          <p className="text-slate-500 font-semibold">{alumni.department} - {alumni.batch}</p>

          <div className="flex pt-3 items-center justify-center">
            <a href={alumni.linkedIn} className="mx-2 w-[40px] h-[40px] rounded-full bg-[#1D72C7] flex items-center justify-center">
              <Linkedin color="white" size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;
