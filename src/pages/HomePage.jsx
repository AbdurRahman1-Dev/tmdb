import BannerSection from "@/components/homePage/BannerSection";
import Trending from "@/components/homePage/Trending";
import LoadingBig from "@/components/shared/LoadingBig";
import GetMoviesData from "@/lib/GetMoviesData";
import { Suspense } from "react";

const HomePage = async ({ popularMovies }) => {
  const { results: trendingShows } = await GetMoviesData("trending/movie/day");

  return (
    <div className="md:-mt-[64px] space-y-14">
      <BannerSection popularMovies={popularMovies} />
      <Suspense fallback={<LoadingBig />}>
        <Trending trendingShows={trendingShows} />
      </Suspense>
    </div>
  );
};

export default HomePage;
