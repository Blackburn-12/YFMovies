import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
const Navbar = ({ setSearchQuery }) => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle((perv) => !perv);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchQuery(search);
    }
  };

  return (
    <>
      <header>
        <nav>
          <div className="p-4 flex justify-between items-center mx-auto">
            {/* logo div */}
            <div>
              <a href="/">
                <img
                  src="https://static.wixstatic.com/media/b8c40a_fc1fc2c24f774c398c408e4e355d0b23~mv2.png/v1/fill/w_196,h_224,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20Yellow%20Film%20Machine-Header.png"
                  alt="Logo"
                  height={120}
                  width={60}
                />
              </a>
            </div>

            {/* search-bar div */}
            <div className="max-w-lg w-full bg-Dark p-1 rounded-lg shadow-md">
              <div className="relative max-w-lg w-full bg-Dark p-1 rounded-lg shadow-md">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  className="w-full bg-Dark pl-10 px-4 py-2 rounded-lg border border-gray-800 focus:outline-none focus:border-gray-700 text-white placeholder:font-Kanit"
                  placeholder="Search Movies"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
            </div>

            {/* links div */}
            <div>
              <ul className="max-lg:hidden flex flex-1 gap-8">
                <Link
                  className="font-Kanit font-normal block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 text-white md:hover:text-primary"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="font-Kanit font-normal block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 text-white md:hover:text-primary"
                  to="/Popularmovies"
                >
                  Popular Movies
                </Link>
              </ul>
            </div>

            <div className="hidden max-lg:block ">
              <span onClick={toggleButton}>
                {toggle ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
                <div
                  className={`${
                    toggle ? "flex" : "hidden"
                  } p-6 sideBarBg absolute top-20 right-0 mx-2 my-1 min-w-[140px] rounded-lg sidebar`}
                >
                  <ul className="list-none flex flex-col justify-end items-center flex-1 md:gap-3">
                    <Link
                      className="font-Kanit font-normal block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 text-white md:hover:text-primary"
                      to="/"
                    >
                      Home
                    </Link>
                    <Link
                      className="font-Kanit font-normal block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 text-white md:hover:text-primary"
                      to="/Popularmovies"
                    >
                      Popular Movies
                    </Link>
                  </ul>
                </div>
              </span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
