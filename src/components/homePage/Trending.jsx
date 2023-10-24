"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import Image from "next/image";
import Title from "../shared/Title";
import Link from "next/link";

const Trending = ({ trendingShows }) => {
  return (
    <section className="container mx-auto px-2 md:px-0 space-y-5 ">
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
              slidesPerView: 3,
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
              <Link href={`/showdetails/${show?.id}`}>
                <div
                  key={show.id}
                  className="flex items-end gap-3 w-full h-full group"
                >
                  <div className="text-center space-y-2 flex flex-col justify-end items-end w-1/4">
                    <p
                      className="transform rotate-180 text-center md:text-[16px] text-sm group-hover:text-info transition duration-200"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      {show?.title.slice(0, 18)} ...
                    </p>

                    <p className="text-xl text-info">{i + 1}</p>
                  </div>
                  <div className="w-3/4 h-full">
                    <Image
                      className="w-[150px] md:w-[250px] h-[180px] md:h-[270px] object-cover"
                      width={150}
                      height={200}
                      loading="lazy"
                      src={`${
                        show?.poster_path
                          ? `https://image.tmdb.org/t/p/original/${show?.poster_path}`
                          : "https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg"
                      }`}
                      alt={show?.title}
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Trending;
