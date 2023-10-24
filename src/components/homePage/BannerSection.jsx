"use client";

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
    <section className="w-full md:-mt-16 -z-0">
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
        {popularMovies?.map((movie) => {
          return (
            <SwiperSlide key={movie?.id}>
              <div
                key={movie?.id}
                className="md:h-screen h-[200px] w-full flex justify-start items-center object-cover"
              >
                {/* background Image */}
                <Image
                  className="w-full h-full -z-0 bg-no-repeat object-cover object-top bg-center relative"
                  fill={true}
                  loading="lazy"
                  src={`${
                    movie?.backdrop_path
                      ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
                      : "https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg"
                  }`}
                  alt={movie?.title}
                />

                <div className="h-full bannerGradient w-full z-10">
                  <div className="h-full flex items-end justify-between container mx-auto md:pb-5 w-full">
                    <div className="w-full flex justify-start items-end gap-5 ">
                      <div>
                        <Image
                          className="w-[150px] md:w-[250px]"
                          width={150}
                          height={200}
                          loading="lazy"
                          src={`${
                            movie?.backdrop_path
                              ? `https://image.tmdb.org/t/p/original/${movie?.poster_path}`
                              : "https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg"
                          }`}
                          alt={movie?.title}
                        />
                      </div>
                      <div className=" w-full md:space-y-2 space-y-[2px]">
                        <h2 className="md:text-4xl text-base text-gray-100 font-bold">
                          {movie?.title}
                        </h2>
                        <p className="md:text-sm text-xs text-gray-200">
                          {movie?.overview.slice(0, 40)} ...
                        </p>
                        <p className="md:text-sm text-xs text-gray-300 hidden md:block">
                          <FaCalendarCheck className="inline-block mr-1" />{" "}
                          {movie?.release_date}
                        </p>
                        <Link href={`/showdetails/${movie?.id}`}>
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
          );
        })}
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
