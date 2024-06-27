import React, { useState } from 'react';
import Navbar2 from '../Navbar/Navbar2';
import { Campus } from '../Campus/Campus';
import useCreateJob from '../../hooks/useCreateJob';
const CreateJob = () => {
    const { createJob, loading, error, jobId } = useCreateJob();
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [pay, setPay] = useState('');
    const [experience, setExperience] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const jobDetails = {
            title,
            company,
            pay,
            experience,
        };
        createJob(jobDetails);
        // Optionally reset form fields or perform other actions after job creation
        setTitle('');
        setCompany('');
        setPay('');
        setExperience('');
    };

    return (
        <>
            <Navbar2 />
            <Campus />
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">Create a New Job</h2>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company:</label>
                        <input
                            type="text"
                            id="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="pay" className="block text-sm font-medium text-gray-700">Pay:</label>
                        <input
                            type="text"
                            id="pay"
                            value={pay}
                            onChange={(e) => setPay(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience:</label>
                        <input
                            type="text"
                            id="experience"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        disabled={loading}
                    >
                        {loading ? 'Creating...' : 'Create Job'}
                    </button>
                    {error && <p className="text-red-500">{error}</p>}
                    {jobId && <p className="text-green-500">Job created successfully</p>}
                </form>
            </div>
        </>
    );
};

export default CreateJob;
