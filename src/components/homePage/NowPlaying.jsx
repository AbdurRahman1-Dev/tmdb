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
import { FaRegCirclePlay } from "react-icons/fa6";
import ViewAllTitle from "../shared/ViewAllTitle";

const NowPlaying = ({ nowPlayingshows: shows }) => {
  return (
    <section className="container mx-auto px-2 md:px-0 space-y-5 ">
      <Title title={"Now Playing"} />
      <ViewAllTitle
        title={"Watch Now"}
        subTitle={"TV shows and movies just for you"}
      />
      <div className="w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
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
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper "
        >
          {shows?.slice(0, 5)?.map((show) => (
            <SwiperSlide key={show?.id}>
              <div
                key={show?.id}
                className="card card-compact w-full relative group shadow-xl "
              >
                <Image
                  className="w-full h-full object-cover  "
                  width={500}
                  height={400}
                  loading="lazy"
                  src={`${
                    show?.poster_path
                      ? `https://image.tmdb.org/t/p/original/${show?.backdrop_path}`
                      : fallback
                  }`}
                  alt={show?.title}
                />
                <div className="absolute bottom-0 left-0 flex justify-start items-end gap-2 text-white playingBgGradinet w-full h-full p-2">
                  <FaRegCirclePlay className="md:text-5xl text-2xl group-hover:text-info transition duration-200" />

                  <div>
                    <p className="md:text-xl text-lg">
                      {show?.title?.slice(0, 12)} ...
                    </p>
                    <span className="md:text-sm text-sm">
                      {show?.overview?.slice(0, 30)} ...
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NowPlaying;
