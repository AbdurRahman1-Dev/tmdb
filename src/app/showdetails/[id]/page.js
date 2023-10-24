import MainDetails from "@/components/showDetails/MainDetails";
import GetMoviesData from "@/lib/GetMoviesData";

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
