import React, { useEffect, useState } from "react";
import Pagination from "./Components/Pagination";
import Posts from "./Components/Posts";
import axios from "axios";
import NavPage from "../../../../Client/Interface/NavPage/NavPage";


const Liste_type_carte_bancaire = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

 
  useEffect(() => {
    const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('http://localhost:4000/api/type/carte/findall');
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
   <div>
                       <NavPage name="Cartes bancaires"/>

       <div className="card-body pt-4 p-3">
      
      <Posts posts={currentPosts} setPosts={setPosts} loading={loading} />
       <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
   </div>
  );
};

export default Liste_type_carte_bancaire;