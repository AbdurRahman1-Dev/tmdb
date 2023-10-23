import BannerSection from "@/components/homePage/BannerSection";
import Trending from "@/components/homePage/Trending";
import GetMoviesData from "@/lib/GetMoviesData";
import React, { Suspense } from "react";

const HomePage = async ({ popularMovies }) => {
  const { results: trendingShows } = await GetMoviesData("trending/movie/day");

  return (
    <div className="md:-mt-[64px] space-y-14">
      <BannerSection popularMovies={popularMovies} />
      <Suspense
        fallback={<span className="loading loading-spinner loading-lg"></span>}
      >
        <Trending trendingShows={trendingShows} />
      </Suspense>
    </div>
  );
};

export default HomePage;
