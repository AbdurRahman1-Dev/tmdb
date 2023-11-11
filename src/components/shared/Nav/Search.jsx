"use client";
import GetSearchData from "@/lib/GetSearchData";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = () => {
  const searchData = GetSearchData(
    "movie?query=we&include_adult=false&language=en-US&page=1"
  );
  console.log(searchData);
  return (
    <div className="w-full justify-start border-gray-600 md:border-r-[1px] md:pr-5">
      <form className="form-control w-full relative">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered focus:outline-none md:w-auto w-full input-sm md:input-md"
        />
        <button className="absolute top-1/2  -translate-x-1/2 -translate-y-1/2 right-3 md:text-xl text-sm text-info duration-200">
          <FaMagnifyingGlass />
        </button>
      </form>
    </div>
  );
};

export default Search;
