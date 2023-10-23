import GetMoviesData from "@/lib/GetMoviesData";
import HomePage from "@/pages/HomePage";

export default async function Home() {
  const { results: popularMovies } = await GetMoviesData("movie/popular");

  return (
    <main>
      <HomePage popularMovies={popularMovies} />
    </main>
  );
}
