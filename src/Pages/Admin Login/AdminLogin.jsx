import React, { useState } from "react";
import Navbar2 from "../Navbar/Navbar2";
import { useAdminLogin } from "../../hooks/useAdminLogin";

const AdminLogin = () => {
  const { login, loading, error } = useAdminLogin(); // Use the useLogin hook

  const [data, setData] = useState({ userName: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(data); // Call the login function from useLogin hook
  };

  return (
    <div>
      <Navbar2 />
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex object-cover rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="sm:w-1/2 px-16">
            <h2 className="font-bold text-2xl flex justify-center">Admin Login</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                placeholder="User Name"
                name="userName"
                onChange={handleChange}
                value={data.userName}
                required
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                />
              </div>
              <button
                className={`bg-[#387ADF] rounded-xl text-white py-2 ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105 duration-300"
                }`}
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </form>
          </div>
          <div className="w-1/2 sm:block hidden">
            <img
              className="object-cover rounded-2xl"
              src="https://enrollacademy.com/wp-content/uploads/2024/01/Sai-sairam-College-Bangalore-Photo.webp"
              alt="Sai Sairam College"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;
