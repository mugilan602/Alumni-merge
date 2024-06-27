import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { EventDataset } from "../../api/MockData1.js";
import "swiper/css";
import Navbar2 from "../Navbar/Navbar2.jsx";
import { Campus } from "../Campus/Campus.jsx";

const EventsCard = (prop) => {
  return (
    <>
      <div className="shadow-lg m-4 p-6">
        <img
          src="https://eee.sairam.edu.in/wp-content/uploads/sites/5/2021/12/Alumni-Meet-922x1024-1.jpg"
          alt="product"
          className="h-[500px] w-[450px]"
        ></img>
      </div>
    </>
  );
};

const EventsLayout = () => {
  return (
    <>
      <div className="2xl:container bg-white">
        <div className="shadow-lg m-5 p-6">
          <div className="w-[100%] grid grid-cols-1 space-y-3">
            <h1 className="w-[100%] mx-auto bg-white font-semibold text-[#0c6cb1] text-xl m-3 p-4 shadow-xl">
              EVENTS
            </h1>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              599: { slidesPerView: 2, spaceBetween: 10 },
              799: { slidesPerView: 3, spaceBetween: 10 },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: false }}
            navigation
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {EventDataset.map((e) => {
              return (
                <>
                  <SwiperSlide key={e.team_id}>
                    <EventsCard img={e.image_url} />
                    {/* <div className="font-semibold m-6 text-base lg:text-xl">
                      <p>
                        Thrilled to invite you to our Alumni Meet Up. It’s time
                        to reconnect, reminisce, and create new memories
                      </p>
                    </div> */}
                    {/* <div className="btn flex space-x-7 m-6">
                      <a href="">
                        <button className="px-6 py-2 bg-yellow-300 text-black font-['poppins'] rounded-md hover:bg-yellow-400 transition duration-300 ease-in-out">
                          Event Date
                        </button>
                      </a>
                      <a href="">
                        <button className="border border-yellow-300 w-[100%] h-[40px] px-6 py-1 text-yellow-300 rounded-md hover:bg-yellow-300 hover:text-black transition duration-300 ease-in-out">
                          Explore
                        </button>
                      </a> */}
                    {/* </div> */}
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

const EventsPageLayout = () => {
  return (
    <>
      <Navbar2 />
      <Campus />
      <EventsLayout />
    </>
  );
};

export default EventsPageLayout;
