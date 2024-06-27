import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  const { _id, title, company, pay, experience } = job;
  const jobId = _id;

  return (
    <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">Company: {company}</p>
        <p className="text-gray-700 text-base mb-2">Pay: {pay}</p>
        <p className="text-gray-700 text-base mb-2">Experience: {experience}</p>
        <Link
          to={`/apply/${jobId}`} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Apply
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
