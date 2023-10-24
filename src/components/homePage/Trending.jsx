"use client";
import fallback from "../../../public/placeholder.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import Image from "next/image";
import Title from "../shared/Title";

const Trending = ({ trendingShows }) => {
  return (
    <section className="container mx-auto px-2 md:px-0 space-y-10">
      <Title title={"Trending"} />
      <div className="w-full">
        <Swiper
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper "
        >
          {trendingShows?.map((show, i) => (
            <SwiperSlide key={show.id}>
              <div key={show.id} className="flex items-end gap-3 w-full h-full">
                <div className="text-center space-y-2 flex flex-col justify-end items-end w-1/4">
                  <p
                    className="transform rotate-180 text-center md:text-[16px] text-xs"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    {show?.title.slice(0, 18)} ...
                  </p>

                  <p className="text-xl text-info">{i + 1}</p>
                </div>
                <div className="w-3/4">
                  <Image
                    className="w-[100px] md:w-[250px]"
                    width={150}
                    height={200}
                    src={`${
                      show?.poster_path
                        ? `https://image.tmdb.org/t/p/original/${show?.poster_path}`
                        : fallback
                    }`}
                    alt={show?.title}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Trending;
