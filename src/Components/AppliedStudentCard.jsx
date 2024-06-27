import React from 'react';

const AppliedStudentCard = ({ student }) => {
  const handleDownload = () => {
    // Constructing the download URL from student's resume link
    const downloadUrl = student.resume;
    
    // Creating an anchor element to trigger the download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('target', '_blank'); // Opens the link in a new tab
    link.click();
  };

  return (
    <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{student.name}</div>
        <p className="text-gray-700 text-base mb-2">Email: {student.email}</p>
        <p className="text-gray-700 text-base mb-2">Phone Number: {student.phoneNumber}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleDownload}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default AppliedStudentCard;
