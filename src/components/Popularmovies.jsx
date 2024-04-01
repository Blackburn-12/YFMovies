import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Navbar, SkeletonCard } from "./index.js";

const Popularmovies = () => {
  const [data, setData] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const popularApi = `https://movieapp-zyqr.onrender.com/api/v1/toprated_movies`;

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(`${popularApi}`);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <>
      <div className="bg-Dark">
        <Navbar setSearchQuery={setSearchQuery} />
        <div className="flex flex-wrap justify-center">
          {data ? (
            data
              .filter((data) =>
                data.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((data, index) => <Card cardData={data} key={index} />)
          ) : (
            <div className="w-full h-screen overflow-hidden flex justify-center items-center bg-Dark">
            <SkeletonCard />

            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Popularmovies;
