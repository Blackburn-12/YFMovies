import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Navbar, SkeletonCard } from "./index.js";

const Home = () => {
  const [data, setData] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const api = "https://movieapp-zyqr.onrender.com/api/v1/nowplayingmovies"



  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${api}`);
      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      // console.log("error", error);
    }
  };
  return (
    <>
    <div className="bg-Dark ">
    <Navbar setSearchQuery={setSearchQuery} />
    <div className="bg-Dark min-h-screen">
    <div className="flex flex-wrap justify-center bg-Dark">
        {data ? (
          data
            .filter((data) =>
              data.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((data, index) => <Card cardData={data} key={index} />)
        ) : (

          <div className="w-full h-screen overflow-hidden flex justify-center items-center bg-Dark">
            <SkeletonCard/>
          </div>
        )}
      </div>
    </div>
     
    </div>
     
    </>
  );
};

export default Home;
