const GetMoviesData = async (params) => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}${params}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        },
      },
      { next: { revalidate: 3600 } }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default GetMoviesData;
