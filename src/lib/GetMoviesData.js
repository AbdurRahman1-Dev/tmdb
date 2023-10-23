const GetMoviesData = async (params) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}${params}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
        },
      },
      { cache: "force-cache" }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default GetMoviesData;
