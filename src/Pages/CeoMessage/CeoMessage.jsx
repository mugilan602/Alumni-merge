import React from "react";
import "./CeoMessage.css";
import "tailwindcss/tailwind.css";
import Navbar2 from "../Navbar/Navbar2";

function PrincipalMessage() {
  return (
    <>
      <Navbar2 />
      <div className="">
        <div className="2xl:container">
          <div className="relative b-ceo flex items-center justify-center">
            <p className=" hidden md:block page text-white w-96 m-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-36 mt-12 text-5xl p-14 md:text-5xl pb-20 lg:text-6xl 6xl:text-6xl md:top-0 md:left-0 md:transform-none ml-3 lg:pb-2">
              To think is wise, to plan is wiser and to do is the wisest.
            </p>
          </div>
          <div className="w-[100%] lg:w-[90%] lg:mt-3 mx-auto grid grid-cols-1 items-start gap-14 ">
            <div className=" lg:mt-3 mx-auto grid grid-cols-1 items-start gap-14 lg:mb-4 p-6 rounded-lg">
              <h1 className="ml-4 mt-6 text-4xl">CEO'S MESSAGE</h1>
              <p className="parag">
                Our alumni, the pride of Sri Sairam Engineering College, have etched their names in the annals of success across various domains. Their journeys from these classrooms to the zenith of their careers exemplify the caliber of education and values imparted here.

              </p>
              <p className="parag">
                Amongst us, we have luminaries like Dr. Veera Muthuvel, the esteemed director of the
                Chandrayaan mission, the distinguished individuals who have been serving with distinction as
                IASs, IPSs, CEOs and acclaimed Entrepreneurs. Their achievements are a testament to their
                individual brilliance as well as the reflection of the solid foundation our institution has provided.
                What is truly heart-warming is the way our alumni have been consistently giving back to their alma
                mater, inspiring our current students. Their engagement in our academic and extracurricular
                activities has been invaluable for fostering, nurturing and motivating an environment that
                encourages our present day learners to strive for excellence.
              </p>
              <p className="parag pb-10">
                The relationship between our alumni and the privileged institution is exhibiting a testimony to the everlasting mission of our institution. It is a relationship based on mutual respect, adulation, admiration, and a shared vision for a better world. As we celebrate their achievements, we are reminded that each one of the alumni is a pivotal part of our continuous journey towards excellence.

              </p>
              <p className="parag">
                Thank you for being an integral part of our journey!!
              </p>
              <p className="signn flex justify-end items-end pb-40 pr-20">
                Dr. K. Sri Sai Prakash Leo Muthu
                <br />
                CEO - Sairam Institutions
                <br />
              </p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrincipalMessage;