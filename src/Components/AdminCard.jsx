import React from 'react';
import { Link } from 'react-router-dom';

const AdminCard = ({ job }) => {
  return (
    <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{job.title}</div>
        <p className="text-gray-700 text-base mb-2">Company: {job.company}</p>
        <p className="text-gray-700 text-base mb-2">Pay: {job.pay}</p>
        <p className="text-gray-700 text-base mb-2">Experience: {job.experience}</p>
        <p className="text-gray-700 text-base mb-2">Uploaded by: {job.userId.firstName}</p>
        <p className="text-gray-700 text-base mb-2">Email: {job.userId.email}</p>
        <p className="text-gray-700 text-base mb-2">Phone Number: {job.userId.phoneNumber}</p>

        <Link 
          to={`/applied-students/${job._id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        >
          View Applied Students
        </Link>
      </div>
    </div>
  );
};

export default AdminCard;
