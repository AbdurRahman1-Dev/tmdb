import BannerSection from "@/components/homePage/BannerSection";
import Trending from "@/components/homePage/Trending";

import GetMoviesData from "@/lib/GetMoviesData";

export default async function Home() {
  const { results: popularMovies } = await GetMoviesData("movie/popular");
  const { results: trendingShows } = await GetMoviesData("trending/movie/day");

  return (
    <main className="space-y-10">
      <BannerSection popularMovies={popularMovies} />
      <Trending trendingShows={trendingShows} />
    </main>
  );
}
