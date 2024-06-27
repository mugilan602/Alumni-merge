import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminCard from '../../Components/AdminCard';
import { useAdminLogout } from '../../hooks/useAdminLogout';
import { Campus } from '../Campus/Campus';

const AdminPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { logout } = useAdminLogout();
  const handleLogout = () => {
    logout();
  };
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/user/jobs');
        setJobs(response.data.jobs);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Campus />
      <div className="container mx-auto px-4">
        <div className="flex justify-end mt-4">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <div className="grid grid-cols-1 gap-4">
          {jobs.length === 0 ? (
            <p>No jobs found.</p>
          ) : (
            jobs.map((job) => (
              <AdminCard key={job._id} job={job} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
