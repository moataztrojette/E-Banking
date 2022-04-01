import React, { useEffect, useState } from "react";
import Posts from "./Components/Posts";
import Pagination from "./Components/Pagination";
import axios from "axios";
import FilterData from "./Components/FilterData";



const VirementEnvoyer = (props) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);


    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:4000/api/virement/envoyer/'+props.id);
            setPosts(res.data);
            setLoading(false);
          };
      
          fetchPosts();
      }, []);
      // Get current posts

      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

      
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className="card-body pt-4 p-3">
      <FilterData   posts={currentPosts} setPosts={setPosts} id={props.id} /> 
      <Posts posts={currentPosts} setPosts={setPosts} loading={loading} />
       <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default VirementEnvoyer;
