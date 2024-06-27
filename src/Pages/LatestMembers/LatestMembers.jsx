import './LatestMembers.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ProductDataset } from "../../api/MockData.js";


import "swiper/css";

const MemberCard = ({ img }) => {
    return (
        <div className='shadow-lg m-4 p-6'>
            <img src={img} alt='product' />
        </div>
    );
};

const MemberLayout = () => {
    return (
        <div className='2xl:container bg-white'>
            <div className='shadow-lg m-5 p-6'>
                <div className="w-[100%] grid grid-cols-1 space-y-3">
                    <h1 className='w-[100%] mx-auto bg-white font-semibold text-[#0c6cb1] text-xl m-3 p-4 shadow-xl'>NOTABLE ALUMNI</h1>
                </div>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 20 },
                        480: { slidesPerView: 2, spaceBetween: 10 },
                        768: { slidesPerView: 3, spaceBetween: 10 },
                        1024: { slidesPerView: 4, spaceBetween: 50 },
                        1200: { slidesPerView: 5, spaceBetween: 50 }
                    }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    pagination={{ clickable: false }}
                    navigation
                    modules={[Autoplay, Navigation]}
                    className="mySwiper">
                    {ProductDataset.map((e, index) => (
                        <SwiperSlide key={index + 1}>
                            <MemberCard img={e.image_url} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

const LatestMembers = () => {
    return (
        <>
            <MemberLayout />
        </>
    );
};

export default LatestMembers;
