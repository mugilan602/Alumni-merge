import React, { useState } from 'react';
import Navbar2 from '../Navbar/Navbar2';
import { useSignup } from '../../hooks/useSignup';

const Signup = () => {
  const { signup, loading, error } = useSignup();
  const [formData, setFormData] = useState({
    profileImage: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    employeeType: '',
    position: '',
    companyName: '',
    location: '',
    batch: '',
    department: '',
    password: '',
    linkedIn:''
  });

  
  const handleChange = (e) => {
    // Check if the input is a file input (profileImage)
    if (e.target.name === 'profileImage') {
      setFormData({ ...formData, profileImage: e.target.files[0] });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      console.log(formData);
      await signup(formData); // Ensure that your signup function accepts this format
    } catch (error) {
      console.error("Error in handleSignup:", error);
    }
  };

  return (
    <div>
      <Navbar2 />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="flex items-center mb-6">
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            </div>
            <div>
              <input type="file" name="profileImage" id="profileImage" onChange={handleChange}  accept="image/*"
                required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block mb-1">
                  First Name:
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.firstName}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-1">
                  Last Name:
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.lastName}
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block mb-1">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
              </div>
              <div>
                <label htmlFor="employeeType" className="block mb-1">
                  Employment Type:
                </label>
                <select
                  name="employeeType"
                  id="employeeType"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.employeeType}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
              <div>
                <label htmlFor="position" className="block mb-1">
                  Position:
                </label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.position}
                  required
                />
              </div>
              <div>
                <label htmlFor="companyName" className="block mb-1">
                  Company Name:
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.companyName}
                  required
                />
              </div>
              <div>
                <label htmlFor="location" className="block mb-1">
                  Location:
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.location}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.password}
                  required
                />
              </div>
              <div>
                <label htmlFor="batch" className="block mb-1">
                  Batch:
                </label>
                <select
                  name="batch"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.batch}
                  required
                >
                  <option value="">Select Batch</option>
                  {[...Array(31)].map((_, index) => (
                    <option key={index + 2000} value={index + 2000}>
                      {index + 2000}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="department" className="block mb-1">
                  Department:
                </label>
                <select
                  name="department"
                  id="department"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.department}
                  required
                >
                  <option value="">Select Department</option>
                  {[
                    'AI & DS',
                    'ECE',
                    'MECH',
                    'EIE',
                    'CSE (IoT)',
                    'M.Tech CSE',
                    'CSBS',
                    'IT',
                    'CIVIL',
                    'MBA',
                    'EEE',
                    'CSE',
                    'ICE',
                    'CSE (AI & ML)',
                    'Mechanical and Automation'
                  ].map((department, index) => (
                    <option key={index} value={department}>
                      {department}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="linkedIn" className="block mb-1">
                  LinkedIn Profile:
                </label>
                <input
                  type="linkedIn"
                  name="linkedIn"
                  id="linkedIn"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.linkedIn}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="block mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Signup'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;