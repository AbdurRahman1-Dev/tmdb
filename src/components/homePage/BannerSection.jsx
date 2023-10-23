"use client";
import fallback from "../../../public/placeholder.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import { FaAngleLeft, FaAngleRight, FaCalendarCheck } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const BannerSection = ({ popularMovies }) => {
  return (
    <section>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          //navigation（arrows）
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper "
      >
        {popularMovies?.map((movie) => (
          <SwiperSlide key={movie?.id}>
            <div
              style={{
                backgroundImage: `url(${
                  movie?.backdrop_path
                    ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
                    : fallback
                })`,
              }}
              className="md:h-screen h-[200px] w-full flex justify-start items-center bg-cover bg-center bg-no-repeat object-cover"
            >
              <div className="h-full bannerGradient w-full ">
                <div className="h-full flex items-end justify-between container mx-auto md:pb-5 w-full">
                  <div className="w-full flex justify-start items-end gap-5 ">
                    <div>
                      <Image
                        className="w-[100px] md:w-[250px]"
                        width={150}
                        height={200}
                        src={`${
                          movie?.backdrop_path
                            ? `https://image.tmdb.org/t/p/original/${movie?.poster_path}`
                            : fallback
                        }`}
                        alt={movie?.title}
                      />
                    </div>
                    <div className=" w-full md:space-y-2 space-y-[2px]">
                      <h2 className="md:text-4xl text-sm text-gray-100 font-bold">
                        {movie?.title}
                      </h2>
                      <p className="md:text-sm text-[10px] text-gray-200">
                        {movie?.overview.slice(0, 40)} ...
                      </p>
                      <p className="md:text-sm text-[10px] text-gray-300">
                        <FaCalendarCheck className="inline-block mr-1" />{" "}
                        {movie?.release_date}
                      </p>
                      <Link href={"/"}>
                        <button className="btn btn-info md:btn-sm btn-xs rounded-full flex gap-1 group my-1 md:mt-2">
                          Details
                          <FaAngleRight className="inline-block group-hover:translate-x-1 duration-200" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* slider customized arrow */}
      <div className="hidden md:block">
        <div className="swiper-button-prev bg-gray-700 p-1 rounded-md">
          <FaAngleLeft className="text-info" />
        </div>
        <div className="swiper-button-next bg-gray-700 p-1 rounded-md">
          <FaAngleRight className="text-info" />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
