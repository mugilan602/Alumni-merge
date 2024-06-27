import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from '../Navbar/Navbar2';
import { Campus } from '../Campus/Campus';
import JobCard from '../../Components/JobCard';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Simulated fetch jobs from API
    const fetchJobs = async () => {
      try {
        // Replace with actual API endpoint to fetch jobs
        const response = await fetch('http://localhost:3000/api/user/jobs');
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        setJobs(data.jobs); // Assuming data contains an array of jobs
      } catch (error) {
        console.error('Error fetching jobs:', error.message);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <Navbar2 />
      <Campus />
      <div className="container mx-auto px-4">
        <div className="flex justify-center mt-4">
          <Link
            to="/create-job"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Post Job
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Jobs;
