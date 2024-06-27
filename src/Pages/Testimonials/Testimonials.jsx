


const TestimonialsData=[

    {
        name:"Dr.Sathya Chandran" ,
        batch:"2005-2009" ,
        position: "Security Software Engineer, Netflix, U.S.A",
        review:"As a proud alumni of Sairam, I can confidently say the professors and the environment provided me with a solid foundation to nurture and grow myself both personally and professionally. I am thankful for the academic freedom provided by the institution and in particular the CSE department. Due to that freedom I was always able to pursue creative projects along with the curricular needs.",
        img:"https://ik.imagekit.io/ytissbwn8/Testimonials/Picture1.png?updatedAt=1719143276699"
    },
    {
        name:"R. Mohamed Aslam" ,
        batch:" 2018 - 2022" ,
         review:"My journey in Sairam  was really an exceptional one. Thank you Sairam, for being more than an institution - it's been a home where knowledge was gained, dreams were nurtured. I sincerely express my gratitude to all the faculties  who guided me with wisdom and unwavering support, the friends who stood by me through challenges.",
        position: "Instrumentation Engineer, Petro6 Engineering and Construction - Chennai",
        img:"https://ik.imagekit.io/ytissbwn8/Testimonials/Picture(1).png?updatedAt=1719147660476"
    },
    {
        name:"Ranjani" ,
        batch:" 2003" ,
         review:"Sairam Institute of Management is committed to the highest standards of educational and other provision for its students. The lecturers were/are knowledgeable, skilled, enthusiastic, committed, and prepared. The college has a good collection of libraries and other amenities which aid the empowerment of students in terms of knowledge and life",
        position: "Analyst - Abu Dhabi Commercial Bank, Dubai",
        img:"https://ik.imagekit.io/ytissbwn8/Testimonials/Picture6.png?updatedAt=1719145352268"
    },
    {
        name:"Aravinth Raj" ,
        batch:" 2012-2016" ,
         review:" Sairam college taught us to be successful in our professional life by teaching us and providing opportunities to explore, learn and participate. College life has so many amazing memories. Thank You Sairam College for enriching both our professional and personal lives. All the best!",
        position: "Software Development Engineer Expedia Group, Seattle, Washington, United States",
        img:"https://ik.imagekit.io/ytissbwn8/Testimonials/Picture.png?updatedAt=1719145702778"
    },
    
    {
        name:"Mohammed Hanif" ,
        batch:"2012-2016" ,
         review:"Besides providing a good education, Sairam is very prudent towards its students in developing their interpersonal flexibility, physical activity. The very well-known saying - Enter to learn and leave to serve has been an inspiration for me while being in college. Sairam has played a significant role in shaping my identity as an engineer and I am deeply grateful.",
        position: "Senior Electrical Engineer (EIC) - Saudi Arabia",
        img:"https://ik.imagekit.io/ytissbwn8/Testimonials/Picture3.png?updatedAt=1719145352300"
    },
    {
        name:"B.Rohnie" ,
        batch:" 2013-2017" ,
         review:"My journey at Sairam turned out to be jubilant. I was nurtured with good mannerism that plays a great role even now. The opportunities I grabbed, crowned me with exceptional achievements. It started from departmental symposiums to International Conferences.At Sairam, it was not just academics that made me secure the 33rd University rank but much more…It's up to us to stand with a bucket or a spoon.",
        position: "Application Developer, Bank of Newyork Mellon",
        img:"https://ik.imagekit.io/ytissbwn8/Testimonials/Picture4.png?updatedAt=1719145352295"
    },
    
    
    ]
    
    
    
    
    import React from "react";
    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    import "./Testimonials.css";
    import { Autoplay } from "swiper/modules";
    
    
    function Testimonials() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            Autoplay:true,
            AutoplaySpeed:1000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                }
            ]
        };
    
        return (
            <>
                <div className="2xl:container bg-white  pb-10">
                    <div className="s-container w-[90%] m-auto">
                    <h1 className='w-[100%] mx-auto bg-white font-semibold  text-[#0c6cb1] text-xl m-3 p-4 '>ALUMNI TESTIMONIAL'S</h1>
                        <div className="mt-10">
                            <Slider {...settings}>
                                {TestimonialsData.map((e, index) => (
                                    <div key={index} className="bg-white pb-10 h-[500px] text-black rounded-xl shadow-lg">
                                        <div className="h-56 rounded-t-2xl bg-[#DAEEF7]  flex justify-center items-center">
                                            <img src={e.img} alt="Alumni_img" className="h-44 w-44 rounded-full" />
                                        </div>
                                        <div className="flex flex-col justify-center items-center text-justify gap-4 p-4">
                                            <p className="text-xl font-bold">{e.name}</p>
                                            <p>{e.batch}</p>
                                            <p className="font-medium text-base">{e.position}</p>
                                            <p className="text-xs">{e.review}</p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
                onClick={onClick}
            />
        );
    }
    
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
                onClick={onClick}
            />
        );
    }
    
    export default Testimonials;
    