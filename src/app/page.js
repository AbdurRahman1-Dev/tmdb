import BannerSection from "@/components/homePage/BannerSection";
import Trending from "@/components/homePage/Trending";
import LoadingBig from "@/components/shared/LoadingBig";
import GetMoviesData from "@/lib/GetMoviesData";
import { Suspense } from "react";

export default async function Home() {
  const { results: popularMovies } = await GetMoviesData("movie/popular");
  const { results: trendingShows } = await GetMoviesData("trending/movie/day");

  return (
    <main className="space-y-10">
      <BannerSection popularMovies={popularMovies} />
      <Suspense fallback={<LoadingBig />}>
        <Trending trendingShows={trendingShows} />
      </Suspense>
    </main>
  );
}
