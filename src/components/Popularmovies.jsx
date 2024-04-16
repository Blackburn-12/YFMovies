import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Navbar, Pagination, SkeletonCard } from "./index.js";

const Popularmovies = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postperpage, setPostPerPage] = useState(16);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPosts = filteredData.length;
  const lastPostIndex = currentPage * postperpage;
  const firstPostIndex = lastPostIndex - postperpage;
  const currentPost = filteredData.slice(firstPostIndex, lastPostIndex);

  const popularApi = `https://movieapp-zyqr.onrender.com/api/v1/toprated_movies`;

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(`${popularApi}`);
      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <>
      <div className="bg-Dark">
        <Navbar setSearchQuery={setSearchQuery} />
        <div className=" flex flex-wrap justify-center">
          {currentPost ? (
            currentPost
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
        <Pagination
            totalPosts={totalPosts}
            postperpage={postperpage}
            setCurrentPage={handlePageChange}
            currentPage={currentPage}
          />
      </div>
    </>
  );
};

export default Popularmovies;
