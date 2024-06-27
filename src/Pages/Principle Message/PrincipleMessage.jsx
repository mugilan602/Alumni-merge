import React from "react";
import "./PrincipleMessage.css";
import "tailwindcss/tailwind.css";
import Navbar2 from "../Navbar/Navbar2";

function PrincipalMessage() {
  return (
    <>
    <Navbar2 />
      <div className="">
        <div className="2xl:container">
          <div className="relative bt flex items-center justify-center">
            <p className=" hidden md:block page text-white w-96 m-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-36 mt-12 text-5xl p-14 md:text-5xl pb-20 lg:text-6xl 6xl:text-6xl md:top-0 md:left-0 md:transform-none ml-3 lg:pb-2">
              Education is a noble affair and should be holistic as well.
            </p>
          </div>
          <div className="w-[100%] lg:w-[90%] lg:mt-3 mx-auto grid grid-cols-1 items-start gap-14 ">
            <div className=" lg:mt-3 mx-auto grid grid-cols-1 items-start gap-14 lg:mb-4 p-6 rounded-lg">
              <h1 className="ml-4 mt-6 text-4xl">PRINCIPAL'S MESSAGE</h1>
              <p className="parag">
                It gives us immense pleasure to observe that SAIRAM ALUMNI FRATERNITY who emerged from the hallowed halls of our esteemed institution is gathering to rejoice and share at the same campus on 18th November 2023.
                Our alumni, the pride of Sri Sairam Engineering College, have etched their names in the annals of success across various domains. Their journeys from these classrooms to the zenith of their careers exemplify the caliber of education and values imparted here.
              </p>
              <p className="parag">
                We take immense pleasure in our alumni whose contributions from their specific roles and as individuals have inspired not only our nation but also the global community. Our alumni in public services, owning companies and being educators continue to safeguard and uplift our society, embodying the ethos of service and integrity that we cherish. We could certainly feel the ONENESS in their lives and achievements.
                The way our alumni mentor and guide our current students is commendable. They have created a legacy of inspiration, motivating our students to dream big and work tirelessly.
              </p>
              <p className="parag pb-10">
                towards those dreams. This mentorship has been a catalyst for many of our students, shaping them into future leaders and innovators.
                The relationship between our alumni and the privileged institution is exhibiting a testimony to the everlasting mission of our institution. It is a relationship based on mutual respect, adulation, admiration, and a shared vision for a better world. As we celebrate their achievements, we are reminded that each one of the alumni is a pivotal part of our continuous journey towards excellence.
              </p>
              <p className="parag">
                Thank you for being an integral part of our journey!!
              </p>
              <p className="signn flex justify-end items-end pb-40 pr-20">
                - Dr. K. Porkumaran
                <br />
                Principal
                <br />
                Sairam Engineering College
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrincipalMessage;