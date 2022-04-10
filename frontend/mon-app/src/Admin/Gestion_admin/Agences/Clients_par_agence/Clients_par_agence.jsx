import React, { useEffect, useState } from "react";
import Pagination from "./Components/Pagination";
import Posts from "./Components/Posts";
import axios from "axios";
import Modal from "react-modal";

const Clients_par_agence = (props) => {
  const [posts, setListeClientAgence] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "http://localhost:4000/api/client/agence/find/" +
          props.modalListeClientParAgenceIsOpen.info
      );
      setListeClientAgence(res.data);
    };

    fetchPosts();
  }, []);
  // Get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Modal
        isOpen={props.modalListeClientParAgenceIsOpen.open}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() =>
          props.setModalListeClientParAgenceIsOpen({ open: false, info: {} })
        }
        style={{
          content: {
            width:"75em",
            height:"37em",
            top: "50%",
            left: "55%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
          overlay: {
            backgroundColor: "rgba(206, 239, 248,0.8)",
          },
        }}
      >
         <div className="bloc_creation_compte">
         

         <div className="mb-2">
           <img src="/img/icons8-xbox-x-64.png"
           className="img_x"
             onClick={() =>
               props.setModalListeClientParAgenceIsOpen({ open: false })
             }
           >
            
           </img>
         </div>
       </div>
        {" "}
        <div className="card-body pt-4 p-3">
          <Posts
            posts={currentPosts}
            setListeClientAgence={setListeClientAgence}
            loading={loading}
          />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
       
      </Modal>
    </div>
  );
};

export default Clients_par_agence;
