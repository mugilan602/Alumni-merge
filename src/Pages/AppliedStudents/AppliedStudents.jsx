import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppliedStudentCard from '../../Components/AppliedStudentCard';
const AppliedStudentsPage = () => {
  const { jobId } = useParams();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/user/job/${jobId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched students:', data);
        setStudents(data.job.appliedBy || []);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchStudents();
  }, [jobId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Applied Students</h2>
      <div className="grid grid-cols-1 gap-4">
        {students.length === 0 ? (
          <p>No students found.</p>
        ) : (
          students.map((student) => (
            <AppliedStudentCard key={student._id} student={student} />
          ))
        )}
      </div>
    </div>
  );
};

export default AppliedStudentsPage;
