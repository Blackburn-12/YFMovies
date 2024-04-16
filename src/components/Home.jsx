import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Navbar, SkeletonCard, Pagination } from "./index.js";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postperpage, setPostPerPage] = useState(16);
  const api = "https://movieapp-zyqr.onrender.com/api/v1/nowplayingmovies";


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


  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${api}`);
      setData(response.data);
    } catch (error) {
      // console.log("error", error);
    }
  };
  return (
    <>
      <div className="bg-Dark ">
        <Navbar
          setSearchQuery={setSearchQuery}
          setCurrentPage={setCurrentPage}
        />
        <div className=" bg-Dark min-h-screen">
          <div className="flex flex-wrap justify-center bg-Dark">
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
          <div></div>
          <Pagination
            totalPosts={totalPosts}
            postperpage={postperpage}
            setCurrentPage={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
