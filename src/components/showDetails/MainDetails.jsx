import Image from "next/image";
import {
  FaArrowUpRightDots,
  FaCalendarCheck,
  FaDollarSign,
  FaMicrophone,
  FaPlus,
  FaStar,
  FaUser,
} from "react-icons/fa6";
import ProductionCom from "./CastSlider";
const MainDetails = ({ showData, cast }) => {
  return (
    <>
      <section className="md:h-screen h-fit w-full  object-cover md:-mt-16 overflow-hidden">
        <Image
          className="w-full h-full -z-0 bg-no-repeat object-cover object-top bg-center relative hidden md:block"
          fill={true}
          loading="lazy"
          src={`${
            showData?.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${showData?.backdrop_path}`
              : "https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg"
          }`}
          alt={showData?.title}
        />

        <div className=" md:bg-[#000000c5] w-full h-full backdrop-filter backdrop-blur-lg">
          <div className="flex justify-start md:items-center w-full h-full container mx-auto px-2 md:px-0 ">
            <div className="md:flex items-start gap-5 space-y-3">
              <Image
                className="w-[150px] md:w-[300px] object-cover"
                width={200}
                height={200}
                loading="lazy"
                src={`${
                  showData?.poster_path
                    ? `https://image.tmdb.org/t/p/original/${showData?.poster_path}`
                    : "https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg"
                }`}
                alt={showData?.title}
              />

              <div className=" md:space-y-5 space-y-2">
                <h2 className="md:text-4xl text-base text-gray-100 font-bold">
                  {showData?.title}
                </h2>

                <div className="flex items-center gap-3">
                  <p className="md:text-lg text-sm text-gray-200 ">
                    <FaCalendarCheck className="inline-block mr-1" />{" "}
                    {showData?.release_date}
                  </p>

                  <p className="md:text-lg text-sm text-gray-200 ">
                    <FaArrowUpRightDots className="inline-block mr-1" />{" "}
                    {showData?.popularity}
                  </p>
                  <p className="md:text-lg text-sm text-gray-200 ">
                    <FaMicrophone className="inline-block mr-1" />{" "}
                    {showData?.original_language}
                  </p>
                </div>
                <article className="md:text-sm text-xs text-gray-200">
                  {showData?.overview} ...
                </article>

                <div className="flex items-start justify-between gap-5 md:w-3/4">
                  <div>
                    <p className="md:text-xl text-lg text-gray-200 ">
                      <FaStar className="inline-block mr-1 text-warning text-3xl" />
                      <span className="text-white">
                        {showData?.vote_average} <sup>/10</sup>{" "}
                      </span>
                    </p>

                    <button className="btn btn-info md:btn-sm btn-xs rounded-full flex gap-1 group my-1 md:mt-2">
                      Add to WishList
                      <FaPlus className="inline-block group-hover:scale-105 duration-200" />
                    </button>
                    <p className="md:text-sm text-xs text-gray-200">
                      <span>Tagline: </span> {showData?.tagline}
                    </p>
                  </div>

                  <div className="md:flex md:justify-center md:gap-3 hidden">
                    <p className="md:text-base text-sm text-gray-100">
                      <FaDollarSign className="inline-block mr-1" />
                      Revenue:
                      <span> {showData?.revenue}</span>
                    </p>
                    <p className="md:text-base text-sm text-gray-100">
                      <FaUser className="inline-block mr-1" />
                      vote:
                      <span> {showData?.vote_count}</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {showData?.genres?.map((genre) => (
                    <button
                      className="btn btn-outline border-info text-info btn-xs md:btn-sm hover:btn-info"
                      key={genre.id}
                    >
                      {genre.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <ProductionCom cast={cast} />
        </div>
      </section>
    </>
  );
};

export default MainDetails;
