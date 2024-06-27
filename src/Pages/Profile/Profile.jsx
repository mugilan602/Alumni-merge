import React from 'react';
import Navbar2 from '../Navbar/Navbar2';
import { useLogout } from '../../hooks/useLogout';
import useFetchData from '../../hooks/useFetchData';

function Profile() {
    const { logout } = useLogout();
    const handleLogout = () => {
        logout();
    };

    const { data, loading, error } = useFetchData();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    return (
        <div>
            <Navbar2 />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                    {/* Profile Image and Choose Image */}
                    <div className="flex items-center mb-6">
                        <div className="mr-4">
                            <img src={data.profileImage} alt="Profile" className="rounded-full h-24 w-full max-w-24" />
                        </div>
                    </div>
                    <form action="" method="post" encType="multipart/form-data">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="first_name" className="block mb-1">
                                    First Name:
                                </label>
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    className="w-full px-4 py-2 border rounded-md"
                                    defaultValue={data.firstName}
                                />
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block mb-1">
                                    Last Name:
                                </label>
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    className="w-full px-4 py-2 border rounded-md"
                                    defaultValue={data.lastName}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone_number" className="block mb-1">
                                    Phone Number:
                                </label>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    id="phone_number"
                                    className="w-full px-4 py-2 border rounded-md"
                                    defaultValue={data.phoneNumber}
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
                                    defaultValue={data.email}
                                />
                            </div>
                            <div>
                                <label htmlFor="employee_type" className="block mb-1">
                                    Employment Type:
                                </label>
                                <input
                                    type="text"
                                    name="employee_type"
                                    id="employee_type"
                                    className="w-full px-4 py-2 border rounded-md"
                                    defaultValue={data.employeeType}
                                    readOnly
                                />
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
                                    defaultValue={data.position}
                                />
                            </div>
                            <div>
                                <label htmlFor="company_name" className="block mb-1">
                                    Company Name:
                                </label>
                                <input
                                    type="text"
                                    name="company_name"
                                    id="company_name"
                                    className="w-full px-4 py-2 border rounded-md"
                                    defaultValue={data.companyName}
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
                                    defaultValue={data.location}
                                />
                            </div>
                            <div>
                                <label htmlFor="batch" className="block mb-1">
                                    Batch:
                                </label>
                                <input
                                    type="text"
                                    name="batch"
                                    id="batch"
                                    className="w-full px-4 py-2 border rounded-md"
                                    defaultValue={data.batch}
                                    readOnly
                                />
                            </div>
                            <div>
                                <label htmlFor="department" className="block mb-1">
                                    Department:
                                </label>
                                <input
                                    type="text"
                                    name="department"
                                    id="department"
                                    className="w-full px-4 py-2 border rounded-md"
                                    defaultValue={data.department}
                                    readOnly
                                />
                            </div>

                        </div>
                        <div>
                            <label htmlFor="linkedIn" className="block mb-1 mt-2">
                                LinkedIn Profile:
                            </label>
                            <input
                                type="text"
                                name="LinkedIn"
                                id="LinkedIn"
                                className="w-full px-4 py-2 border rounded-md mt-1"
                                defaultValue={data.linkedIn}
                                readOnly
                            />
                        </div>
                    </form>
                </div>
            </div>
            <input
                type="button" // Changed to button
                value="Logout"
                name="logout"
                className="block mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
                onClick={handleLogout} // Use handleLogout to include navigation
            />
        </div>
    );
}

export default Profile;
