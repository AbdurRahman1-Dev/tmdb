"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import Image from "next/image";

const ProductionCom = ({ cast: casts }) => {
  return (
    <div className="md:-mt-28 container mx-auto  w-full mt-5">
      <Swiper
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper "
      >
        {casts?.slice(0, 12)?.map((cast) => (
          <SwiperSlide key={cast.id}>
            <div key={cast.id}>
              <Image
                className="w-[50px] md:w-[80px] h-[50px] md:h-[80px] object-cover rounded-full bg-white"
                width={80}
                height={80}
                loading="lazy"
                src={`${
                  cast?.profile_path
                    ? `https://image.tmdb.org/t/p/original/${cast?.profile_path}`
                    : "https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg"
                }`}
                alt={cast?.name}
              />
              <p className="text-xs md:text-base text-gray-100">{cast?.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductionCom;
