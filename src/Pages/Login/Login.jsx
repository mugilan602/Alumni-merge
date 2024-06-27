import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar2 from "../Navbar/Navbar2";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const { login, loading, error } = useLogin();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(data);
        console.log(data);
    };

    return (
        <div>
            <Navbar2 />
            <section className="bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="bg-gray-100 flex object-cover rounded-2xl shadow-lg max-w-3xl p-5 items-center ">
                    <div className="sm:w-1/2 px-16">
                        <h2 className="font-bold text-2xl flex justify-center">Login</h2>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <input 
                                className="p-2 mt-8 rounded-xl border"
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                value={data.email}
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
                            {error && <div className="text-red-500">{error}</div>}
                            <button 
                                className="bg-[#387ADF] rounded-xl text-white py-2 hover:scale-105 duration-300" 
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </form>
                        <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
                            <hr className="outline-gray-400" />
                            <p className="text-center text-sm">New Here?</p>
                            <hr className="outline-gray-400" />
                        </div>
                        <Link to="/signup">
                            <p className="mt-5 flex justify-center items-center text-[#387ADF]" type="button">Sign Up</p>
                        </Link>
                    </div>
                    <div className="w-1/2 sm:block hidden">
                        <img className="object-cover rounded-2xl" src="https://enrollacademy.com/wp-content/uploads/2024/01/Sai-sairam-College-Bangalore-Photo.webp" alt="Sai Sairam College" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
