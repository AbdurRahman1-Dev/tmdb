import MainDetails from "@/components/showDetails/MainDetails";
import GetMoviesData from "@/lib/GetMoviesData";

// set dynamic metadata
export async function generateMetadata({ params }) {
  // fetch data
  const showData = await GetMoviesData(`movie/${params.id}`);
  return {
    title: `TmDB | ${showData?.title || showData?.name}`,
    description: showData?.overview,
  };
}

const page = async ({ params }) => {
  const showData = await GetMoviesData(`movie/${params.id}`);
  const { cast } = await GetMoviesData(`movie/${params.id}/credits`);

  return (
    <main>
      <MainDetails showData={showData} cast={cast} />
    </main>
  );
};

export default page;
