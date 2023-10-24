import BannerSection from "@/components/homePage/BannerSection";
import NowPlaying from "@/components/homePage/NowPlaying";
import Trending from "@/components/homePage/Trending";

import GetMoviesData from "@/lib/GetMoviesData";

export default async function Home() {
  const { results: popularMovies } = await GetMoviesData("movie/popular");
  const { results: trendingShows } = await GetMoviesData("trending/movie/day");
  const { results: nowPlayingshows } = await GetMoviesData("movie/now_playing");
  return (
    <main className="space-y-5 md:space-y-16">
      <BannerSection popularMovies={popularMovies} />
      <Trending trendingShows={trendingShows} />
      <NowPlaying nowPlayingshows={nowPlayingshows} />
    </main>
  );
}
