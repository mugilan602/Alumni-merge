import { useState } from 'react';
import { useAuthContext } from './useAuthContext';// Import your authentication context hook

const useCreateJob = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [jobId, setJobId] = useState(null);
  const { user } = useAuthContext(); // Assuming useAuthContext provides user info and token

  const createJob = async (jobDetails) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3000/api/user/job', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}` // Assuming user.token contains the JWT token
        },
        body: JSON.stringify(jobDetails),
      });
      if (!response.ok) {
        throw new Error('Failed to create job');
      }
      const data = await response.json();
      setJobId(data.jobId); // Assuming the API returns the created job's ID
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { createJob, loading, error, jobId };
};

export default useCreateJob;
