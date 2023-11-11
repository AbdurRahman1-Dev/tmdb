import GetSearchData from "@/lib/GetSearchData";
import React from "react";

const page = () => {
  const { searchData } = GetSearchData(
    "movie?query=we&include_adult=false&language=en-US&page=1"
  );
  console.log(searchData);
  return <div>serch</div>;
};

export default page;
