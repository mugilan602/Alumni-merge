import React, { useEffect } from "react";
import LatestMembers from "../LatestMembers/LatestMembers";
import Aheader from "../Aheader/Aheader";
import Navbar2 from "../Navbar/Navbar2";
import Herosection from "../Hero Section/HeroSection";
import Banner from "../Banner/Banner";
import Events from "../Events/Events";
import Testimonials from "../Testimonials/Testimonials";
function HomePage () {
    return (
        <>
            <Aheader/>
            <Navbar2 />
            <Herosection />
            <Banner />
            <Events />
            <Testimonials />
            <LatestMembers />
        </>
    );
};


export default HomePage;
