import React from "react";
import { Logo_Header } from "../../assets/image";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
function Aheader() {
    const { user } = useAuthContext();
    return (
        <>
            <div className="2xl:container bg-white">
                <div className="s-container w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="logo">
                        <img src={Logo_Header} alt="logo" className="image1 mt-10" />
                    </div>
                    <div className="flex justify-end items-center gap-3  ">
                        {user ? <Link to="/profile">My Profile</Link> : <Link to="/login">Login</Link>}



                    </div>
                </div>
            </div>
            <br></br>
        </>
    );
};

export default Aheader;
