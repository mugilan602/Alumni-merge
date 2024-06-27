import React, { useState, useEffect } from "react";
import "./Events.css";

const images = [
    "https://ik.imagekit.io/qgyfqyn9z/alumni%20website/c1.jpg?updatedAt=1718784002279",
    "https://ik.imagekit.io/qgyfqyn9z/alumni%20website/c2.jpg?updatedAt=1718784002345",
    "https://ik.imagekit.io/qgyfqyn9z/sir(1).jpg",
];

function Events() {
    document.addEventListener("DOMContentLoaded", function () {
        let currentIndex = 0;
        const items = document.querySelectorAll(".carousel-item");
        const totalItems = items.length;

        function showSlide(index) {
            items.forEach((item) => item.classList.remove("active"));
            items[index].classList.add("active");
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalItems;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            showSlide(currentIndex);
        }

        document.querySelectorAll(".btn-circle").forEach((btn) => {
            btn.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent default action of anchor tag
                if (btn.innerHTML === "❮") {
                    prevSlide();
                } else {
                    nextSlide();
                }
            });
        });

        setInterval(nextSlide, 3000);
    });

    return (
        <div className="safety-container">
            <div className="card-container">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                    <div className="events-card flex-1 w-full lg:w-1/2">
                        <p className="font-bold px-4 py-4 md:px-6 md:py-5 lg:px-10 lg:py-6 font-Roboto tracking-widest text-lg md:text-xl lg:text-2xl text-blue-800">
                            EVENTS
                        </p>
                        <div className="font-Roboto flex justify-start border border-l-0 border-r-0 border-b-0 pt-4 pb-4 md:pt-6 md:pb-6 lg:pt-14 lg:pb-10 items-start w-full py-5 px-4 md:px-6 lg:px-10 text-start gap-4 scale-100 hover:bg-slate-200">
                            <div className="flex flex-col justify-center items-center">
                                <p className="font-Roboto text-sm md:text-base lg:text-lg">
                                    NOV
                                </p>
                                <p className="font-Roboto text-xl md:text-2xl lg:text-3xl">
                                    18
                                </p>
                            </div>
                            <div className="">
                                <a href="" className="font-Roboto">
                                    <button className="pl-20 pt-4 text-sm md:text-base lg:text-2xl font-semibold">
                                        Alumni Meet 2023
                                    </button>
                                </a>
                            </div>

                        </div>

                        <div className="font-Roboto flex justify-start border-l-0 border-r-0 pt-4 pb-4 md:pt-6 md:pb-6 lg:pt-14 lg:pb-10 items-start w-full py-5 px-4 md:px-6 lg:px-10 text-start gap-4 scale-100 border hover:bg-slate-200">
                            <div className="flex flex-col justify-center items-center">
                                <p className="font-Roboto text-sm md:text-base lg:text-lg">
                                    OCT
                                </p>
                                <p className="font-Roboto text-xl md:text-2xl lg:text-3xl">
                                    3
                                </p>
                            </div>
                            <a href="" className="font-Roboto">
                                <button className="ml-11 pt-4 text-sm md:text-base lg:text-2xl font-semibold">
                                    Chandrayaan 3 Celebration
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="slider-wrapper flex-1 w-full lg:w-1/2 shadow-2xl">
                        <div className="slider-container w-full overflow-hidden border-8 border-white rounded-lg shadow-2xl relative z-10 carousel">
                            <div
                                id="slide1"
                                className="carousel-item relative w-full active"
                            >
                                <img
                                    src={
                                        "https://ik.imagekit.io/qgyfqyn9z/alumni%20website/c1.jpg?updatedAt=1718784002279"
                                    }
                                    alt="Slide 1"
                                    className="w-full"
                                />
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">

                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <img
                                    src={
                                        "https://ik.imagekit.io/qgyfqyn9z/alumni%20website/c2.jpg?updatedAt=1718784002345"
                                    }
                                    alt="Slide 2"
                                    className="w-full"
                                />
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">

                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img
                                    src={
                                        "https://ik.imagekit.io/qgyfqyn9z/sir(1).jpg"
                                    }
                                    alt="Slide 3"
                                    className="w-full"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
