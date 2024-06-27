import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import Navbar2 from "../Navbar/Navbar2.jsx";
import { Campus } from "../Campus/Campus.jsx";
import AlumniCard from "../../Components/AlumniCard.jsx";

const AlumniDirectory = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [alumniData, setAlumniData] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  // Initial display of six alumni cards
  useEffect(() => {
    setAlumniData([
      {
        firstName: "Sachin Rengarajan",
        position: "Controls Engineer",
        companyName: "Cummins Inc",
        department: "EIE",
        batch: "2009-2013",
        profileImage: "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png",
        linkedin: "https://linkedin.com/in/johndoe"
      },
      {
        "firstName": "Annapurani",
        "position": "Systems Engineer",
        "companyName": "TCS",
        "department": "EIE",
        "batch": "2010-2014",
        "profileImage": "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png",
        "linkedin": "https://linkedin.com/in/johndoe"
      }
      ,
      {
        "firstName": "Poovarasan Raja",
        "position": "Manufacturing Engineer",
        "companyName": "Tesla",
        "department": "Mech",
        "batch": "2017",
        "profileImage": "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png",
        "linkedin": "https://linkedin.com/in/johndoe"
      }
      ,
      {
        "firstName": "Raveendran SK",
        "position": "Sr. Manager",
        "companyName": "Etisalat Telecommunication",
        "department": "MBA",
        "batch": "2000",
        "profileImage": "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png",
        "linkedin": "https://linkedin.com/in/johndoe"
      }
      ,
      {
        "firstName": "Kamakshi MuthuKrishnan",
        "position": "ML Automation Engineer",
        "companyName": "Cognizant",
        "department": "ICE",
        "batch": "2005-2009",
        "profileImage": "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png",
        "linkedin": "https://linkedin.com/in/johndoe"
      }
      ,
      {
        "firstName": "A Karthik",
        "position": "Senior UI Developer",
        "companyName": "EdgeVerve Pvt Ltd",
        "department": "ECE",
        "batch": "2014-2018",
        "profileImage": "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png",
        "linkedin": "https://linkedin.com/in/johndoe"
      }

    ]);
  }, []);

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const fetchAlumniData = async (department) => {
    try {
      setLoading(true); // Set loading state to true while fetching data
      const response = await axios.get(`http://localhost:3000/api/user/getbydept/${department}`);
      setAlumniData(response.data); // Update alumniData state with fetched data
      setLoading(false); // Set loading state to false after fetching data
    } catch (error) {
      setError(error); // Set error state if there's an error during fetching
      setLoading(false); // Set loading state to false
    }
  };

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
    fetchAlumniData(department);
    closeDropdown();
  };

  const departments = [
    'AI & DS', 'ECE', 'MECH', 'EIE', 'CSE (IoT)', 'M.Tech CSE', 'CSBS', 'IT',
    'CIVIL', 'MBA', 'EEE', 'CSE', 'ICE', 'CSE (AI & ML)', 'Mechanical and Automation'
  ];

  return (
    <>
      <Navbar2 />
      <Campus />

      <div className="relative flex justify-center">
        <button
          id="dropdownDelayButton"
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Filter
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <div
            id="dropdownDelay"
            className="z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-5/6 max-w-screen-lg dark:bg-gray-700"
            style={{ top: "2.0rem" }} // Adjust top position here
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200 grid grid-cols-3 gap-4 px-4"
              aria-labelledby="dropdownDelayButton"
            >
              {departments.map((department, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="block px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-md text-center"
                    onClick={() => handleDepartmentClick(department)}
                  >
                    {department}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {loading ? (
        <div className="flex justify-center mt-4">
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div className="flex justify-center mt-4">
          <p>Error: {error.message}</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {alumniData.map((alumni, index) => (
            <AlumniCard key={index} alumni={alumni} />
          ))}
        </div>
      )}
    </>
  );
};

export default AlumniDirectory;
