import BannerSection from "@/components/homePage/BannerSection";
import Trending from "@/components/homePage/Trending";
import GetMoviesData from "@/lib/GetMoviesData";

const HomePage = async ({ popularMovies }) => {
  const { results: trendingShows } = await GetMoviesData("trending/movie/day");

  return (
    <div className="md:-mt-[64px] space-y-14">
      <BannerSection popularMovies={popularMovies} />
      <Trending trendingShows={trendingShows} />
    </div>
  );
};

export default HomePage;
