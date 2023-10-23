"use client";
import {
  FaAngleLeft,
  FaBarsStaggered,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import ThemeSwirch from "./ThemeSwirch";
import { useEffect, useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, [colorChange]);
  return (
    <header
      className={` md:sticky md:top-0 z-[999] transition duration-100 ${
        colorChange && " backdrop-filter backdrop-blur-xl shadow-lg "
      }`}
    >
      <div className="navbar justify-between container mx-auto gap-5">
        <div className="flex gap-2">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className="text-2xl cursor-pointer text-gray-200"
            >
              <FaBarsStaggered></FaBarsStaggered>
            </label>
          </div>
          <div>
            <Link
              href={"/"}
              className="btn btn-sm btn-ghost normal-case text-sm md:text-xl text-info"
            >
              TmDB
            </Link>
          </div>
          <div className="drawer-side w-[80%] sm:w-full z-50">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <ul className="menu p-4 w-80 min-h-full  text-base-content  backdrop-filter backdrop-blur-2xl">
              <button className="btn btn-sm md:btn-md btn-info btn-outline w-1/2">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay flex justify-start items-center text-xl"
                >
                  <FaAngleLeft />
                  close
                </label>
              </button>
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full justify-start border-gray-600 md:border-r-[1px] md:pr-5">
          <form className="form-control w-full relative">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered focus:outline-none md:w-auto w-full"
            />
            <button className="absolute top-1/2  -translate-x-1/2 -translate-y-1/2 right-3 text-xl text-info duration-200">
              <FaMagnifyingGlass />
            </button>
          </form>
        </div>
        <div className="md:flex gap-5 hidden">
          <div className="indicator">
            <span className="indicator-item badge badge-info">0</span>
            <button className="btn btn-sm">Watchlist</button>
          </div>
          <button className="btn btn-sm btn-info">SignIn</button>
          <ThemeSwirch />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
