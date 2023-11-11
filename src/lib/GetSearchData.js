"use client";

import { useEffect, useState } from "react";

const GetSearchData = (query) => {
  const [searchData, setSearchData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`${process.env.BASE_URL}${"trending/movie/day"}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSearchData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [query]);

  return {
    searchData,
    isLoading,
    error,
  };
};

export default GetSearchData;
